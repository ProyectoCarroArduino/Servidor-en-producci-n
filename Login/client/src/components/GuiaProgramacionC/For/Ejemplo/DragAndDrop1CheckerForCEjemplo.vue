<template>
    <div>
      <h4 class="texto-personalizado">Ordene los pasos que sigue el ciclo for en su primera vuelta:</h4>
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
        <p v-if="contadorVerificaciones > 0 && !ordenCorrecto" class="contador">
          Intentos restantes: {{ Maxintento - contadorVerificaciones }}
        </p>
        <br>
        <button 
          @click="verificarOrden" 
          :disabled="contadorVerificaciones >= 3 || ordenCorrecto === true">
          Verificar Orden
        </button>
        <br>
        <p v-if="ordenCorrecto === true" class="correcto alert alert-success mt-3">¡Orden correcto!</p>
        <p v-if="ordenCorrecto === false" class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
        <p v-if="ordenCorrecto || contadorVerificaciones === Maxintento" class="correcto alert alert-success mt-3">
          Tu evaluación final es: {{ evaluacion }}
        </p>
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
        contadorVerificaciones : 0,
        Maxintento: 3,
        evaluacion : null,
        respuestasIncorrectas: [
        "¡Error! La inicialización se ejecuta una sola vez, al comienzo",
        "¡Error! La condición se revisa antes de entrar al cuerpo",
        "¡Error! La actualización ocurre al final de cada vuelta",
        "¡Error! Repasa en la teoría cómo se ejecuta un ciclo for",
      ],
      };
    },

    methods: {
      verificarOrden() {
        if (this.ordenCorrecto === true || this.contadorVerificaciones >= this.Maxintento) {
          return; // Bloquea clics adicionales si se alcanzó el límite o la respuesta es correcta
        }

        this.contadorVerificaciones++;
        const ordenEsperado = ["Inicialización: i empieza en 2", "Condición: revisar si i <= 10", "Cuerpo: mostrar el valor de i", "Actualización: sumar 2 a i y volver a la condición"];
        if (this.tapes.every((tape, index) => tape === ordenEsperado[index])) {
          this.ordenCorrecto = true;
          this.calcularEvaluacion();
        } else {
          this.ordenCorrecto = false;
          this.mensajeError = this.obtenerMensajeAleatorio();

          if (this.contadorVerificaciones >= this.Maxintento) {
            this.calcularEvaluacion(false);
          }
        }
      },

      calcularEvaluacion() {
      if (this.ordenCorrecto === true) {
        // Calcular evaluación solo si la respuesta es correcta
        if (this.contadorVerificaciones === 1) {
          this.evaluacion = 5;
        } else if (this.contadorVerificaciones === 2) {
          this.evaluacion = 4;
        } else if (this.contadorVerificaciones === 3) {
          this.evaluacion = 3;
        }
      } else if (this.contadorVerificaciones === this.Maxintento) {
        // Asignar calificación mínima al alcanzar intentos máximos sin éxito
        this.evaluacion = 1;
      }

      this.$emit('evaluacionLlamada', this.evaluacion); // Emitir la evaluación al componente padre
  },
      
      obtenerMensajeAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * this.respuestasIncorrectas.length);
        return this.respuestasIncorrectas[indiceAleatorio];
      }
    },
  
    setup() {
      const [parent, tapes] = useDragAndDrop(
        ["Inicialización: i empieza en 2", "Condición: revisar si i <= 10", "Cuerpo: mostrar el valor de i", "Actualización: sumar 2 a i y volver a la condición"].sort(() => Math.random() - 0.5),
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
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
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