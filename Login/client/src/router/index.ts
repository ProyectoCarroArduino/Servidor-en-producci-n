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
    },
    {
      path: '/resultados',
      name: 'ResultadosEncuesta',
      component: () => import('../views/auth/ResultadosEncuesta.vue')
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('../views/auth/changePassword.vue'),
    },
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
      path: '/ConceptoCTeoria',
      name: 'ConceptoCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/ConceptoC/ConecptoCTeoria.vue'),
      meta: {requiresAuth: true},
    },


    // RUTAS GUÍA DE PROGRAMACIÓN EN C

    {
      path: '/ComoInstalarCTeoria',
      name: 'ComoInstalarCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/ComoInstalarC/ComoInstalarCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/EstructuraProgramaCTeoria',
      name: 'EstructuraProgramaCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructuraProgramaC/EstructuraProgramaCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/VariablesOperacionesCTeoria',
      name: 'VariablesOperacionesCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/VariablesOperacionesCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjemplo',
      name: 'DescomposicionVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/DescompositionVariablesOperacionesCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjemplo',
      name: 'AlgoritmoVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/AlgorithmVariablesOperacionesCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjemplo',
      name: 'AbstraccionVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/AbstractionVariablesOperacionesCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjemplo',
      name: 'GeneralizacionVariablesOperacionesCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/GeneralizationVariablesOperacionesCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjercicio1',
      name: 'DescomposicionVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/DescompositionVariablesOperacionesCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjercicio1',
      name: 'AlgoritmoVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/AlgorithmVariablesOperacionesCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjercicio1',
      name: 'AbstraccionVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/AbstractionVariablesOperacionesCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjercicio1',
      name: 'GeneralizacionVariablesOperacionesCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio1/GeneralizationVariablesOperacionesCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjercicio2',
      name: 'DescomposicionVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/DescompositionVariablesOperacionesCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjercicio2',
      name: 'AlgoritmoVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/AlgorithmVariablesOperacionesCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjercicio2',
      name: 'AbstraccionVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/AbstractionVariablesOperacionesCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjercicio2',
      name: 'GeneralizacionVariablesOperacionesCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/GeneralizationVariablesOperacionesCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionVariablesOperacionesCEjercicio3',
      name: 'DescomposicionVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/DescompositionVariablesOperacionesCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoVariablesOperacionesCEjercicio3',
      name: 'AlgoritmoVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/AlgorithmVariablesOperacionesCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionVariablesOperacionesCEjercicio3',
      name: 'AbstraccionVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/AbstractionVariablesOperacionesCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionVariablesOperacionesCEjercicio3',
      name: '/GeneralizacionVariablesOperacionesCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio3/GeneralizationVariablesOperacionesCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/IfElseCTeoria',
      name: 'IfElseCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasControlC/IfElseC/IfElseCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/ForCTeoria',
      name: 'ForCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/ForC/ForCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/SwitchCaseCTeoria',
      name: 'SwitchCaseCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/SwitchCaseCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionSwitchCaseCEjemplo',
      name: 'DescomposicionSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/DescompositionSwitchCaseCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoSwitchCaseCEjemplo',
      name: 'AlgoritmoSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/AlgorithmSwitchCaseCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionSwitchCaseCEjemplo',
      name: 'AbstraccionSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/AbstractionSwitchCaseCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionSwitchCaseCEjemplo',
      name: 'GeneralizacionSwitchCaseCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejemplo/GeneralizationSwitchCaseCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionSwitchCaseCEjercicio1',
      name: 'DescomposicionSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/DescompositionSwitchCaseCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoSwitchCaseCEjercicio1',
      name: 'AlgoritmoSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/AlgorithmSwitchCaseCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionSwitchCaseCEjercicio1',
      name: 'AbstraccionSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/AbstractionSwitchCaseCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionSwitchCaseCEjercicio1',
      name: 'GeneralizacionSwitchCaseCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/GeneralizationSwitchCaseCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionSwitchCaseCEjercicio2',
      name: 'DescomposicionSwitchCaseCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio2/DescompositionSwitchCaseCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoSwitchCaseCEjercicio2',
      name: 'AlgoritmoSwitchCaseCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio2/AlgorithmSwitchCaseCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionSwitchCaseCEjercicio2',
      name: 'AbstraccionSwitchCaseCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio2/AbstractionSwitchCaseCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionSwitchCaseCEjercicio2',
      name: 'GeneralizacionSwitchCaseCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio2/GeneralizationSwitchCaseCEjercicio2.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionSwitchCaseCEjercicio3',
      name: 'DescomposicionSwitchCaseCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio3/DescompositionSwitchCaseCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoSwitchCaseCEjercicio3',
      name: 'AlgoritmoSwitchCaseCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio3/AlgorithmSwitchCaseCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionSwitchCaseCEjercicio3',
      name: 'AbstraccionSwitchCaseCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio3/AbstractionSwitchCaseCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionSwitchCaseCEjercicio3',
      name: 'GeneralizacionSwitchCaseCEjercicio3',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio3/GeneralizationSwitchCaseCEjercicio3.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/WhileCTeoria',
      name: 'WhileCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/WhileCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionWhileCEjemplo',
      name: 'DescomposicionWhileCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejemplo/DescompositionWhileCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoWhileCEjemplo',
      name: 'AlgoritmoWhileCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejemplo/AlgorithmWhileCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionWhileCEjemplo',
      name: 'AbstraccionWhileCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejemplo/AbstractionWhileCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionWhileCEjemplo',
      name: 'GeneralizacionWhileCEjemplo',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejemplo/GeneralizationWhileCEjemplo.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionWhileCEjercicio1',
      name: 'DescomposicionWhileCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio1/DescompositionWhileCEjercicio1.vue'),
      meta: {requiresAuth: true},
    },


    // GUÍA DE CONSTRUCCIÓN DE CARRO ARDUINO

    {
      path: '/IntroGuiaConstruccion',
      name: 'IntroGuiaConstruccion',
      component: () => import('../views/auth/GuiaConstruccionCarro/GuiaConstruccionHome.vue'),
      meta: {requiresAuth: true},
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
      path: '/ConectarCablesMotorreductoresTeoria',
      name: 'ConectarCablesMotorreductoresTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/ConectarCablesMotorreductoresTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionConectarCablesMotorreductores',
      name: 'DescomposicionConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/DescompositionConectarCablesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoConectarCablesMotorreductores',
      name: 'AlgoritmoConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/AlgorithmConectarCablesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionConectarCablesMotorreductores',
      name: 'AbstraccionConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/AbstractionConectarCablesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionConectarCablesMotorreductores',
      name: 'GeneralizacionConectarCablesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/GeneralizationConectarCablesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EnsamblarSoportesMotorreductoresTeoria',
      name: 'EnsamblarSoportesMotorreductoresTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/EnsamblarSoportesMotorreductoresTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionEnsamblarSoportesMotorreductores',
      name: 'DescomposicionEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/DescompositionEnsamblarSoportesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoEnsamblarSoportesMotorreductores',
      name: 'AlgoritmoEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/AlgorithmEnsamblarSoportesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionEnsamblarSoportesMotorreductores',
      name: 'AbstraccionEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/AbstractionEnsamblarSoportesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionEnsamblarSoportesMotorreductores',
      name: 'GeneralizacionEnsamblarSoportesMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/GeneralizationEnsamblarSoportesMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EnsamblarMotorreductoresSoportesTeoria',
      name: 'EnsamblarMotorreductoresSoportesTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/EnsamblarMotorreductoresSoportesTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionEnsamblarMotorreductoresSoportes',
      name: 'DescomposicionEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/DescompositionEnsamblarMotorreductoresSoportes.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoEnsamblarMotorreductoresSoportes',
      name: 'AlgoritmoEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/AlgorithmEnsamblarMotorreductoresSoportes.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionEnsamblarMotorreductoresSoportes',
      name: 'AbstraccionEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/AbstractionEnsamblarMotorreductoresSoportes.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizaciónEnsamblarMotorreductoresSoportes',
      name: 'GeneralizaciónEnsamblarMotorreductoresSoportes',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/GeneralizationEnsamblarMotorreductoresSoportes.vue"),
      meta: {requiresAuth: true},
    },  
    {
      path: '/EnsamblarRuedasMotorreductoresTeoria',
      name: 'EnsamblarRuedasMotorreductoresTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/EnsamblarRuedasMotorreductoresTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionEnsamblarRuedasMotorreductores',
      name: 'DescomposicionEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/DescompositionEnsamblarRuedasMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoEnsamblarRuedasMotorreductores',
      name: 'AlgoritmoEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/AlgorithmEnsamblarRuedasMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionEnsamblarRuedasMotorreductores',
      name: 'AbstraccionEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/AbstractionEnsamblarRuedasMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionEnsamblarRuedasMotorreductores',
      name: 'GeneralizacionEnsamblarRuedasMotorreductores',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/GeneralizationEnsamblarRuedasMotorreductores.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MontarArduinoUNOSoporteTeoria',
      name: 'MontarArduinoUNOSoporteTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/MontarArduinoUNOSoporteTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionMontarArduinoUNOSoporte',
      name: 'DescomposicionMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/DescompositionMontarArduinoUNOSoporte.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoMontarArduinoUNOSoporte',
      name: 'AlgoritmoMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/AlgorithmMontarArduinoUNOSoporte.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstractionMontarArduinoUNOSoporte',
      name: 'AbstractionMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/AbstractionMontarArduinoUNOSoporte.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionMontarArduinoUNOSoporte',
      name: 'GeneralizacionMontarArduinoUNOSoporte',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/Ejercicio/GeneralizationMontarArduinoUNOSoporte.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MontarModuloBluetoothHC06Teoria',
      name: 'MontarModuloBluetoothHC06Teoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/MontarModuloBluetoothHC06Teoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionMontarModuloBluetoothHC06',
      name: 'DescomposicionMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/DescompositionMontarModuloBluetoothHC06.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoMontarModuloBluetoothHC06',
      name: 'AlgoritmoMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/AlgorithmMontarModuloBluetoothHC06.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionMontarModuloBluetoothHC06',
      name: 'AbstraccionMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/AbstractionMontarModuloBluetoothHC06.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionMontarModuloBluetoothHC06',
      name: 'GeneralizacionMontarModuloBluetoothHC06',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/Ejercicio/GeneralizationMontarModuloBluetoothHC06.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MontarModuloPuenteHL298NTeoria',
      name: 'MontarModuloPuenteHL298NTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/MontarModuloPuenteHL298NTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionMontarModuloPuenteHL298N',
      name: 'DescomposicionMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/DescompositionMontarModuloPuenteHL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoMontarModuloPuenteHL298N',
      name: 'AlgoritmoMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/AlgorithmMontarModuloPuenteHL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionMontarModuloPuenteHL298N',
      name: 'AbstraccionMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/AbstractionMontarModuloPuenteHL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionMontarModuloPuenteHL298N',
      name: 'GeneralizacionMontarModuloPuenteHL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloPuenteHL298N/Ejercicio/GeneralizationMontarModuloPuenteHL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/ConectarFuentePoderBorneraMachoTeoria',
      name: 'ConectarFuentePoderBorneraMachoTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/ConectarFuentePoderBorneraMachoTeroia.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionConectarFuentePoderBorneraMacho',
      name: 'DescomposicionConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/DescompositionConectarFuentePoderBorneraMacho.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoConectarFuentePoderBorneraMacho',
      name: 'AlgoritmoConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/AlgorithmConectarFuentePoderBorneraMacho.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionConectarFuentePoderBorneraMacho',
      name: 'AbstraccionConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/AbstractionConectarFuentePoderBorneraMacho.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionConectarFuentePoderBorneraMacho',
      name: 'GeneralizacionConectarFuentePoderBorneraMacho',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/GeneralizationConectarFuentePoderBorneraMacho.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/PrepararBorneraHembraConexionTeoria',
      name: 'PrepararBorneraHembraConexionTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/PrepararBorneraHembraConexionTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionPrepararBorneraHembraConexion',
      name: 'DescomposicionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/DescompositionPrepararBorneraHembraConexion.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoPrepararBorneraHembraConexion',
      name: 'AlgoritmoPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/AlgorithmPrepararBorneraHembraConexion.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionPrepararBorneraHembraConexion',
      name: 'AbstraccionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/AbstractionPrepararBorneraHembraConexion.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionPrepararBorneraHembraConexion',
      name: 'GeneralizacionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/GeneralizationPrepararBorneraHembraConexion.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionPrepararBorneraHembraConexion',
      name: 'GeneralizacionPrepararBorneraHembraConexion',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/GeneralizationPrepararBorneraHembraConexion.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/ConectarBorneraHembraPuenteHTeoria',
      name: 'ConectarBorneraHembraPuenteHTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/ConectarBorneraHembraPuenteHTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionConectarBorneraHembraPuenteH',
      name: 'DescomposicionConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/DescompositionConectarBorneraHembraPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoConectarBorneraHembraPuenteH',
      name: 'AlgoritmoConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/AlgorithmConectarBorneraHembraPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionConectarBorneraHembraPuenteH',
      name: 'AbstraccionConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/AbstractionConectarBorneraHembraPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionConectarBorneraHembraPuenteH',
      name: 'GeneralizacionConectarBorneraHembraPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/GeneralizationConectarBorneraHembraPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/PrepararCablesConexionModuloL298NTeoria',
      name: 'PrepararCablesConexionModuloL298NTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/PrepararCablesConexionModuloL298NTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionPrepararCablesConexionModuloL298N',
      name: 'DescomposicionPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/DescompositionPrepararCablesConexionModuloL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoPrepararCablesConexionModuloL298N',
      name: 'AlgoritmoPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/AlgorithmPrepararCablesConexionModuloL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionPrepararCablesConexionModuloL298N',
      name: 'AbstraccionPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/AbstractionPrepararCablesConexionModuloL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionPrepararCablesConexionModuloL298N',
      name: 'GeneralizacionPrepararCablesConexionModuloL298N',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/GeneralizationPrepararCablesConexionModuloL298N.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DesplazarCircuitoChasisTeoria',
      name: 'DesplazarCircuitoChasisTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasis/DesplazarCircuitoChasisTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DesplazarCircuitoChasisParte1Teoria',
      name: 'DesplazarCircuitoChasisParte1Teoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/DesplazarCircuitoChasisParte1Teoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionDesplazarCircuitoChasisParte1',
      name: 'DescomposicionDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/DescompositionDesplazarCircuitoChasisParte1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoDesplazarCircuitoChasisParte1',
      name: 'AlgoritmoDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/AlgorithmDesplazarCircuitoChasisParte1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionDesplazarCircuitoChasisParte1',
      name: 'AbstraccionDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/AbstractionDesplazarCircuitoChasisParte1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionDesplazarCircuitoChasisParte1',
      name: 'GeneralizacionDesplazarCircuitoChasisParte1',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/GeneralizationDesplazarCircuitoChasisParte1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/ConectarMotorreductoresPuenteHTeoria',
      name: 'ConectarMotorreductoresPuenteHTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/ConectarMotorreductoresPuenteHTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionConectarMotorreductoresPuenteH',
      name: 'DescomposicionConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/DescompositionConectarMotorreductoresPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoConectarMotorreductoresPuenteH',
      name: 'AlgoritmoConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/AlgorithmConectarMotorreductoresPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionConectarMotorreductoresPuenteH',
      name: 'AbstraccionConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/AbstractionConectarMotorreductoresPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionConectarMotorreductoresPuenteH',
      name: 'GeneralizacionConectarMotorreductoresPuenteH',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/ConectarMotorreductoresPuenteH/Ejercicio/GeneralizationConectarMotorreductoresPuenteH.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DesplazarCircuitoChasisParte2Teoria',
      name: 'DesplazarCircuitoChasisParte2Teoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/DesplazarCircuitoChasisParte2Teoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionDesplazarCircuitoChasisParte2',
      name: 'DescomposicionDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/DescompositionDesplazarCircuitoChasisParte2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoDesplazarCircuitoChasisParte2',
      name: 'AlgoritmoDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/AlgorithmDesplazarCircuitoChasisParte2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionDesplazarCircuitoChasisParte2',
      name: 'AbstraccionDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/AbstractionDesplazarCircuitoChasisParte2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionDesplazarCircuitoChasisParte2',
      name: 'GeneralizacionDesplazarCircuitoChasisParte2',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte2/Ejercicio/GeneralizationDesplazarCircuitoChasisParte2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/ConectarFuenteEnergiaInterruptor4PinesTeoria',
      name: 'ConectarFuenteEnergiaInterruptor4PinesTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/ConectarFuenteEnergiaInterruptor4PinesTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionConectarFuenteEnergiaInterruptor4Pines',
      name: 'DescomposicionConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/DescompositionConectarFuenteEnergiaInterruptor4Pines.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoConectarFuenteEnergiaInterruptor4Pines',
      name: 'AlgoritmoConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/AlgorithmConectarFuenteEnergiaInterruptor4Pines.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstractionConectarFuenteEnergiaInterruptor4Pines',
      name: 'AbstractionConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/AbstractionConectarFuenteEnergiaInterruptor4Pines.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionConectarFuenteEnergiaInterruptor4Pines',
      name: 'GeneralizacionConectarFuenteEnergiaInterruptor4Pines',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/GeneralizationConectarFuenteEnergiaInterruptor4Pines.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/ConectarInterruptor4PinesModulosTeoria',
      name: 'ConectarInterruptor4PinesModulosTeoria',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/ConectarInterruptor4PinesModulosTeoria.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/DescomposicionConectarInterruptor4PinesModulos',
      name: 'DescomposicionConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/DescompositionConectarInterruptor4PinesModulos.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AlgoritmoConectarInterruptor4PinesModulos',
      name: 'AlgoritmoConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/AlgorithmConectarInterruptor4PinesModulos.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/AbstraccionConectarInterruptor4PinesModulos',
      name: 'AbstraccionConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/AbstractionConectarInterruptor4PinesModulos.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/GeneralizacionConectarInterruptor4PinesModulos',
      name: 'GeneralizacionConectarInterruptor4PinesModulos',
      component: () => import("../views/auth/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/GeneralizationConectarInterruptor4PinesModulos.vue"),
      meta: {requiresAuth: true},
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
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio1/DescompositionConceptosBasicosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAlgoritmo1',
      name: 'CBAlgoritmo1',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio1/AlgorithmConceptosBasicosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAbstraccion1',
      name: 'CBAbstraccion1',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio1/AbstractionConceptosBasicosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBGeneralizacion1',
      name: 'CBGeneralizacion1',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio1/GeneralizationConceptosBasicosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBEjDescomposicion',
      name: 'CBEjDescomposicion',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejemplo/DescompositionConceptosBasicosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBEjAlgoritmo',
      name: 'CBEjAlgoritmo',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejemplo/AlgorithmConceptosBasicosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBEjAbstraccion',
      name: 'CBEjAbstraccion',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejemplo/AbstractionConceptosBasicosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBEjGeneralizacion',
      name: 'CBEjGeneralizacion',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejemplo/GeneralizationConceptosBasicosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBDescomposicion2',
      name: 'CBDescomposicion2',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio2/DescompositionConceptosBasicosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAlgoritmo2',
      name: 'CBAlgoritmo2',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio2/AlgorithmConceptosBasicosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAbstraccion2',
      name: 'CBAbstraccion2',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio2/AbstractionConceptosBasicosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBGeneralizacion2',
      name: 'CBGeneralizacion2',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio2/GeneralizationConceptosBasicosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBDescomposicion3',
      name: 'CBDescomposicion3',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio3/DescompositionConceptosBasicosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAlgoritmo3',
      name: 'CBAlgoritmo3',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio3/AlgorithmConceptosBasicosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBAbstraccion3',
      name: 'CBAbstraccion3',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio3/AbstractionConceptosBasicosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/CBGeneralizacion3',
      name: 'CBGeneralizacion3',
      component: () => import("../views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/Ejercicio3/GeneralizationConceptosBasicosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },


    // RUTAS ESTRUCTURA DE UN PROGRAMA E IMPRESIONES POR PANTALLA

    {
      path: '/EIEjDescomposicion',
      name: 'EIEjDescomposicion',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejemplo/DescompositionEstructuraImpresionesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIEjAlgoritmo',
      name: 'EIEjAlgoritmo',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejemplo/AlgorithmEstructuraImpresionesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIEjAbstraccion',
      name: 'EIEjAbstraccion',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejemplo/AbstractionEstructuraImpresionesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIEjGeneralizacion',
      name: 'EIEjGeneralizacion',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejemplo/GeneralizationEstructuraImpresionesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIDescomposicion1',
      name: 'EIDescomposicion1',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio1/DescompositionEstructuraImpresionesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIAlgoritmo1',
      name: 'EIAlgoritmo1',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio1/AlgorithmEstructuraImpresionesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIAbstraccion1',
      name: 'EIAbstraccion1',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio1/AbstractionEstructuraImpresionesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIGeneralizacion1',
      name: 'EIGeneralizacion1',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio1/GeneralizationEstructuraImpresionesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIDescomposicion2',
      name: 'EIDescomposicion2',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio2/DescompositionEstructuraImpresionesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIAlgoritmo2',
      name: 'EIAlgoritmo2',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio2/AlgorithmEstructuraImpresionesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIAbstraccion2',
      name: 'EIAbstraccion2',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio2/AbstractionEstructuraImpresionesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIGeneralizacion2',
      name: 'EIGeneralizacion2',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio2/GeneralizationEstructuraImpresionesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIDescomposicion3',
      name: 'EIDescomposicion3',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio3/DescompositionEstructuraImpresionesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIAlgoritmo3',
      name: 'EIAlgoritmo3',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio3/AlgorithmEstructuraImpresionesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIAbstraccion3',
      name: 'EIAbstraccion3',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio3/AbstractionEstructuraImpresionesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/EIGeneralizacion3',
      name: 'EIGeneralizacion3',
      component: () => import("../views/auth/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio3/GeneralizationEstructuraImpresionesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },


    // RUTAS ESTRUCTURAS DE CONTROL (IF ELSE)

    {
      path: '/IEEjDescomposicion',
      name: 'IEEjDescomposicion',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejemplo/DescompositionIfElseCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEEjAlgoritmo',
      name: 'IEEjAlgoritmo',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejemplo/AlgorithmIfElseCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEEjAbstraccion',
      name: 'IEEjAbstraccion',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejemplo/AbstractionIfElseCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEEjGeneralizacion',
      name: 'IEEjGeneralizacion',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejemplo/GeneralizationIfElseCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEDescomposicion1',
      name: 'IEDescomposicion1',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio1/DescompositionIfElseCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEAlgoritmo1',
      name: 'IEAlgoritmo1',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio1/AlgorithmIfElseCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEAbstraccion1',
      name: 'IEAbstraccion1',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio1/AbstractionIfElseCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEGeneralizacion1',
      name: 'IEGeneralizacion1',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio1/GeneralizationIfElseCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEDescomposicion2',
      name: 'IEDescomposicion2',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio2/DescompositionIfElseCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEAlgoritmo2',
      name: 'IEAlgoritmo2',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio2/AlgorithmIfElseCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEAbstraccion2',
      name: 'IEAbstraccion2',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio2/AbstractionIfElseCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEGeneralizacion2',
      name: 'IEGeneralizacion2',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio2/GeneralizationIfElseCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEDescomposicion3',
      name: 'IEDescomposicion3',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio3/DescompositionIfElseCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEAlgoritmo3',
      name: 'IEAlgoritmo3',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio3/AlgorithmIfElseCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEAbstraccion3',
      name: 'IEAbstraccion3',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio3/AbstractionIfElseCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/IEGeneralizacion3',
      name: 'IEGeneralizacion3',
      component: () => import("../views/auth/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio3/GeneralizationIfElseCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },


    // RUTAS ESTRUCTURAS DE REPETICION (CICLO FOR)

    {
      path: '/FOREjDescomposicion',
      name: 'FOREjDescomposicion',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejemplo/DescompositionForCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FOREjAlgoritmo',
      name: 'FOREjAlgoritmo',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejemplo/AlgorithmForCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FOREjAbstraccion',
      name: 'FOREjAbstraccion',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejemplo/AbstractionForCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FOREjGeneralizacion',
      name: 'FOREjGeneralizacion',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejemplo/GeneralizationForCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORDescomposicion1',
      name: 'FORDescomposicion1',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio1/DescompositionForCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORAlgoritmo1',
      name: 'FORAlgoritmo1',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio1/AlgorithmForCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORAbstraccion1',
      name: 'FORAbstraccion1',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio1/AbstractionForCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORGeneralizacion1',
      name: 'FORGeneralizacion1',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio1/GeneralizationForCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORDescomposicion2',
      name: 'FORDescomposicion2',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio2/DescompositionForCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORAlgoritmo2',
      name: 'FORAlgoritmo2',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio2/AlgorithmForCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORAbstraccion2',
      name: 'FORAbstraccion2',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio2/AbstractionForCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORGeneralizacion2',
      name: 'FORGeneralizacion2',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio2/GeneralizationForCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORDescomposicion3',
      name: 'FORDescomposicion3',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio3/DescompositionForCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORAlgoritmo3',
      name: 'FORAlgoritmo3',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio3/AlgorithmForCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORAbstraccion3',
      name: 'FORAbstraccion3',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio3/AbstractionForCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FORGeneralizacion3',
      name: 'FORGeneralizacion3',
      component: () => import("../views/auth/GuiaProgramacionC/For/Ejercicios/Ejercicio3/GeneralizationForCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },


    // RUTAS ESTRUCTURAS DE DATOS (MATRICES)

    {
      path: '/MATEjDescomposicion',
      name: 'MATEjDescomposicion',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejemplo/DescompositionMatricesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATEjAlgoritmo',
      name: 'MATEjAlgoritmo',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejemplo/AlgorithmMatricesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATEjAbstraccion',
      name: 'MATEjAbstraccion',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejemplo/AbstractionMatricesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATEjGeneralizacion',
      name: 'MATEjGeneralizacion',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejemplo/GeneralizationMatricesCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATDescomposicion1',
      name: 'MATDescomposicion1',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio1/DescompositionMatricesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATAlgoritmo1',
      name: 'MATAlgoritmo1',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio1/AlgorithmMatricesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATAbstraccion1',
      name: 'MATAbstraccion1',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio1/AbstractionMatricesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATGeneralizacion1',
      name: 'MATGeneralizacion1',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio1/GeneralizationMatricesCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATDescomposicion2',
      name: 'MATDescomposicion2',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio2/DescompositionMatricesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATAlgoritmo2',
      name: 'MATAlgoritmo2',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio2/AlgorithmMatricesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATAbstraccion2',
      name: 'MATAbstraccion2',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio2/AbstractionMatricesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATGeneralizacion2',
      name: 'MATGeneralizacion2',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio2/GeneralizationMatricesCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATDescomposicion3',
      name: 'MATDescomposicion3',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio3/DescompositionMatricesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATAlgoritmo3',
      name: 'MATAlgoritmo3',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio3/AlgorithmMatricesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATAbstraccion3',
      name: 'MATAbstraccion3',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio3/AbstractionMatricesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/MATGeneralizacion3',
      name: 'MATGeneralizacion3',
      component: () => import("../views/auth/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio3/GeneralizationMatricesCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },


    // RUTAS FUNCIONES CON PARAMETROS

    {
      path: '/FCPEjDescomposicion',
      name: 'FCPEjDescomposicion',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejemplo/DescompositionFuncionesConParametrosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPEjAlgoritmo',
      name: 'FCPEjAlgoritmo',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejemplo/AlgorithmFuncionesConParametrosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPEjAbstraccion',
      name: 'FCPEjAbstraccion',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejemplo/AbstractionFuncionesConParametrosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPEjGeneralizacion',
      name: 'FCPEjGeneralizacion',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejemplo/GeneralizationFuncionesConParametrosCEjemplo.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPDescomposicion1',
      name: 'FCPDescomposicion1',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio1/DescompositionFuncionesConParametrosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPAlgoritmo1',
      name: 'FCPAlgoritmo1',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio1/AlgorithmFuncionesConParametrosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPAbstraccion1',
      name: 'FCPAbstraccion1',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio1/AbstractionFuncionesConParametrosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPGeneralizacion1',
      name: 'FCPGeneralizacion1',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio1/GeneralizationFuncionesConParametrosCEjercicio1.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPDescomposicion2',
      name: 'FCPDescomposicion2',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio2/DescompositionFuncionesConParametrosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPAlgoritmo2',
      name: 'FCPAlgoritmo2',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio2/AlgorithmFuncionesConParametrosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPAbstraccion2',
      name: 'FCPAbstraccion2',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio2/AbstractionFuncionesConParametrosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPGeneralizacion2',
      name: 'FCPGeneralizacion2',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio2/GeneralizationFuncionesConParametrosCEjercicio2.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPDescomposicion3',
      name: 'FCPDescomposicion3',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio3/DescompositionFuncionesConParametrosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPAlgoritmo3',
      name: 'FCPAlgoritmo3',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio3/AlgorithmFuncionesConParametrosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPAbstraccion3',
      name: 'FCPAbstraccion3',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio3/AbstractionFuncionesConParametrosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },
    {
      path: '/FCPGeneralizacion3',
      name: 'FCPGeneralizacion3',
      component: () => import("../views/auth/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio3/GeneralizationFuncionesConParametrosCEjercicio3.vue"),
      meta: {requiresAuth: true},
    },


    // RUTAS X

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
      path: '/MatricesCTeoria',
      name: 'MatricesCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasDatosC/MatricesC/MatricesCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/teoriaArray',
      name: 'teoriaArray',
      component: () => import("../views/auth/TheoryArray.vue"),
      meta: {requiresAuth: true},
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
      path: '/FuncionesConParametrosCTeoria',
      name: 'FuncionesConParametrosCTeoria',
      component: () => import('../views/auth/ProgramacionC/Temas/FuncionesC/FuncionesConParametrosC/FuncionesConParametrosCTeoria.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/teoriaFuncionesSinpar',
      name: 'teoriaFuncionesSinpar',
      component: () => import("../views/auth/TheoryParameterlessFunction.vue"),
      meta: {requiresAuth: true},
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
      path: '/EvaluacionConectarCables',
      name: 'EvaluacionConectarCables',
      component: () => import("../views/auth/EvaluationConectarCables.vue"),
    },

    {
      path: '/AlgoritmoWhileCEjercicio1',
      name: 'AlgoritmoWhileCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio1/AlgorithmWhileCEjercicio1.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionWhileCEjercicio1',
      name: 'AbstraccionWhileCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio1/AbstractionWhileCEjercicio1.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionWhileCEjercicio1',
      name: 'GeneralizacionWhileCEjercicio1',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio1/GeneralizationWhileCEjercicio1.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/DescomposicionWhileCEjercicio2',
      name: 'DescomposicionWhileCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio2/DescompositionWhileCEjercicio2.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/AlgoritmoWhileCEjercicio2',
      name: 'AlgoritmoWhileCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio2/AlgorithmWhileCEjercicio2.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/AbstraccionWhileCEjercicio2',
      name: 'AbstraccionWhileCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio2/AbstractionWhileCEjercicio2.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/GeneralizacionWhileCEjercicio2',
      name: 'GeneralizacionWhileCEjercicio2',
      component: () => import('../views/auth/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio2/GeneralizationWhileCEjercicio2.vue'),
      meta: {requiresAuth: true}
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
