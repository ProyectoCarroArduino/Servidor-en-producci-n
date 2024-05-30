<template>
  <div>
    <h4 class="texto-personalizado">De acuerdo al tema de <strong>declaración de una variable</strong>, ordene de manera que la variable esté bien definida:</h4>
    <br>
    <div>
      <div ref="parent" class="grid gray-background">
        <article
          v-for="tape in tapes"
          :key="tape"
          class="bg-black text-white rounded-full p-4 flex items-center justify-center"
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
      <h4 class="texto-personalizado">De acuerdo al tema de <strong>declaración de una variable</strong>, ordene de forma que la variable esté bien definida:</h4>
      <br>
      <div ref="parent2" class="grid gray-background">
        <article
          v-for="tape2 in tapes2"
          :key="tape2"
          class="bg-black text-white rounded-full p-4 flex items-center justify-center"
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
      const ordenEsperado = ["int", "base", "=", 12, ";"];
      if (this.tapes.every((tape, index) => tape === ordenEsperado[index])) {
        this.ordenCorrecto = true;
      } else {
        this.ordenCorrecto = false;
        this.mensajeError = this.obtenerMensajeAleatorio();
      }
    },
    verificarOrden2() {
      const ordenEsperado2 = ["int", "altura", "=", 8, ";"];
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
        "int",
        "base",
        "=",
        12,
        ";",
      ].sort(() => Math.random() - 0.5),
      { 
        plugins: [animations()],
      }
    );

    const [parent2, tapes2] = useDragAndDrop(
      [
        "int",
        "altura",
        "=",
        8,
        ";",
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

.bg-black {
  background-color: black;
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