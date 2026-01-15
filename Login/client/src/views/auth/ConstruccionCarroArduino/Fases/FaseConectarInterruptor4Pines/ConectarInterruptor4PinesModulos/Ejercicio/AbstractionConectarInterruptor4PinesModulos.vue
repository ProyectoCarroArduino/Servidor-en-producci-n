<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 2. Conectar interruptor de 4 pines a la placa Arduino y al módulo L298N</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el proceso de conexión de los dos cables del interruptor de 4 pines a la placa Arduino UNO y al módulo L298N, esto se hace con el fin de <strong>alimentar todo el circuito con energía</strong>. Es importante tener en cuenta que el interruptor tiene <strong>4 pines</strong>, de los cuales 2 son de entrada, que reciben la energía, y los otros dos son de salida.
         Los cables que salen de los pines de salida del interruptor <strong>solo pueden</strong> ir conectados a los pines voltaje de los componentes. <strong>El orden de los pines de los componentes es el siguiente:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>1: GND.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>2: 5V.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>3. VIN.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>4. 3V.</strong></p></li>
      </ul>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> al usuario los pines del (1 - 4) a los cuales quiere conectar los cables de salida del interruptor. Se <strong>debe validar</strong> que los cables estén conectados a los pines de energía correctos, de lo contrario imprimir el mensaje: “Error: Ambos cables de energía deben estar conectados al pin correcto.”. 
        Si se conectan los cables a alguno de los pines de energía que <strong>no es el correcto</strong>, se debe imprimir el siguiente mensaje: "Conexion incorrecta.".</p>
      <p class="texto-personalizado">Al final, si se cumple la validación para que la placa Arduino UNO y el módulo L298N (puente H) estén conectados a los pines de energía correctos, el programa <strong>deberá imprimir</strong> el siguiente mensaje: "Ambos cables están conectados correctamente.”.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse dos funciones prototipo de tipo entero (int) llamadas:  energiaArduinoUNO y energiaModuloL298N.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entero (int) llamada energiaArduinoUNO, la cual deberá recibir el pin al cual el usuario ha decidido conectar el cable de energía en la placa Arduino UNO y, también debe validar que ese pin sea el que hace que el componente funcione de forma correcta.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entero (int) llamada energiaModuloL298N, la cual deberá recibir el pin al cual el usuario ha decidido conectar el cable de energía en el módulo L298N (puente H) y, también debe validar que ese pin sea el que hace que el componente funcione de forma correcta.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una matriz de tipo entero (int) conexion[4][2].</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo que solicite al usuario en qué pines de la placa Arduino UNO y el módulo L298N quiere conectar los cables de energía.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que los pines de energía o voltaje de la placa Arduino UNO y el módulo L298N (VIN) tengan conectados un cable. Para ello, hacer uso del ciclo para recorrer la matriz.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una variable de tipo entero llamada suma, la cual permita validar si los pines (GND, 5V Y 2V) tienen conectado un cable, si si lo tienen retornar 0, pero si el pin (VIN) es el que tiene conectado un cable en los dos componentes retornar 1.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación de que hay cables conectados a los pines GND, 5V Y 2V es correcta se debe imprimir el siguiente mensaje: “Error: Ambos cables de energía deben estar conectados al pin correcto.”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, si se cumple la validación para que la placa Arduino UNO y módulo funcione correctamente, el programa deberá imprimir el siguiente mensaje: "¡Conexion correcta!".</strong></p></li>
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
        modulo: '5. Fase de conectar interruptor de cuatro (4) pines',
        submodulo: '5.2 Conectar interruptor de 4 pines a la placa Arduino y al módulo L298N:',
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

int energiaArduinoUNO(int conexion[4][2]);
int energiaModuloL298N(int conexion[4][2]);


int main() {
    int conexion[4][2] = {0};
    int pin;


    printf("Conexion de energia\n");
    printf("Menu de pines:\n");
    printf("1. GND\n");
    printf("2. 5V\n");
    printf("3. VIN\n");
    printf("4. 3V\n\n");

    printf("Seleccione un pin de la placa Arduino UNO para el cable de energia: ");
    scanf("%d", &pin);


    if (pin >= 1 && pin <= 4) {
        conexion[pin - 1][0] = 1;
    }

    printf("\nSeleccione un pin del modulo L298N (puente H) para el cable de energia: ");
    scanf("%d", &pin);


    if (pin >= 1 && pin <= 4) {
        conexion[pin - 1][1] = 1;
    }

    if (energiaArduinoUNO(conexion) && energiaModuloL298N(conexion)) {
        printf("\n¡Conexion correcta!\n");
        printf("Ambos cables están conectados correctamente.\n");
    } else {
        printf("\nConexion incorrecta.\n");
        printf("Error: Ambos cables de energía deben estar conectados al pin correcto.\n");
    }

    return 0;
}




int energiaArduinoUNO(int conexion[4][2]) {
    int i;

    for (i = 0; i < 4; i++) {
        if (i != 2 && conexion[i][0] == 1) {
            return 0;
        }
    }

    if (conexion[2][0] != 1) {
        return 0;
    }


    return 1;
}


int energiaModuloL298N(int conexion[4][2]) {
    int i;

    for (i = 0; i < 4; i++) {
        if (i != 2 && conexion[i][1] == 1) {
            return 0;
        }
    }

    if (conexion[2][1] != 1) {
        return 0;
    }

    return 1;
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
      router.push('/GeneralizacionConectarInterruptor4PinesModulos').then(() => {
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
