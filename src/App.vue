<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import informacion from './components/informacion.vue';
</script>





<template>


    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <informacion nombre="JUAN JOSE"/>

      <div class="content">
        <div class="container p-0">
          <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
              <a href="#" class="navbar-brand d-block d-lg-none">Navigation</a>
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div class="navbar-nav m-auto">
                    <RouterLink to="/" class="nav-item nav-link">Inicio</RouterLink>
                    <RouterLink to="/sobremi" class="nav-item nav-link">Sobre mi</RouterLink>
                    <RouterLink to="/contacto" class="nav-item nav-link">Contacto</RouterLink>
                    <RouterLink to="/categorias" class="nav-item nav-link">Categorias</RouterLink>
                    <RouterLink to="/blog" class="nav-item nav-link">blog</RouterLink>
                  </div>
              </div>
          </nav>
      </div>
      <RouterView />
          <!-- Footer Start -->
          <div class="container py-4 bg-secondary text-center">
            <p class="m-0 text-white">
                &copy; <a class="text-white font-weight-bold" href="#">Mi Blog</a>. All Rights Reserved. Designed by <a class="text-white font-weight-bold" href="https://github.com/juanjopotes">JuanjoPotes</a>
            </p>
        </div>
        <!-- Footer End -->
      </div>
    </div>


  
</template>

<style scoped>

</style>
