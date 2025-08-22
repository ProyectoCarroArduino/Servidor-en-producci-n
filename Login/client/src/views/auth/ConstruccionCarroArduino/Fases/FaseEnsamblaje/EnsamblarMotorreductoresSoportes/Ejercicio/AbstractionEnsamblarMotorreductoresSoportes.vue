<template>
  <div id="user">
    <div class="card card-body mt-8 align-left col-md-15">
      <h1 class="text-center">Paso 3. Ensamblar motorreductores a los soportes</h1>
        <br>
        <br>
        <h2>Ejercicio:</h2>
        <br>
        <p class="texto-personalizado">Se necesita un programa en C que simule un ensamblador de motorreductores a sus soportes. El ensamblador deberá ensamblar <strong>cuatro</strong> motorreductores a sus soportes, <strong>uno por cada motorreductor</strong>. 
            Para ello se debe tener en cuenta que por cada motorreductor que se requiere ensamblar a su soporte <strong>se va a necesitar específicamente un tornillo largo y una tuerca pequeña</strong>. En el proceso de ensamblaje del motorreductor al soporte este se debe ajustar, 
            es por eso que <strong>mientras</strong> se atornilla el tornillo largo la tuerca pequeña se debe ajustar. </p>
        <p class="texto-personalizado">El programa deberá <strong>solicitar al usuario</strong> el número de veces que se va a ensamblar un motorreductor y su soporte, también deberá <strong>proveer</strong> el número de tornillos largos y tuercas pequeñas que se requieran para el proceso de ensamblaje. 
            Al final el programa deberá <strong>imprimir</strong> el número de veces que se ha utilizado el ensamblador.</p>
        <br>
        <p class="texto-personalizado"><strong>Requisitos:</strong></p>
        <ul>
            <li><p class="texto-personalizado"> <strong>Los tornillos largos y tuercas pequeñas deben ser variables del tipo entero (int).</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entera llamada “Ensamblador” que debe recibir el número de veces que se va a utilizar el ensamblador, el número de tornillos largos y tuercas pequeñas como parámetros.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Implementar un ciclo (do while) que atornille un tornillo largo y ajuste una tuerca pequeña cada vez que se use el ensamblador.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>En cada itereración se debe validar que el número de tornillos largos y tuercas pequeñas sea mayor a cero (0), si no es así imprimir el mensaje: “Materiales agotados en stock” y se debe salir inmediatamente del ciclo.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>En cada iteración, decrementar en uno los tornillos largos y las tuercas pequeñas.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el número de veces que se ha utilizado o ha realizado el proceso el ensamblador.</strong></p></li>
        </ul>
      <hr class="my-4" />
      <br>
      <h3>Abstracción:</h3>
      <br>
      <!-- Intentos de Video -->
      <p v-if="intentosDisponibles !== null" class="alert alert-info">
        Intentos restantes: {{ intentosDisponibles }}
      </p>
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
        <button @click="analyzeCode" :disabled="isRetryDisabled">Analizar Código</button>
        <br>

        <br>
        <p v-if="result" :class="resultClass">{{ result }}</p>
      </div>

      <br>
      <p v-if="isCorrect || intentosDisponibles <= 0" class="correcto alert alert-success mt-3">
        Tu evaluación final es: {{ evaluacion }}
      </p>

      <div>
        <button
          class="bt-validate"
          v-if="isCorrect || intentosDisponibles <= 0"
          :disabled="!isFinishEnabled"
          @click="finish"
        >
          Avanzar
        </button>
      </div>

      <p class="alert alert-primary">
        Evaluación Abstracción: {{ evaluacionAbstractionStore.evaluacion.toFixed(1) }}
      </p>
    </div>

    <div class="align-left col-md-3">
      <div class="temas">
        <MenuCarro />
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import MenuCarro from "@/components/MenuCarro.vue";
import { onMounted, reactive, toRefs } from 'vue';
import { useEvaluacionAbstractionStore } from '@/stores/evaluation';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';

export default {
  components: {
    MenuCarro
  },

  props: {
    msg: String
  },

  setup() {
    const evaluacionAbstractionStore = useEvaluacionAbstractionStore();

    const evaluacionRaw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Construcción Carro Arduino', // Añadido
        modulo: '1. Fase de ensamblaje',
        submodulo: '1.1 Conectar cables a los motorreductores',
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

int Ensamblador(int veces, int tornillos, int tuercas) {
    int proceso = 0;

    do {
        if (tornillos > 0 && tuercas > 0) {
            tornillos--; 
            tuercas--;   
            proceso++;  
        } else {
            printf("Materiales agotados en stock\n");
            break;   
        }
    } while (proceso < veces);

    return proceso;
}


int main() {
    int veces; 
    int tornillosLargos; 
    int tuercasPequenas;
    int resultado;

    printf("Ingrese el número de veces que se ensamblará un motorreductor a su soporte: ");
    scanf("%d", &veces);

    printf("Ingrese el número de tornillos largos disponibles: ");
    scanf("%d", &tornillosLargos);

    printf("Ingrese el número de tuercas pequeñas disponibles: ");
    scanf("%d", &tuercasPequenas);

    resultado = Ensamblador(veces, tornillosLargos, tuercasPequenas);
    printf("El ensamblador ha realizado el proceso %d veces.\n", resultado);

    return 0;
}`
    };
  },

  computed: {
    isRetryDisabled() {
      return this.isCorrect || this.intentosDisponibles <= 0;
    },
    isFinishEnabled() {
      return this.isCorrect || this.intentosDisponibles <= 0;
    }
  },

  methods: {
    async analyzeCode() {
      if (this.isCorrect || this.intentosDisponibles <= 0) {
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

        // Calcular nota según patrón
        const intentosAntes = this.intentosDisponibles;
        let evaluacion = 1;
        if (isCorrect) {
          evaluacion = intentosAntes === 3 ? 5 : intentosAntes === 2 ? 4 : 3;
        } else if (intentosAntes <= 1) {
          evaluacion = 1;
        } else {
          evaluacion = 1;
        }

        await this.registrarEvaluacion(evaluacion);
        await this.obtenerIntentos();
        this.evaluacion = evaluacion;

      } catch (error) {
        console.error("Error al analizar el código:", error);
        this.result = "Ha ocurrido un error al analizar el código. Inténtalo nuevamente.";
        this.resultClass = "warning";
      }
    },

    finish() {
      this.evaluacionAbstractionStore.evaluacion = this.evaluacion;
      router.push('/GeneralizacionConectarCablesMotorreductores').then(() => {
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
