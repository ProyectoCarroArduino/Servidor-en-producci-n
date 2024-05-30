<template>
  <div id="user">
    <div class="card card-body mt-8, align-left, col-md-15">
      <h1 class="text-center">4. Variables y operaciones</h1>
      <h3>Ejemplo 1:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa que calcule el <strong>área</strong> de un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm.</p>
      <br>
      <h3>Descomposición:</h3>
      <div class="options-container">
        <p class="texto-personalizado">De las siguientes <strong>palabras</strong>, ¿cuál es la que define lo que el problema está solicitando?</p>
        <br>
        <div v-for="(option, index) in options" :key="index" class="form-check">
          <input
            class="form-check-input texto-personalizado"
            type="radio"
            :id="`option${index}`"
            :value="option"
            v-model="selectedOption"
          >
          <label class="form-check-label" :for="`option${index}`">
            {{ option }}
          </label>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Respuesta seleccionada: {{ selectedOption }}</p>
      <br>
      <button @click="submitForm" class="btn btn-primary">Submit</button>
      <br>
      <div v-if="respuesta" class="respuesta">
        <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
      </div>
      <br>
      <div class="options-container">
        <p class="texto-personalizado">Selecciona cuántos <strong>subproblemas</strong> hay en este problema y cuáles son:</p>
        <br>
        <div v-for="(option, index) in optionsa" :key="index" class="form-check">
          <input
            class="form-check-input texto-personalizado"
            type="radio"
            :id="`option${index}`"
            :value="option"
            v-model="selectedOptiona"
          >
          <label class="form-check-label" :for="`option${index}`">
            {{ option }}
          </label>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Respuesta seleccionada: {{ selectedOptiona }}</p>
      <br>
      <button @click="submitForma" class="btn btn-primary">Submit</button>
      <br>
      <div v-if="respuestaAr" class="respuesta">
        <p v-if="esCorrectaAr" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorAr }}</p>
      </div>
    <div>
    <br> 
    <br>
    <p class="texto-personalizado">Organiza cómo crees que sería la <strong>jerarquia</strong> de los subproblemas:</p>
    <br>
    <div ref="todoList" class="kanban-board kanban-column gray-background">
        <article
          v-for="todo in todos"
          :key="todo"
          class="kanban-item"
        >
          <span class="kanban-handle"></span>
          <p>{{ todo }}</p>
        </article>
      </div>
    <br>
    <div v-if="resultadoValidacion === 'correcto'">
      <p class="correcto alert alert-success mt-3">¡El orden es correcto!</p>
    </div>
    <div v-else-if="resultadoValidacion === 'incorrecto'">
      <p class="incorrecto alert alert-danger mt-3">{{ mensajeRespuesta }}</p>
    </div>
    <button @click="enviarOrden" class="btn btn-primary">Enviar Orden</button>
    </div>
    <br>
    <br>
    <div>
      <button class="bt-validate" @click="finish">Avanzar</button>
    </div>
  </div>
  <div class="align-left col-md-3">
  <div class="temas">
    <Menu />
  </div>
  </div>
</div>
</template>

