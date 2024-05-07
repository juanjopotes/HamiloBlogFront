<template>
    <div>
        <div class="container py-5 px-2 bg-primary">
            <div class="row py-5 px-4">
                <div class="col-sm-6 text-center text-md-left">
                    <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Detalle</h1>
                </div>
                <div class="col-sm-6 text-center text-md-right">
                    <div class="d-inline-flex pt-2">
                        <h4 class="m-0 text-white">
                            <RouterLink to="/" class="text-white">Inicio</RouterLink>
                        </h4>
                        <h4 class="m-0 text-white px-2">/</h4>
                        <h4 class="m-0 text-white">Detalle</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact Start -->
        <div class="container bg-white pt-5">
            <div class="row px-3 pb-2">
                <div class="col-sm-4 text-center mb-3">
                    <i class="fa fa-2x fa-globe mb-3 text-primary"></i>
                    <h4 class="font-weight-bold">
                        Website</h4>
                    <p>123 Street, New York, USA</p>
                </div>
                <div class="col-sm-4 text-center mb-3">
                    <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                    <h4 class="font-weight-bold">Telefono</h4>
                    <p>+591 76782224</p>
                </div>
                <div class="col-sm-4 text-center mb-3">
                    <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
                    <h4 class="font-weight-bold">Email</h4>
                    <p>jupo2015@outlook.com</p>
                </div>
            </div>
            <div class="col-md-12 pb-5">
                <div class="contact-form">
                    <div v-show="enviado == true" class="alert alert-success">
                        Mensaje Enviado Correctamente
                    </div>
                    <div id="success"></div>
                        <div class="control-group">
                            <input v-model="nombre" type="text" class="form-control" id="name" placeholder="Nombre Completo"
                                required="required" data-validation-required-message="Please enter your name" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input v-model="correo" type="email" class="form-control" id="email" placeholder="Tu correo"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input v-model="asunto" type="text" class="form-control" id="subject" placeholder="Asunto"
                                required="required" data-validation-required-message="Please enter a subject" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <textarea v-model="mensaje" class="form-control" rows="8" id="message" placeholder="Mensaje"
                                required="required"
                                data-validation-required-message="Please enter your message"></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-primary" type="button" @click="enviarMensaje()">Enviar Mensaje</button>
                        </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
    </div>
</template>
<script>
import axios from 'axios';
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
    setup() {
        // const router = useRouter();
        const nombre = ref('');
        const asunto = ref('');
        const mensaje = ref('');
        const correo = ref('');
        const enviado = ref(false);
        const baseUrl = 'http://hamiloblog.test/api';


        const enviarMensaje = async () => {
            if(nombre.value == '' || correo.value == '' || asunto.value == '' || mensaje.value == ''){
                alert('Todos los campos requeridos');
                return
            }
            try {
                const { data } = await axios.post(baseUrl + '/contactos', {
                    nombre: nombre.value,
                    correo: correo.value,
                    asunto: asunto.value,
                    mensaje: mensaje.value,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }


        return {
            nombre,
            asunto,
            correo,
            mensaje,
            enviado,

            enviarMensaje
        }
    }
}
</script>
<style></style>