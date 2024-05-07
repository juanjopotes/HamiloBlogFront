import { createRouter, createWebHistory } from 'vue-router'
import inicioView from '../views/inicioView.vue'
import VerMas from '../views/VerMas.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import BlogView from '@/views/BlogView.vue'
import SobreMiView from '@/views/SobreMiView.vue'
import ContactoView from '@/views/ContactoView.vue'
import AuthView from '../views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: inicioView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vermas/:id',
      name: 'vermas',
      component: VerMas 
    },
    {
      path: '/Categorias',
      name: 'Categorias',
      component: CategoriasView 
    },
    {
      path: '/blog/:param?',
      name: 'blogsView',
      component: BlogView
    }
    ,
    {
      path: '/sobremi',
      name: 'sobremi',
      component: SobreMiView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    }
  ]
})

export default router
