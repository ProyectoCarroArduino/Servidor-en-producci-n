<template>
    <div id="user">
      <div class="card card-body mt-8 align-left col-md-12">
        <h1 class="text-center">Paso 1. Conectar cables a los motorreductores</h1>
        <br />
        <h3>Ejercicio:</h3>
        <br />
        <p class="texto-personalizado">
          Se necesita un programa en C que simule la conexión de dos cables uno rojo y otro negro a un motoreductor. 
          Cuando se haga la conexión imrpimir el mensaje: "cable rojo y negro conectados".
        </p>
        <p class="texto-personalizado">
          <strong>Instrucciones:</strong> Los cables deben ser variables del tipo cadena de caracter. 
          La conexión debe ser una función del tipo cadena de caracter, la cual debe imprimir el mensaje.
        </p>
        <br />
        <h3>Generalización:</h3>
        <br />
        <p class="texto-personalizado">
          Teniendo en cuenta la teoría sobre funciones <strong>(sin parámetros)</strong>, generalice el paso a paso de la <strong>(declaración)</strong> de una función para el ejercicio:
        </p>
        <br />
        <p class="texto-personalizado"><strong>Instrucciones:</strong> ingrese el orden correcto de los audios</p>
        <br />
        <div>
          <p class="alert alert-primary">Tu evaluación del componente es: {{ evaluacion }}</p>
        </div>
      </div>
      <div class="align-left col-md-3">
        <div class="temas">
          <MenuCarro />
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { defineComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import MenuCarro from '@/components/MenuCarro.vue'

import {
  useEvaluacionConectarCablesStore,
  useEvaluacionStore,
  useEvaluacionAlgorithmStore,
  useEvaluacionAbstractionStore,
  useEvaluacionGeneralizationStore
} from '@/stores/evaluation'

export default defineComponent({
  name: 'ConectarCables',
  components: {
    MenuCarro
  },

  setup() {
    const conectarCablesStore = useEvaluacionConectarCablesStore()
    const { evaluacion } = storeToRefs(conectarCablesStore)

    onMounted(() => {
      conectarCablesStore.calcularPromedioDesdeStores()
    })

    return {
      evaluacion
    }
  }

})
</script>
  
  <style>
  #user {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }
  
  .card {
    max-width: 100%;
    margin: auto;
    padding: 20px;
  }
  
  .texto-personalizado {
    font-family: Arial, sans-serif;
    font-size: 18px;
    text-align: justify;
  }
  
  .temas {
    position: fixed;
    margin-top: -245px;
  }
  </style>
  