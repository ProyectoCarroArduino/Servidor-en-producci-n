import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      //meta: {requiresGuest: true}
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
      //meta: {requiresGuest: true}
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/auth/UserView.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/auth/ProfileView.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/descomposicion',
      name: 'descomposicion',
      component: () => import("../views/auth/Descomposition.vue"),
    },
    {
      path: '/abstraccion',
      name: 'abstraccion',
      component: () => import("../views/auth/Abstraction.vue"),
    },
    {
      path: '/algoritmo',
      name: 'algoritmo',
      component: () => import("../views/auth/Algorithm.vue"),
    },
    {
      path: '/generalizacion',
      name: 'generalizacion',
      component: () => import("../views/auth/Generalization.vue"),
    },
    {
      path: '/descomposicionEj',
      name: 'descomposicionEj',
      component: () => import("../views/auth/DescompositionEj.vue"),
    },
    {
      path: '/algoritmoEj',
      name: 'algoritmoEj',
      component: () => import("../views/auth/AlgorithmEj.vue"),
    },
    {
      path: '/abstraccionEj',
      name: 'abstraccionEj',
      component: () => import("../views/auth/AbstractionEj.vue"),
    },
    {
      path: '/generalizacionEj',
      name: 'generalizacionEj',
      component: () => import("../views/auth/GeneralizationEj.vue"),
    },
    {
      path: '/descomposicionExc',
      name: 'descomposicionExc',
      component: () => import("../views/auth/DescompositionExc.vue"),
    },
  ]
})

router.beforeResolve(async (to, from, next)=>{
  const authStore = useAuthStore()

  if(to.meta.requiresAuth && !authStore.isAuthenticated){   
    return next({name: 'login', query: {redirect: to.fullPath}})
  }else if(to.meta.requiresGuest && authStore.isAuthenticated){
    return next({name: 'home'})
  }else{
    return next();
  }
}) 


export default router
