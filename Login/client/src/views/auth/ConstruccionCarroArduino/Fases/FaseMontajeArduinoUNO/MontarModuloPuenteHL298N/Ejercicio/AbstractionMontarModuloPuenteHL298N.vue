<template>
  <div id="user">
    <div class="card card-body mt-8 align-left col-md-15">
      <h1 class="text-center">Paso 3. Montar puente H (módulo L298N) y conectarlo al Arduino UNO</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de los pines VCC y GND de un módulo bluetooth HC-06 a los pines alimentación de una placa Arduino UNO. La placa tiene que tener disponibles <strong>todos</strong> sus pines de alimentación para efectuar el montaje o conexión del módulo. 
        Se debe tener en cuenta que la placa cuenta con los siguientes pines de alimentación: <strong>(3.3V, 5V, GND, GND, VIN)</strong> y, para que el dispositivo esté conectado o montado <strong>tiene</strong> que tener su pin VCC conectado a un pin de <strong>alimentación (3.3V, 5V, VIN)</strong>
        y su pin GND a uno de los dos pines de <strong>alimentación (GND)</strong>.</p>
      <p class="texto-personalizado">El programa deberá <strong>solicitar al usuario</strong> a qué pin de la placa Arduino UNO quiere conectar los pines VCC y GND del módulo HC-06, así mismo el programa <strong>deberá validar</strong> 
        que los dos pines VCC y GND del módulo estén conectados a los respectivos pines de alimentación de la placa Arduino para el correcto funcionamiento.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué pines de alimentación de la placa Arduino UNO se están utilizando para el montaje del módulo bluetooth HC-06.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada “ModuloHC06”, la cual deberá de encargarse de la asignación de los pines VCC y GND a los pines de alimentación de la placa Arduino UNO y la validación de la asignación de pines para el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar dos variables de tipo entera (int) llamadas opcion_vcc y opcion_gnd.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe mostrar un menú que permita la visualización de los pines de alimentación de la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe validar que el pin VCC del módulo HC-06 esté conectado a uno de los pines de alimentación (3.3V, 5V, VIN) de la placa Arduino UNO, y así mismo el pin GND del módulo también esté conectado a uno de los dos pines GND de la placa.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin VCC del módulo HC-06 no está conectado a uno de alimentación correspondiente de la placa Arduino UNO imprimir el mensaje de error: “El pin VCC debe conectarse a 3.3V (1), 5V (2) o VIN (5).”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin GND del módulo HC-06 no está conectado a uno de los dos pines GND de la placa Arduino UNO imprimir el mensaje de error: “El pin GND debe conectarse a GND1 (3) o GND2 (4).”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir los pines que se están utilizando para la conexión. La impresión debe hacerse llamando a la función ModuloHC06 en el case 1 del menú del código que se ha desarrollado en el anterior paso.</strong></p></li>
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
        modulo: '2. Fase de montaje del circuito en el Arduino UNO',
        submodulo: '2.3 Montaje del puente H (módulo L298N) y conectarlo al Arduino UNO',
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




void ModuloHC06(){
    int opcion_vcc; 
    int opcion_gnd;
    int vcc_valido = 0;
    int gnd_valido = 0;




    printf("Pines de alimentación disponibles en la placa Arduino UNO:\n");
    printf(" 1. 3.3V\n");
    printf(" 2. 5V\n");
    printf(" 3. GND1\n");
    printf(" 4. GND2\n");
    printf(" 5. VIN\n");


    printf("\Seleccione el pin al que desea conectar el pin VCC del módulo HC-06 (1-5): ");
    scanf("%d", &opcion_vcc);


    printf("Seleccione el pin al que desea conectar el pin GND del módulo HC-06 (1-5): ");
    scanf("%d", &opcion_gnd);


    if (opcion_vcc == 1 || opcion_vcc == 2 || opcion_vcc == 5) {
        vcc_valido = 1;
    }


    if (opcion_gnd == 3 || opcion_gnd == 4) {
        gnd_valido = 1;
    }


    if (vcc_valido && gnd_valido) {
        printf("El modulo HC-06 esta conectado de la siguiente forma:\n");


        switch (opcion_vcc) {
            case 1: printf("  VCC -> 3.3V\n"); break;
            case 2: printf("  VCC -> 5V\n"); break;
            case 5: printf("  VCC -> VIN\n"); break;
        }


        switch (opcion_gnd) {
            case 3: printf("  GND -> GND1\n"); break;
            case 4: printf("  GND -> GND2\n"); break;
        }


    } else {
        printf("Error en la conexión.\n");
        if (!vcc_valido)
            printf("El pin VCC debe conectarse a 3.3V (1), 5V (2) o VIN (5).\n");
        if (!gnd_valido)
            printf("El pin GND debe conectarse a GND1 (3) o GND2 (4).\n");
    }
}




int main() {
    ModuloHC06();
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
      router.push('/GeneralizacionMontarModuloPuenteHL298N').then(() => {
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
