<template>
    <div class="container p-0">
        <carousel :items-to-show="1" :autoplay="5000" class="carousel">
            <slide v-for="slide in slides" :key="slide" class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" :src="slide.imagen" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 class="mb-3 text-white font-weight-bold">{{slide.titulo}}</h2>
                        <div class="d-flex text-white">
                            <small class="mr-2"><i class="fa fa-calendar-alt"></i> {{slide.fecha_publicacion}}</small>
                            <small class="mr-2"><i class="fa fa-folder"></i> {{slide.nombre}}</small>
                            <small class="mr-2"><i class="fa fa-comments"></i> {{slide.cant_comentarios}}</small>
                        </div>
                        <router-link :to="'/vermas/' + slide.id" class="btn btn-lg btn-outline-light mt-4">Ver Mas</router-link>
                    </div>
                </div>
            </slide>
            <template #addons>
                <navigation />
              </template>
        </carousel>
    </div>
    
    <div>
        <!-- Blog List Start -->
        <div v-if="loading == false" class="container bg-white pt-5">
            <div v-for="item in posts" :key="item.id" class="row blog-item px-3 pb-5">
                <div class="col-md-5">
                    <img class="img-fluid mb-4 mb-md-0" :src="item.imagen" alt="Image">
                </div>
                <div class="col-md-7">
                    <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">{{item.titulo}}</h3>
                    <div class="d-flex mb-3">
                        <small class="mr-2 text-muted"><i class="fa fa-calendar-alt"></i> {{item.fecha_publicacion}}</small>
                        <small class="mr-2 text-muted"><i class="fa fa-folder"></i> {{item.categoria.nombre}}</small>
                        <small class="mr-2 text-muted"><i class="fa fa-comments"></i> {{item.cant_comentarios}}</small>
                    </div>
                    <p>
                        {{item.resumen}}
                    </p>
                    <router-link :to="'/vermas/' + item.id" class="btn btn-link p-0">Ver Mas</router-link>
                </div>
            </div>

        </div>
        <div v-else class="container bg-white pt-5 text-center">
            <i class="fas fa-spinner" style="font-size:36px;">Loading</i>
        </div>
        <!-- Blog List End -->
    </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
    setup(){
        const slides = ref([])
        const posts = ref([]);
        const loading = ref(false);
        const urlBase = 'http://hamiloblog.test/api/';
        onMounted(() => {

            obtenerDatos();
        });
        const obtenerDatos = async () =>{
            loading.value = true;
            try{
                const {data} = await axios.get(urlBase + 'posts');
                console.log(data.datos.data);
                console.log(data.paraSlider);
                posts.value = data.datos.data;
                slides.value = data.paraSlider;
                loading.value = false;
            }catch(error){
                console.log(error);
            }
        }
        return{
            slides,
            posts,
            loading,
            obtenerDatos
        }
    }
}
</script>
<style>
.carousel-item {
    width: 100% !important;
}
 
.carousel__slide.carousel__slide--visible.carousel__slide--next.carousel-inner{
    width: 100% !important;
}
 
.carousel__slide {
  width: 100% !important;
}
 
.carousel__slide--active {
  width: 100% !important;
}
 
.carousel__prev, .carousel__next {
    color: white;
}
 
.carousel__prev, .carousel__prev {
    color: white;
}
</style>