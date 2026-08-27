<template>
  <div id="layout-general" class="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 1. Montar Arduino UNO en el soporte</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule una placa Arduino UNO. En la placa se deberá poder <strong>montar</strong> los componentes: <strong>Modulo Bluetooth HC-06 y Modulo L298N/puente H</strong>. Se debe tener en cuenta que para el montaje de algún componente a la placa Arduino UNO, este debe ir conectado a los pines correspondientes. 
        Sin embargo, para este ejercicio <strong>no se van a solicitar las conexiones</strong> a los pines de la placa para ningún módulo.</p>
      <p class="texto-personalizado">El programa deberá poder <strong>dar al usuario</strong> la opción de que ingrese a algunos de los dos componentes para posteriormente hacer la conexión o montaje de este a la placa Arduino UNO. Además, <strong>debe proporcionar</strong> una forma de salir del programa si no se  quiere seleccionar ninguno de los dos componentes.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué componente se ha seleccionado para posteriormente hacer el montaje.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada “arduinoUNO” donde se maneje toda la simulación de la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una variable tipo entera (int) llamada opcion.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe de mostrar un menú que permita la visualización de los componentes que se van a montar a la placa y la opción de salir.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>El menú debe mostrar un mensaje de error que diga lo siguiente: “Opción inválida. Saliendo...” si se ha seleccionado una opción inválida.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el nombre del componente que el usuario ha seleccionado para montar a la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>No se debe solicitar los pines de conexión ni validar la asignación de estos para un correcto funcionamiento en el ejercicio (por el momento).</strong></p></li>
        </ul>
      <hr class="my-4" />
      <br>
      <h3>Abstracción:</h3>
      <br>
      <!-- Intentos -->
      <br>
      <p class="texto-personalizado">
      <strong> Instrucciones:</strong>  Digite el código correcto en C para solucionar el ejercicio. Elimine cualquier comentario que haya agregado al código. Solo se permite un salto de linea ("\n").                     
      </p>
      <br>
      <div class="hello">
        <h1>{{ msg }}</h1>
        <textarea v-model="code" placeholder="Escribe tu código aquí"></textarea>
        <br>
        <br>
        <EstadoSubejercicio :estado="ev" />
        <button @click="analyzeCode" :disabled="isRetryDisabled" class="btn btn-primary">Analizar Código</button>
        <br>

        <br>
        <p v-if="result" :class="resultClass">{{ result }}</p>
      </div>

      <br>
      <div>
        <button
          class="btn btn-primary"
          v-if="ev.bloqueado"
          :disabled="!isFinishEnabled"
          @click="finish"
        >
          Avanzar
        </button>
      </div>
    </main>

    <aside class="menu-lateral">
      <div>
        <Menu />
      </div>
    </aside>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import Menu from "../../../../../../components/Menu.vue";
import { onMounted, reactive, toRefs } from 'vue';
import { useEvaluacionAbstractionStore } from '@/stores/evaluation';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';
import EstadoSubejercicio from '@/components/EstadoSubejercicio.vue';

