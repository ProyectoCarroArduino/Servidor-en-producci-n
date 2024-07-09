<template>
    <div>
        <h4 class="texto-personalizado">De acuerdo a la <strong>sintaxis del condicional Switch</strong>, 
            ordene los elementos de la estructura <strong>(switch)</strong> para que el primer mensaje <strong>"Estas en invierno"</strong> 
            este de forma correcta:</h4>
      <br>
      <p class="texto-personalizado"><strong>Instrucciones:</strong> El orden debe de ir de manera descendente desde el primer elemento
        que considere que es el que empieza hasta el último.</p>
    
      <br>
      <div>
        <div ref="parent" class="grid gray-background kanban-board">
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
        <button @click="verificarOrden">Verificar Orden</button>
        <p v-if="ordenCorrecto === true" class="correcto alert alert-success mt-3">¡Orden correcto!</p>
        <p v-if="ordenCorrecto === false" class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
        <br>
        <br>
        <br>
        <h4 class="texto-personalizado">De acuerdo a la <strong>sintaxis del condicional Switch</strong>, 
          ordene los elementos de la estructura <strong>(switch)</strong> para que el segundo mensaje <strong>"Estas en primavera"</strong> este de forma correcta:</h4>
        <br>
        <p class="texto-personalizado"><strong>Instrucciones:</strong> El orden debe de ir de manera descendente desde el primer elemento
            que considere que es el que empieza hasta el último.</p>
        <br>
        <div ref="parent2" class="grid gray-background kanban-board">
          <article
            v-for="tape2 in tapes2"
            :key="tape2"
            class="bg-blue text-white rounded-full p-4 flex items-center justify-center"
          >
            <p>{{ tape2 }}</p>
          </article>
        </div>
        <br>
        <br>
        <button @click="verificarOrden2">Verificar Orden 2</button>
        <p v-if="ordenCorrecto2 === true" class="correcto alert alert-success mt-3">¡Orden correcto!</p>
        <p v-if="ordenCorrecto2 === false" class="incorrecto alert alert-danger mt-3">{{ mensajeError2 }}</p>
      </div>
      <br>
      <br>
    </div>
  </template>
  
  <script>
  import { animations } from "@formkit/drag-and-drop";
  import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
  export default {
    name: 'Variables',
  
    data() {
      return {
        ordenCorrecto: null,
        ordenCorrecto2: null,
        mensajeError: "",
        mensajeError2: "",
        respuestasIncorrectas: [
          "¡Error! Por favor, ten en cuenta la estructura para definir una variable",
          "¡Error! Revisa el orden en el que estas ubicando los elementos de la estructura",
          "¡Error! Recuerda que la declaración de una variable cuenta con una estructura fija",
          "¡Error! Considera el paso a paso que se tiene que hacer para poder definir una variable de manera correcta",
        ],
      };
    },
    methods: {
      verificarOrden() {
        const ordenEsperado = ["case 12:", "case 1:", "case 2:", "instrucción (mensaje: Estas en invierno)", "break;"];
        if (this.tapes.every((tape, index) => tape === ordenEsperado[index])) {
          this.ordenCorrecto = true;
        } else {
          this.ordenCorrecto = false;
          this.mensajeError = this.obtenerMensajeAleatorio();
        }
      },
      verificarOrden2() {
        const ordenEsperado2 = ["case 3:", "case 4:", "case 5:", "instrucción (mensaje: Estas en primavera)", "break;"];
        if (this.tapes2.every((tape2, index) => tape2 === ordenEsperado2[index])) {
          this.ordenCorrecto2 = true;
        } else {
          this.ordenCorrecto2 = false;
          this.mensajeError2 = this.obtenerMensajeAleatorio();
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
          "case 12:",
          "case 1:",
          "case 2:",
          "instrucción (mensaje: Estas en invierno)",
          "break;",
        ].sort(() => Math.random() - 0.5),
        { 
          plugins: [animations()],
        }
      );
  
      const [parent2, tapes2] = useDragAndDrop(
        [
          "case 3:",
          "case 4:",
          "case 5:",
          "instrucción (mensaje: Estas en primavera)",
          "break;",
        ].sort(() => Math.random() - 0.5),
        { 
          plugins: [animations()],
        }
      );
  
      return {
        parent,
        tapes,
        parent2,
        tapes2,
      };
    }
  
  
  };
</script>
  
<style scoped>
  
.grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.5rem; /* Espacio entre los elementos */
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
    background-color: rgba(92, 15, 99, 0.644);
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

.gray-background {
  background-color: hsl(294, 82%, 9%); /* Fondo gris claro */
}

.kanban-board {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
}
  
  </style> 