import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
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
      //meta: {requiresAuth: true},
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/auth/ProgresoCurso.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/verify-email',
      name: 'verifyEmail',
      component: () => import('../views/auth/VerifyEmail.vue'),
      //meta: {requiresAuth: true},
    },
    {
      path: '/EncuestaTAM',
      name: 'EncuestaTAM',
      component: () => import("../views/auth/EncuestaTAMCopy.vue"),
      meta: {requiresAuth: true},
    } ,
    {
      path: '/Conceptos',
      name: 'Conceptos',
      component: () => import("../views/auth/GlosarioReferencias.vue"),
      meta: {requiresAuth: true},
    } ,
    {
      path: '/Conceptos/Admin',
      name: 'AdminConceptos',
      component: () => import("../views/auth/ConceptosAdmin.vue"),
      meta: {requiresAuth: true},
    } ,
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('../views/auth/changePassword.vue'),
    },
    {
      path: '/ConceptoCTeoria',
      name: 'ConceptoCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/ConceptoC/ConecptoCTeoria.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/VariablesOperacionesCTeoria',
      name: 'VariablesOperacionesCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/VariablesOperacionesCTeoria.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjemplo',
      name: 'DescomposicionVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/DescompositionVariablesOperacionesCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjemplo',
      name: 'AlgoritmoVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/AlgorithmVariablesOperacionesCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjemplo',
      name: 'AbstraccionVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/AbstractionVariablesOperacionesCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjemplo',
      name: 'GeneralizacionVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/GeneralizationVariablesOperacionesCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjercicio1',
      name: 'DescomposicionVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/DescompositionVariablesOperacionesCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjercicio1',
      name: 'AlgoritmoVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/AlgorithmVariablesOperacionesCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjercicio1',
      name: 'AbstraccionVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/AbstractionVariablesOperacionesCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjercicio1',
      name: 'GeneralizacionVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/GeneralizationVariablesOperacionesCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjercicio2',
      name: 'DescomposicionVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/DescompositionVariablesOperacionesCEjercicio2.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjercicio2',
      name: 'AlgoritmoVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/AlgorithmVariablesOperacionesCEjercicio2.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjercicio2',
      name: 'AbstraccionVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/AbstractionVariablesOperacionesCEjercicio2.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjercicio2',
      name: 'GeneralizacionVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/GeneralizationVariablesOperacionesCEjercicio2.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjercicio3',
      name: 'DescomposicionVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/DescompositionVariablesOperacionesCEjercicio3.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjercicio3',
      name: 'AlgoritmoVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/AlgorithmVariablesOperacionesCEjercicio3.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjercicio3',
      name: 'AbstraccionVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/AbstractionVariablesOperacionesCEjercicio3.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjercicio3',
      name: '/GeneralizacionVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/GeneralizationVariablesOperacionesCEjercicio3.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/SwitchCaseCTeoria',
      name: 'SwitchCaseCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/SwitchCaseCTeoria.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionSwitchCaseCEjemplo',
      name: 'DescomposicionSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/DescompositionSwitchCaseCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AlgoritmoSwitchCaseCEjemplo',
      name: 'AlgoritmoSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/AlgorithmSwitchCaseCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionSwitchCaseCEjemplo',
      name: 'AbstraccionSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/AbstractionSwitchCaseCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionSwitchCaseCEjemplo',
      name: 'GeneralizacionSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/GeneralizationSwitchCaseCEjemplo.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionSwitchCaseCEjercicio1',
      name: 'DescomposicionSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/DescompositionSwitchCaseCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AlgoritmoSwitchCaseCEjercicio1',
      name: 'AlgoritmoSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/AlgorithmSwitchCaseCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionSwitchCaseCEjercicio1',
      name: 'AbstraccionSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/AbstractionSwitchCaseCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionSwitchCaseCEjercicio1',
      name: 'GeneralizacionSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/GeneralizationSwitchCaseCEjercicio1.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionSwitchCaseCEjercicio2',
      name: 'DescomposicionSwitchCaseCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio2/DescompositionSwitchCaseCEjercicio2.vue'),
      //meta: {requiresAuth: true}
    },
    {
      path: '/GuiaConstruccion',
      name: 'GuiaConstruccion',
      component: () => import('../views/auth/GuiaConstruccion.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/IntroGuiaC',
      name: 'IntroGuiaC',
      component: () => import('../views/auth/GuiaProgramacionC/GuiaProgramacionHome.vue'),
      meta: {requiresAuth: true},
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
      path: '/ConectarCablesMotorreductoresTeoria',
      name: 'ConectarCablesMotorreductoresTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/ConectarCablesMotorreductoresTeoria.vue"),
    },
    {
      path: '/DescomposicionConectarCablesMotorreductores',
      name: 'DescomposicionConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/DescompositionConectarCablesMotorreductores.vue"),
    },
    {
      path: '/AlgoritmoConectarCablesMotorreductores',
      name: 'AlgoritmoConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/AlgorithmConectarCablesMotorreductores.vue"),
    },
    {
      path: '/AbstraccionConectarCablesMotorreductores',
      name: 'AbstraccionConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/AbstractionConectarCablesMotorreductores.vue"),
    },
    {
      path: '/GeneralizacionConectarCablesMotorreductores',
      name: 'GeneralizacionConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/GeneralizationConectarCablesMotorreductores.vue"),
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
    },
    {
      path: '/EnsamblarSoportesMotorreductoresTeoria',
      name: 'EnsamblarSoportesMotorreductoresTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/EnsamblarSoportesMotorreductoresTeoria.vue"),
    },
    {
      path: '/DescomposicionEnsamblarSoportesMotorreductores',
      name: 'DescomposicionEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/DescompositionEnsamblarSoportesMotorreductores.vue"),
    },
    {
      path: '/AlgoritmoEnsamblarSoportesMotorreductores',
      name: 'AlgoritmoEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/AlgorithmEnsamblarSoportesMotorreductores.vue"),
    },
    {
      path: '/AbstraccionEnsamblarSoportesMotorreductores',
      name: 'AbstraccionEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/AbstractionEnsamblarSoportesMotorreductores.vue"),
    },
    {
      path: '/GeneralizacionEnsamblarSoportesMotorreductores',
      name: 'GeneralizacionEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/GeneralizationEnsamblarSoportesMotorreductores.vue"),
    },
    {
      path: '/EnsamblarMotorreductoresSoportesTeoria',
      name: 'EnsamblarMotorreductoresSoportesTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/EnsamblarMotorreductoresSoportesTeoria.vue"),
    },
    {
      path: '/DescomposicionEnsamblarMotorreductoresSoportes',
      name: 'DescomposicionEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/DescompositionEnsamblarMotorreductoresSoportes.vue"),
    },
    {
      path: '/AlgoritmoEnsamblarMotorreductoresSoportes',
      name: 'AlgoritmoEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/AlgorithmEnsamblarMotorreductoresSoportes.vue"),
    },
    {
      path: '/AbstraccionEnsamblarMotorreductoresSoportes',
      name: 'AbstraccionEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/AbstractionEnsamblarMotorreductoresSoportes.vue"),
    },
    {
      path: '/GeneralizaciónEnsamblarMotorreductoresSoportes',
      name: 'GeneralizaciónEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/GeneralizationEnsamblarMotorreductoresSoportes.vue"),
    },  
    {
      path: '/EnsamblarRuedasMotorreductoresTeoria',
      name: 'EnsamblarRuedasMotorreductoresTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/EnsamblarRuedasMotorreductoresTeoria.vue"),
    },
    {
      path: '/DescomposicionEnsamblarRuedasMotorreductores',
      name: 'DescomposicionEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/DescompositionEnsamblarRuedasMotorreductores.vue"),
    },
    {
      path: '/AlgoritmoEnsamblarRuedasMotorreductores',
      name: 'AlgoritmoEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/AlgorithmEnsamblarRuedasMotorreductores.vue"),
    },
    {
      path: '/AbstraccionEnsamblarRuedasMotorreductores',
      name: 'AbstraccionEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/AbstractionEnsamblarRuedasMotorreductores.vue"),
    },
    {
      path: '/GeneralizacionEnsamblarRuedasMotorreductores',
      name: 'GeneralizacionEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/GeneralizationEnsamblarRuedasMotorreductores.vue"),
    },
    {
      path: '/MontarArduinoUNOSoporteTeoria',
      name: 'MontarArduinoUNOSoporteTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/MontarArduinoUNOSoporteTeoria.vue"),
    },
    {
      path: '/DescomposicionMontarArduinoUNOSoporte',
      name: 'DescomposicionMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/DescompositionMontarArduinoUNOSoporte.vue"),
    },
    {
      path: '/AlgoritmoMontarArduinoUNOSoporte',
      name: 'AlgoritmoMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/AlgorithmMontarArduinoUNOSoporte.vue"),
    },
    {
      path: '/AbstractionMontarArduinoUNOSoporte',
      name: 'AbstractionMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/AbstractionMontarArduinoUNOSoporte.vue"),
    },
    {
      path: '/GeneralizacionMontarArduinoUNOSoporte',
      name: 'GeneralizacionMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/GeneralizationMontarArduinoUNOSoporte.vue"),
    },
    {
      path: '/MontarModuloBluetoothHC06Teoria',
      name: 'MontarModuloBluetoothHC06Teoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/MontarModuloBluetoothHC06Teoria.vue"),
    },
    {
      path: '/DescomposicionMontarModuloBluetoothHC06',
      name: 'DescomposicionMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/DescompositionMontarModuloBluetoothHC06.vue"),
    },
    {
      path: '/AlgoritmoMontarModuloBluetoothHC06',
      name: 'AlgoritmoMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/AlgorithmMontarModuloBluetoothHC06.vue"),
    },
    {
      path: '/AbstraccionMontarModuloBluetoothHC06',
      name: 'AbstraccionMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/AbstractionMontarModuloBluetoothHC06.vue"),
    },
    {
      path: '/GeneralizacionMontarModuloBluetoothHC06',
      name: 'GeneralizacionMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/GeneralizationMontarModuloBluetoothHC06.vue"),
    },
    {
      path: '/MontarModuloPuenteHL298NTeoria',
      name: 'MontarModuloPuenteHL298NTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/MontarModuloPuenteHL298NTeoria.vue"),
    },
    {
      path: '/DescomposicionMontarModuloPuenteHL298N',
      name: 'DescomposicionMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/DescompositionMontarModuloPuenteHL298N.vue"),
    },
    {
      path: '/AlgoritmoMontarModuloPuenteHL298N',
      name: 'AlgoritmoMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/AlgorithmMontarModuloPuenteHL298N.vue"),
    },
    {
      path: '/AbstraccionMontarModuloPuenteHL298N',
      name: 'AbstraccionMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/AbstractionMontarModuloPuenteHL298N.vue"),
    },
    {
      path: '/GeneralizacionMontarModuloPuenteHL298N',
      name: 'GeneralizacionMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/GeneralizationMontarModuloPuenteHL298N.vue"),
    },
    {
      path: '/ConectarFuentePoderBorneraMachoTeoria',
      name: 'ConectarFuentePoderBorneraMachoTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/ConectarFuentePoderBorneraMachoTeroia.vue"),
    },
    {
      path: '/DescomposicionConectarFuentePoderBorneraMacho',
      name: 'DescomposicionConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/DescompositionConectarFuentePoderBorneraMacho.vue"),
    },
    {
      path: '/AlgoritmoConectarFuentePoderBorneraMacho',
      name: 'AlgoritmoConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/AlgorithmConectarFuentePoderBorneraMacho.vue"),
    },
    {
      path: '/AbstraccionConectarFuentePoderBorneraMacho',
      name: 'AbstraccionConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/AbstractionConectarFuentePoderBorneraMacho.vue"),
    },
    {
      path: '/GeneralizacionConectarFuentePoderBorneraMacho',
      name: 'GeneralizacionConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/GeneralizationConectarFuentePoderBorneraMacho.vue"),
    },
    {
      path: '/PrepararBorneraHembraConexionTeoria',
      name: 'PrepararBorneraHembraConexionTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/PrepararBorneraHembraConexionTeoria.vue"),
    },
    {
      path: '/DescomposicionPrepararBorneraHembraConexion',
      name: 'DescomposicionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/DescompositionPrepararBorneraHembraConexion.vue"),
    },
    {
      path: '/AlgoritmoPrepararBorneraHembraConexion',
      name: 'AlgoritmoPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/AlgorithmPrepararBorneraHembraConexion.vue"),
    },
    {
      path: '/AbstraccionPrepararBorneraHembraConexion',
      name: 'AbstraccionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/AbstractionPrepararBorneraHembraConexion.vue"),
    },
    {
      path: '/GeneralizacionPrepararBorneraHembraConexion',
      name: 'GeneralizacionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/GeneralizationPrepararBorneraHembraConexion.vue"),
    },
    {
      path: '/GeneralizacionPrepararBorneraHembraConexion',
      name: 'GeneralizacionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/GeneralizationPrepararBorneraHembraConexion.vue"),
    },
    {
      path: '/ConectarBorneraHembraPuenteHTeoria',
      name: 'ConectarBorneraHembraPuenteHTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/ConectarBorneraHembraPuenteHTeoria.vue"),
    },
    {
      path: '/DescomposicionConectarBorneraHembraPuenteH',
      name: 'DescomposicionConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/DescompositionConectarBorneraHembraPuenteH.vue"),
    },
    {
      path: '/AlgoritmoConectarBorneraHembraPuenteH',
      name: 'AlgoritmoConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/AlgorithmConectarBorneraHembraPuenteH.vue"),
    },
    {
      path: '/AbstraccionConectarBorneraHembraPuenteH',
      name: 'AbstraccionConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/AbstractionConectarBorneraHembraPuenteH.vue"),
    },
    {
      path: '/GeneralizacionConectarBorneraHembraPuenteH',
      name: 'GeneralizacionConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/GeneralizationConectarBorneraHembraPuenteH.vue"),
    },
    {
      path: '/PrepararCablesConexionModuloL298NTeoria',
      name: 'PrepararCablesConexionModuloL298NTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/PrepararCablesConexionModuloL298NTeoria.vue"),
    },
    {
      path: '/DescomposicionPrepararCablesConexionModuloL298N',
      name: 'DescomposicionPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/DescompositionPrepararCablesConexionModuloL298N.vue"),
    },
    {
      path: '/AlgoritmoPrepararCablesConexionModuloL298N',
      name: 'AlgoritmoPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/AlgorithmPrepararCablesConexionModuloL298N.vue"),
    },
    {
      path: '/AbstraccionPrepararCablesConexionModuloL298N',
      name: 'AbstraccionPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/AbstractionPrepararCablesConexionModuloL298N.vue"),
    },
    {
      path: '/GeneralizacionPrepararCablesConexionModuloL298N',
      name: 'GeneralizacionPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/GeneralizationPrepararCablesConexionModuloL298N.vue"),
    },
    {
      path: '/DesplazarCircuitoChasisParte1Teoria',
      name: 'DesplazarCircuitoChasisParte1Teoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/DesplazarCircuitoChasisParte1Teoria.vue"),
    },
    {
      path: '/DescomposicionDesplazarCircuitoChasisParte1',
      name: 'DescomposicionDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/DescompositionDesplazarCircuitoChasisParte1.vue"),
    },
    {
      path: '/AlgoritmoDesplazarCircuitoChasisParte1',
      name: 'AlgoritmoDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/AlgorithmDesplazarCircuitoChasisParte1.vue"),
    },
    {
      path: '/AbstraccionDesplazarCircuitoChasisParte1',
      name: 'AbstraccionDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/AbstractionDesplazarCircuitoChasisParte1.vue"),
    },
    {
      path: '/GeneralizacionDesplazarCircuitoChasisParte1',
      name: 'GeneralizacionDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/GeneralizationDesplazarCircuitoChasisParte1.vue"),
    },
    {
      path: '/ConectarMotorreductoresPuenteHTeoria',
      name: 'ConectarMotorreductoresPuenteHTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/ConectarMotorreductoresPuenteHTeoria.vue"),
    },
    {
      path: '/DescomposicionConectarMotorreductoresPuenteH',
      name: 'DescomposicionConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/DescompositionConectarMotorreductoresPuenteH.vue"),
    },
    {
      path: '/AlgoritmoConectarMotorreductoresPuenteH',
      name: 'AlgoritmoConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/AlgorithmConectarMotorreductoresPuenteH.vue"),
    },
    {
      path: '/AbstraccionConectarMotorreductoresPuenteH',
      name: 'AbstraccionConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/AbstractionConectarMotorreductoresPuenteH.vue"),
    },
    {
      path: '/GeneralizacionConectarMotorreductoresPuenteH',
      name: 'GeneralizacionConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/GeneralizationConectarMotorreductoresPuenteH.vue"),
    },
    {
      path: '/DesplazarCircuitoChasisParte2Teoria',
      name: 'DesplazarCircuitoChasisParte2Teoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/DesplazarCircuitoChasisParte2Teoria.vue"),
    },
    {
      path: '/DescomposicionDesplazarCircuitoChasisParte2',
      name: 'DescomposicionDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/DescompositionDesplazarCircuitoChasisParte2.vue"),
    },
    {
      path: '/AlgoritmoDesplazarCircuitoChasisParte2',
      name: 'AlgoritmoDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/AlgorithmDesplazarCircuitoChasisParte2.vue"),
    },
    {
      path: '/AbstraccionDesplazarCircuitoChasisParte2',
      name: 'AbstraccionDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/AbstractionDesplazarCircuitoChasisParte2.vue"),
    },
    {
      path: '/GeneralizacionDesplazarCircuitoChasisParte2',
      name: 'GeneralizacionDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/GeneralizationDesplazarCircuitoChasisParte2.vue"),
    },
    {
      path: '/ConectarFuenteEnergiaInterruptor4PinesTeoria',
      name: 'ConectarFuenteEnergiaInterruptor4PinesTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/ConectarFuenteEnergiaInterruptor4PinesTeoria.vue"),
    },
    {
      path: '/DescomposicionConectarFuenteEnergiaInterruptor4Pines',
      name: 'DescomposicionConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/DescompositionConectarFuenteEnergiaInterruptor4Pines.vue"),
    },
    {
      path: '/AlgoritmoConectarFuenteEnergiaInterruptor4Pines',
      name: 'AlgoritmoConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/AlgorithmConectarFuenteEnergiaInterruptor4Pines.vue"),
    },
    {
      path: '/AbstractionConectarFuenteEnergiaInterruptor4Pines',
      name: 'AbstractionConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/AbstractionConectarFuenteEnergiaInterruptor4Pines.vue"),
    },
    {
      path: '/GeneralizacionConectarFuenteEnergiaInterruptor4Pines',
      name: 'GeneralizacionConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/GeneralizationConectarFuenteEnergiaInterruptor4Pines.vue"),
    },
    {
      path: '/ConectarInterruptor4PinesModulosTeoria',
      name: 'ConectarInterruptor4PinesModulosTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/ConectarInterruptor4PinesModulosTeoria.vue"),
    },
    {
      path: '/DescomposicionConectarInterruptor4PinesModulos',
      name: 'DescomposicionConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/DescompositionConectarInterruptor4PinesModulos.vue"),
    },
    {
      path: '/AlgoritmoConectarInterruptor4PinesModulos',
      name: 'AlgoritmoConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/AlgorithmConectarInterruptor4PinesModulos.vue"),
    },
    {
      path: '/AbstraccionConectarInterruptor4PinesModulos',
      name: 'AbstraccionConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/AbstractionConectarInterruptor4PinesModulos.vue"),
    },
    {
      path: '/GeneralizacionConectarInterruptor4PinesModulos',
      name: 'GeneralizacionConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/GeneralizationConectarInterruptor4PinesModulos.vue"),
    },
    

    // RUTAS CONCEPTOS BASICOS
    {
      path: '/CBTeoria',
      name: 'CBTeoria',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/CB_Teoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBDescomposicion1',
      name: 'CBDescomposicion1',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/1/CB_Descomposicion1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAlgoritmo1',
      name: 'CBAlgoritmo1',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/1/CB_Algoritmo1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAbstraccion1',
      name: 'CBAbstraccion1',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/1/CB_Abstracion1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBGeneralizacion1',
      name: 'CBGeneralizacion1',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/1/CB_Generalizacion1.vue"),
      meta: {requiresAuth: true},
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