export default {
  components: {
    Menu
  },

  props: {
    msg: String
  },

  components: { EstadoSubejercicio },

  

  setup() {
    const evaluacionAbstractionStore = useEvaluacionAbstractionStore();

    const evaluacionRaw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Programación en C', // Añadido
        modulo: '1. Conceptos basicos',
        submodulo: '1.1 Introduccion a C',
        ejercicio: 'Ejercicio 1',
        categoria: 'abstraccion',
        subejercicio: 'Subejercicio 1'
      })
    );

    const evaluacion = {
      ...toRefs(evaluacionRaw),
      registrarEvaluacion: evaluacionRaw.registrarEvaluacion,
      obtenerIntentos: evaluacionRaw.obtenerIntentos
    };

    onMounted(() => {
      evaluacion.obtenerIntentos();
    });

    return {
      ev: evaluacionRaw,
      registrarResultado: evaluacionRaw.registrarResultado,
      evaluacionAbstractionStore,
      intentosDisponibles: evaluacion.intentosRestantes,
      notaActual: evaluacion.notaActual,
      registrarEvaluacion: evaluacion.registrarEvaluacion,
      obtenerIntentos: evaluacion.obtenerIntentos
    };
  },

  data() {
    return {
      evaluacion: null,
      isCorrect: false,
      code: '',
      result: '',
      resultClass: '',
      correctCode: `#include <stdio.h>


void ArduinoUNO() {
    int opcion;

    printf("--- Simulación de placa Arduino UNO ---\n");
    printf("Componentes disponibles para montar:\n");
    printf("1. Módulo Bluetooth HC-06\n");
    printf("2. Módulo L298N / Puente H\n");
    printf("3. Salir\n");
    printf("Seleccione una opción (1-3): ");
    scanf("%d", &opcion);

     
    printf("\n--- Pines disponibles para conexión: 0 al 13 (digitales), A0 al A5 (analógicos) ---\n");

    switch(opcion) {
        case 1:
            printf("Has seleccionado montar el componente: Módulo Bluetooth HC-06\n");
            break;
        case 2:
            printf("Has seleccionado montar el componente: Módulo L298N / Puente H\n");
            break;
        case 3:
            printf("No se montará ningún componente. Saliendo del programa...\n");
            break;
        default:
            printf("Opción inválida. Saliendo...\n");
    }
}

 
int main() {
    ArduinoUNO();   
    return 0;
}`
    };
  },

  computed: {
    isRetryDisabled() {
      return !this.ev.estadoCargado || this.ev.bloqueado || this.ev.cargando;
    },
    isFinishEnabled() {
      return this.ev.bloqueado;
    }
  },

  methods: {
    async analyzeCode() {
      if (this.isRetryDisabled) {
        return;
      }

      this.result = '';
      this.resultClass = '';
      this.isCorrect = false;

      const userCode = this.code.replace(/\s+/g, ' ').trim();
      const correctCode = this.correctCode.replace(/\s+/g, ' ').trim();

      let localError = '';
      if (userCode !== correctCode) {
        localError = "El código ingresado no coincide con la solución esperada. Revisa la sintaxis, espacios y elimina cualquier comentario.";
      }

      let isCorrect = false;

      try {
        const response = await axios.post(import.meta.env.VITE_API_URI_ANALYZE, { code: this.code });

        if (response.data.errors) {
          this.result = [localError, response.data.errors].filter(Boolean).join('\n');
          this.resultClass = 'warning';
        } else {
          this.result = '¡El código es correcto!';
          this.resultClass = 'success';
          isCorrect = true;
          this.isCorrect = true;
        }

        // La nota la calcula el servidor a partir de los intentos restantes.
        const respuesta = await this.registrarResultado(isCorrect);
        this.evaluacion = respuesta ? respuesta.subejercicio.nota : null;

      } catch (error) {
        console.error("Error al analizar el código:", error);
        this.result = "Ha ocurrido un error al analizar el código. Inténtalo nuevamente.";
        this.resultClass = "warning";
      }
    },

    finish() {
      this.evaluacionAbstractionStore.evaluacion = this.evaluacion;
      router.push('/CBGeneralizacion1').then(() => {
        window.scrollTo(0, 0);
      });
    }
  }
};
</script>


<style>
#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

  .layout-general {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin: 0 auto; /* centra horizontalmente */
  box-sizing: border-box;
  gap: 2rem;
  }

/* Contenido principal */
.contenido {
  flex: 1; /* Ocupa el resto del espacio disponible */
  min-width: 0; /* evita overflow horizontal */
  max-width: 82%; /* Ajusta este valor según quieras */
  overflow-x: hidden;
  }

/* Menú lateral */
.menu-lateral {
  flex: 0 0 280px;
  background-color: transparent;
  border-radius: 10px;
  padding: 1rem;
  position: sticky;
  top: 20px;
  height: fit-content;
  }

  /* Versión responsive */
@media (max-width: 992px) {
  .layout-general {
    flex-direction: column;
    align-items: center;
  }

  .contenido {
    flex: 1;
    max-width: 120%;
  }
  .menu-lateral {
    max-width: 100%;
  }

  .menu-lateral {
    position: relative; /* deja de ser sticky en móviles */
    top: 0;
  }

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

textarea {
  width: 100%;
  height: 200px;
}

.success {
  color: green;
  font-weight: bold;
  font-size: 20px;
}

.warning {
  color: red;
  font-weight: bold;
  font-size: 15px;
}
</style>

