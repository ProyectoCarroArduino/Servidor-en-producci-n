<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 3. Conectar los motorreductores al módulo L298N (puente H)</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de tres cables al pin GND del puente H (módulo L298N). Es importante tener en cuenta que el puente H <strong>solo tiene un</strong> pin GND, por lo que los tres cables deberán ir conectados al <strong>mismo pin</strong>.</p>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> el número de cables que se quieren conectar al pin GND del puente H (módulo L298N). Para la conexión de los cables y el funcionamiento correcto del pin GND, se debe <strong>validar</strong> que este tenga conectado tres cables,
       de lo contrario imprimir el mensaje: “ERROR: El pin GND debe tener exactamente 3 cables conectados”.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> el total de cables conectados al pin GND del puente H (módulo L298N).</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada puenteH, la cual deberá recibir el número de cables que se quiere conectar al pin GND y debe validar que el pin GND tenga conectados los cables correspondientes.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar dos variables de tipo entero (int) llamadas numeroCables y conexionesGND.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un arreglo de tipo entero llamado cables.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo for que permita llenar el arreglo siguiendo la siguiente condición: Cada ciclo se debe preguntar si se quiere hacer la conexión de un cable o no. Para conectar el cable se debe digitar 1 y para no conectarlo se debe digitar 0.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el número de conexiones en el pin GND del puente H (módulo L298N) tiene más de tres cables conectados imprimir el mensaje de error: “ERROR: El pin GND debe tener exactamente 3 cables conectados”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el total de cables conectados al pin GND del puente H (módulo L298N) y si se cumple la condición para el funcionamiento correcto imprimir el mensaje: “Pin GND VÁLIDO: exactamente 3 cables conectados”.</strong></p></li>
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
    </main>

    <aside class="menu-lateral">
      <div>
        <MenuCarro />
      </div>
    </aside>
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
        modulo: '4. Fase de montaje del circuito al chasis',
        submodulo: '4.3 Conectar los motorreductores al puente H:',
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

int main() {
    
    int outArriba[3], outAbajo[3], cables[3];
    int i, arreglo, posicion;
    int correcto, conexionValida;  

    cables[1] = 1; 
    cables[2] = 2; 
    for (i = 1; i <= 2; i++) {
        outArriba[i] = 0;
        outAbajo[i] = 0;
    }

    printf("Espacios disponibles:\n");
    printf("Arriba:\n");
    printf("  1. OUT3\n");
    printf("  2. OUT2\n");
    printf("Abajo:\n");
    printf("  1. OUT4\n");
    printf("  2. OUT1\n\n");

    correcto = 1;

    for (i = 1; i <= 2; i++) {

        if (cables[i] == 1)
            printf("Cable %d (rojo)\n", i);
        else
            printf("Cable %d (negro)\n", i);

        printf("Seleccione arreglo (1 = Arriba, 2 = Abajo): ");
        scanf("%d", &arreglo);

        printf("Seleccione posicion (1 o 2): ");
        scanf("%d", &posicion);

        conexionValida = 0;

        if (arreglo == 1) { 
            if ((posicion == 1 && cables[i] == 1) ||
                (posicion == 2 && cables[i] == 2)) {

                outArriba[posicion] = cables[i];
                conexionValida = 1;
            }
        } else if (arreglo == 2) { 
            if ((posicion == 1 && cables[i] == 2) ||
                (posicion == 2 && cables[i] == 1)) {

                outAbajo[posicion] = cables[i];
                conexionValida = 1;
            }
        }

        if (!conexionValida) {
            correcto = 0;
        }
    }

    if (correcto)
        printf("\nConexiones de los cables correctas\n");
    else
        printf("\nLas conexiones de los cables no son adecuadas\n");

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
      router.push('/GeneralizacionDesplazarCircuitoChasisParte1').then(() => {
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
