import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/nosotros',
            name: 'nosotros',
            component: () => import('../views/NosotrosView.vue')
        },
        {
            path: '/tienda',
            name: 'tienda',
            component: () => import('../views/TiendaView.vue')
        },
        {
            path: '/servicios',
            name: 'servicios',
            component: () => import('../views/ServiciosView.vue')
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import('../views/ContactoView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router
