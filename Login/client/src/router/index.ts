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
      component: () => import('../views/auth/ProgresoCurso.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/EncuestaTAM',
      name: 'EncuestaTAM',
      component: () => import("../views/auth/EncuestaTAMCopy.vue"),
    } ,
    {
      path: '/Conceptos',
      name: 'Conceptos',
      component: () => import("../views/auth/GlosarioReferencias.vue"),
    } ,
    {
      path: '/Conceptos/Admin',
      name: 'AdminConceptos',
      component: () => import("../views/auth/ConceptosAdmin.vue"),
    } ,
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('../views/auth/changePassword.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GuiaConstruccion',
      name: 'GuiaConstruccion',
      component: () => import('../views/auth/GuiaConstruccion.vue'),
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
    {
      path: '/prueba',
      name: 'prueba',
      component: () => import("../views/auth/Prueba.vue"),
    },
    {
      path: '/teoria',
      name: 'teoria',
      component: () => import("../views/auth/TheorySwitch.vue"),
    },
    {
      path: '/descomposicionSwitchEj',
      name: 'descomposicionSwitchEj',
      component: () => import("../views/auth/DescompositionSwitchEj.vue"),
    },
    {
      path: '/algorithmSwitchEj',
      name: 'algorithmSwitchEj',
      component: () => import("../views/auth/AlgorithmSwitchEj.vue"),
    },
    {
      path: '/abstractionSwitchEj',
      name: 'abstractionSwitchEj',
      component: () => import("../views/auth/AbstractionSwitchEj.vue"),
    },
    {
      path: '/generalizacionSwitchEj',
      name: 'generalizacionSwitchEj',
      component: () => import("../views/auth/GeneralizationSwitchEj.vue"),
    },
    {
      path: '/descomposicionSwitchEj2',
      name: 'descomposicionSwitchEj2',
      component: () => import("../views/auth/DescompositionSwitchEj2.vue"),
    },
    {
      path: '/teoriaWhile',
      name: 'teoriaWhile',
      component: () => import("../views/auth/TheoryWhile.vue"),
    },
    {
      path: '/descomposicionWhileEj',
      name: 'descomposicionWhileEj',
      component: () => import("../views/auth/DescompositionWhileEj.vue"),
    },
    {
      path: '/generalizacionWhileEj',
      name: 'generalizacionWhileEj',
      component: () => import("../views/auth/GeneralizationWhileEj.vue"),
    },
    {
      path: '/algoritmoWhileEj',
      name: 'algoritmoWhileEj',
      component: () => import("../views/auth/AlgorithmWhileEj.vue"),
    },
    {
      path: '/abstraccionWhileEj',
      name: 'abstraccionWhileEj',
      component: () => import("../views/auth/AbstractionWhileEj.vue"),
    },
    {
      path: '/teoriaArray',
      name: 'teoriaArray',
      component: () => import("../views/auth/TheoryArray.vue"),
    },
    {
      path: '/descomposicionArrayEj',
      name: 'descomposicionArrayEj',
      component: () => import("../views/auth/DescompositionArrayEj.vue"),
    },
    {
      path: '/algoritmoArrayEj',
      name: 'algoritmoArrayEj',
      component: () => import("../views/auth/AlgorithmArrayEj.vue"),
    },
    {
      path: '/abstraccionArrayEj',
      name: 'abstraccionArrayEj',
      component: () => import("../views/auth/AbstractionArrayEj.vue"),
    },
    {
      path: '/generalizacionArrayEj',
      name: 'generalizacionArrayEj',
      component: () => import("../views/auth/GeneralizationArrayEj.vue"),
    },
    {
      path: '/teoriaFuncionesSinpar',
      name: 'teoriaFuncionesSinpar',
      component: () => import("../views/auth/TheoryParameterlessFunction.vue"),
    },
    {
      path: '/descomposicionFuncionesSinparEj',
      name: 'descomposicionFuncionesSinparEj',
      component: () => import("../views/auth/DescompositionParameterlessFunctionEj.vue"),
    },
    {
      path: '/algoritmoFuncionesSinparEj',
      name: 'algoritmoFuncionesSinparEj',
      component: () => import("../views/auth/AlgorithmParameterlessFunctionEj.vue"),
    },
    {
      path: '/abstraccionFuncionesSinparEj',
      name: 'abstraccionFuncionesSinparEj',
      component: () => import("../views/auth/AbstractionParameterlessFunctionEj.vue"),
    },
    {
      path: '/generalizacionFuncionesSinparEj',
      name: 'generalizacionFuncionesSinparEj',
      component: () => import("../views/auth/GeneralizationParameterlessFunctionEj.vue"),
    },
    {
      path: '/descomposicionFuncionesSinparEj2',
      name: 'descomposicionFuncionesSinparEj2',
      component: () => import("../views/auth/DescompositionParameterlessFunctionEj2.vue"),
    },
    {
      path: '/NotaDeEjercicio1',
      name: 'NotaDeEjercicio1',
      component: () => import("../views/auth/NotaDeEjercicio1.vue"),
    },
    {
      path: '/ConectarCablesTeoria',
      name: 'ConectarCablesTeoria',
      component: () => import("../views/auth/ConectarCablesTeoria.vue"),
    },
    {
      path: '/DescomposicionConectarCables',
      name: 'DescomposicionConectarCables',
      component: () => import("../views/auth/DescompositionConectarCables.vue"),
    },
    {
      path: '/AlgoritmoConectarCables',
      name: 'AlgoritmoConectarCables',
      component: () => import("../views/auth/AlgorithmConectarCables.vue"),
    },
    {
      path: '/AbstraccionConectarCables',
      name: 'AbstraccionConectarCables',
      component: () => import("../views/auth/AbstractionConectarCables.vue"),
    },
    {
      path: '/GeneralizacionConectarCables',
      name: 'GeneralizacionConectarCables',
      component: () => import("../views/auth/GeneralizationConectarCables.vue"),
    },
    {
      path: '/EvaluacionConectarCables',
      name: 'EvaluacionConectarCables',
      component: () => import("../views/auth/EvaluationConectarCables.vue"),
    },
    {
      path: '/resultados',
      name: 'ResultadosEncuesta',
      component: () => import('../views/auth/ResultadosEncuesta.vue')
    } 
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
