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
        <div class="container py-5 px-2 bg-white">
            <div class="row px-4">
                <div v-for="item in categorias" :key="item" class="col-md-6">
                    <div @click="filtrar(item.nombre)" class="card bg-dark text-white m-1" type="button"> <img :src="item.imagen" class="card-img" alt="..." style="width: 100%; max-height:200px">
                        <div class="card-img-overlay text-center">
                            <h2 class="card-title text-dark pt-3">
                                 
                                <br><b>{{item.nombre}}</b></h2>
                            <p class="card-text"></p>
                            <p class="card-text text-dark"><i class="fa fa-list"></i>  {{item.cant_posts}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router';
 
    export default {
        setup() {
            const router = useRouter();
            const categorias = ref({});
            
            const baseUrl = 'http://hamiloblog.test/api';
           
            onMounted(() => {
                obtenerDatos();
            })
 
            const obtenerDatos = async () => {
                try{
                    const { data } = await axios.get(baseUrl + '/categorias');
                    categorias.value = data.datos;
                    console.log(data.datos);
                } catch (error){
                    console.log(error);
                }
            }
            const filtrar = (id) =>{
                router.push({path: '/blog/' + id})
            }

 
            return {
                categorias,
                filtrar
            }
        }
    }
</script>
<style>
    
</style>