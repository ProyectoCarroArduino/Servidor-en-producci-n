<template>
    <div>
      <h4 class="texto-personalizado">De acuerdo al tema <strong>(operadores aritméticos)</strong>, ordene de forma correcta 
        los elementos para construir la formula del <strong>área de un triángulo</strong>:</h4>
      <br>
      <div>
        <div ref="parent" class="grid gray-background">
          <article
            v-for="tape in tapes"
            :key="tape"
            class="bg-blue text-white rounded-full p-4 flex items-center justify-center"
          >
            <p>{{ tape }}</p>
          </article>
        </div>
        <br>
        <br>
        <button 
          @click="verificarOrden" 
          >
          Verificar Orden
        </button>
        <br>
        <p v-if="ordenCorrecto === true" class="correcto alert alert-success mt-3">¡Orden correcto!</p>
        <p v-if="ordenCorrecto === false" class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
      </div>
      <br>
      <br>
    </div>
  </template>
  
  <script>
  import { animations } from "@formkit/drag-and-drop";
  import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
  export default {
    name: 'DragAndDrop1Checker',
  
    data() {
      return {
        ordenCorrecto: null,
        mensajeError: "",
        respuestasIncorrectas: [
          "¡Error! Por favor, ten en cuenta la estructura de una función y cómo se hace su llamada",
          "¡Error! Revisa el orden en el que estas ubicando los elementos de la llamada de una función",
          "¡Error! Recuerda que la llamada de una función (sin parámetros) no lleva nada dentro de los paréntesis",
          "¡Error! Considera el orden en el cual estas ubicando los elementos y llegarás a la respuesta",
        ],
      };
    },

    methods: {
      verificarOrden() {
        if (this.ordenCorrecto === true) {
          return; // Bloquea clics adicionales si se alcanzó el límite o la respuesta es correcta
        }

        const ordenEsperado = ["areaTriangulo =", "(baseTriangulo", "*", "alturaTriangulo)", "/2;"];
        if (this.tapes.every((tape, index) => tape === ordenEsperado[index])) {
          this.ordenCorrecto = true;
        } else {
          this.ordenCorrecto = false;
          this.mensajeError = this.obtenerMensajeAleatorio();
        }
      },

      
      obtenerMensajeAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * this.respuestasIncorrectas.length);
        return this.respuestasIncorrectas[indiceAleatorio];
      }
    },
  
    setup() {
      const [parent, tapes] = useDragAndDrop(
        [
          "areaTriangulo =",
          "(baseTriangulo",
          "*",
          "alturaTriangulo)",
          "/2;"
        ].sort(() => Math.random() - 0.5),
        { 
          plugins: [animations()],
        }
      );
  
  
      return {
        parent,
        tapes,
      };
    }
  
  };
  </script>
  
  <style scoped>
  
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem; /* Espacio entre los elementos */
  }
  
  .flex {
    display: flex;
  }
  
  .flex-container {
    display: flex;
    gap: 1rem; /* Espacio entre los contenedores */
    align-items: center;
    justify-content: center;
  }
  
  .space-x-4 > * + * {
    margin-left: 1rem; /* Espacio horizontal entre elementos */
  }
  
  .bg-blue {
    background-color: hsl(260, 1%, 40%);
  }
  
  .text-white {
    color: white;
  }
  
  .rounded-full {
    border-radius: 10px;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .correcto {
    font-size: 20px;
    color: green;
  }
  
  .incorrecto {
    font-size: 20px;
    color: red;
  }
  
  .texto-personalizado {
      font-family: Arial, sans-serif; /* Tipo de letra */
      font-size: 18px; /* Tamaño de fuente */
      text-align: justify; /* Alineación justificada */
  }
  
  </style> 