<script>
import router from '@/router'
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
import Menu from "../../components/Menu.vue";
export default {
  components: {
        Menu
    },

    data() {
        return {
          options: ["consultar", "hallar", "calcular", "plantear"].sort(() => Math.random() - 0.5),
          optionsa: [
            "3: calcular el área de un rectangulo, calcular el área de un trapecio y calcular el área de un cuadrado", 
            "1: calcular el área de un rectángulo", 
            "2: calcular el área de un rectángulo y un trapecio", 
            "2: calcular el área de un rectángulo y un triángulo",
          ].sort(() => Math.random() - 0.5),

          selectedOption: null,
          respuesta: null,
          esCorrecta: false,
          mensajeError: '',
          mensajesError: [
            '¡Error! Seleccionaste un verbo, pero no es la respuesta correcta',
            '¡Error! Vuelve a leer el problema e idetifica el verbo que se necesita',
            '¡Error! Recuerda que la palabra clave es un verbo y es la que dfine lo que el problema solicita',
            '¡Error! Ten en cuenta que la palabra clave en el texto está conjugada, pero en las opciones no',
          ],

          selectedOptiona: null,
          respuestaAr: null,
          esCorrectaAr: false,
          mensajeErrorAr: '',
          mensajesErrorAr: [
            '¡Error! Considera que los subproblemas están implicitos en el texto',
            '¡Error! Recuerda que los subproblemas están asociados a la palabra clave',
            '¡Error! No olvides que un problema siempre tiene uno o más subproblemas',
            '¡Error! Revisa los detalles que el problema te está dando, como objetos, formas, etc.',
          ],


          ordenCorrecto: ["hallar el área de un rectángulo", "hallar el área de un triángulo", "fin"],
          respuestasIncorrectas: [
            "¡Error! El orden no es correcto, vuelve a intentarlo",
            "¡Error! Ten presente el orden en el que sería más fácil resolver todo el problema",
            "¡Error! Recuerda que la jerarquia es el orden en el que se resuelve el problema",
            "¡Error! Siempre ten en cuenta la estructura en la que se resuelve un problema, como por ejemplo: subproblema 1, subproblema 2, subproblema x... fin",
          ],
          mensajeRespuesta: "",
          resultadoValidacion: null,

        };
    }, 

    setup() {

      const [todoList, todos] = useDragAndDrop(
      [
        "hallar el área de un triángulo",
        "hallar el área de un rectángulo",
        "fin",
      ].sort(() => Math.random() - 0.5),
      {
        plugins: [animations()],
        group: "kanbanGroup3",
        dragHandle: ".kanban-handle"
      });

      return {
      todoList,
      todos,
    };
  },

  

    methods: {

    submitForm() {
      this.respuesta = this.selectedOption;
      this.esCorrecta = this.selectedOption === 'calcular';
      if (!this.esCorrecta) {
        this.mensajeError = this.obtenerMensajeError();
      }
    },

    obtenerMensajeError() {
      const randomIndex = Math.floor(Math.random() * this.mensajesError.length);
      return this.mensajesError[randomIndex];
    },

    submitForma() {
      this.respuestaAr = this.selectedOptiona;
      this.esCorrectaAr = this.selectedOptiona === '2: calcular el área de un rectángulo y un triángulo';
      if (!this.esCorrectaAr) {
        this.mensajeErrorAr = this.obtenerMensajeErrorAr();
      }
    },

    obtenerMensajeErrorAr() {
      const randomIndex = Math.floor(Math.random() * this.mensajesErrorAr.length);
      return this.mensajesErrorAr[randomIndex];
    },

    validarOrden(arr) {
      for (let i = 0; i < this.ordenCorrecto.length; i++) {
        if (arr[i] !== this.ordenCorrecto[i]) {
          this.mensajeRespuesta = this.respuestasIncorrectas[Math.floor(Math.random() * this.respuestasIncorrectas.length)];
          return 'incorrecto';
        }
      }
      return 'correcto';
    },

    enviarOrden() {
      this.resultadoValidacion = this.validarOrden(this.todos);
    },

    finish() {
      router.push('/algoritmo')
    },
  },
}
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

.options-container {
  margin-top: 30px; 
}

.draggable-container {
  display: flex;
  align-items: center;
}

.list {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: grab;
  user-select: none;
  background-color: #f0f0f0;
  transform: translate(0, 0);
}

.dragging {
  cursor: grabbing;
  transform: translate(0, 0);
}

.mensaje-error {
  color: red;
}

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

.temas {
  position: fixed;
  margin-top: -245px;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}


.draggable-item {
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
}

.draggable-item:active {
  cursor: grabbing;
}

.kanban-board {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
}

.kanban-column {
  margin: 0.5rem 0;
}

.kanban-item {
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  cursor: grab;
}

.kanban-item:active {
  cursor: grabbing;
}

.kanban-handle {
  cursor: grab;
  margin-right: 0.5rem;
  background-color: #ccc;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.gray-background {
  background-color: #f0f0f0; /* Fondo gris claro */
}

.gray-background2 {
  background-color: hsla(0, 2%, 22%, 0.827); /* Fondo gris claro */
}

.correcto {
  font-size: 20px;
  color: green;
}

.incorrecto {
  font-size: 20px;
  color: red;
}


</style>