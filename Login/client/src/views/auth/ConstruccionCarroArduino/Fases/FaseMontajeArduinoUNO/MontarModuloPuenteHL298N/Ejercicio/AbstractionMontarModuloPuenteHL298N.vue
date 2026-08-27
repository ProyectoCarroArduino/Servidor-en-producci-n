<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 3. Montar puente H (módulo L298N) y conectarlo al Arduino UNO</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de los pines GND y IN1 de un módulo L298N (Puente H) a los pines de alimentación y los pines digitales de una placa Arduino UNO. La placa tiene que tener disponibles sus <strong>dos pines de alimentación (GND)</strong> y los <strong>pines digitales (8, 9, 12, 13)</strong> para efectuar el montaje o conexión del módulo. 
        Se debe tener en cuenta que para que el dispositivo esté <strong>correctamente conectado o montado</strong> a la placa Arduino UNO tiene que tener su pin GND conectado a un pin de <strong>alimentación GND</strong> y su pin IN1 al <strong>pin digital (12)</strong>.</p>
      <p class="texto-personalizado">El programa deberá <strong>solicitar al usuario</strong> a qué pin de la placa Arduino UNO quiere conectar los pines GND y IN1 del módulo L298N, así mismo el programa <strong>deberá validar</strong> que los dos pines GND y IN1 del módulo estén conectados a los respectivos pines de alimentación y digitales de la placa Arduino para el correcto funcionamiento. </p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué pines de alimentación y digitales de la placa Arduino UNO se están utilizando para el montaje del módulo L298N (Puente H).</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada “moduloL298N”, la cual deberá de encargarse de la asignación de los pines VCC y IN1 a los pines de alimentación y digitales de la placa Arduino UNO y la validación de la asignación de pines para el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar dos variables de tipo entera (int) llamadas opcion_gnd y opcion_in1.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe de mostrar un menú que permita la visualización de los pines de alimentación y digitales de la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe validar que el pin GND del módulo L298N esté conectado a uno de los pines de alimentación (GND, GND) de la placa Arduino UNO, y así mismo el pin  IN1 del módulo también esté conectado al pin digital (12) de la placa.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin GND del módulo L298N no está conectado a uno de alimentación correspondiente de la placa Arduino UNO imprimir el mensaje de error: “El pin GND debe conectarse a GND1 (1) o GND2 (2).”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin GND del módulo HC-06 no está conectado a uno de los dos pines GND de la placa Arduino UNO imprimir el mensaje de error: “El pin IN1 debe conectarse a D12 (12).”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir los pines que se están utilizando para la conexión. La impresión debe hacerse llamando a la función ModuloL298N en el case 1 del menú del código que se ha desarrollado en el anterior paso.</strong></p></li>
        </ul>
      <hr class="my-4" />
      <br>
      <h3>Abstracción:</h3>
      <br>
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
        <button @click="analyzeCode" :disabled="isRetryDisabled">Analizar Código</button>
        <br>

        <br>
        <p v-if="result" :class="resultClass">{{ result }}</p>
      </div>

      <br>
      <div>
        <button
          class="bt-validate"
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
import EstadoSubejercicio from '@/components/EstadoSubejercicio.vue';

export default {
  components: {
    MenuCarro,
    EstadoSubejercicio
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


void moduloL298N() {
    int opcion_gnd, opcion_in1;
    int gnd_valido = 0;
    int in1_valido = 0;


    printf("Pines de alimentación y digitales disponibles en la placa Arduino UNO:\n");
    printf(" 1. GND1\n");
    printf(" 2. GND2\n");
    printf(" 8. D8\n");
    printf(" 9. D9\n");
    printf("12. D12\n");
    printf("13. D13\n");


    printf("\nSeleccione el pin al que desea conectar el pin GND del módulo L298N (1-2): ");
    scanf("%d", &opcion_gnd);


    printf("Seleccione el pin al que desea conectar el pin IN1 del módulo L298N (8, 9, 12, 13): ");
    scanf("%d", &opcion_in1);


    // Validaciones
    if (opcion_gnd == 1 || opcion_gnd == 2) {
        gnd_valido = 1;
    }


    if (opcion_in1 == 12) {
        in1_valido = 1;
    }


    // Evaluar conexión
    if (gnd_valido && in1_valido) {
        printf("\nEl módulo L298N está correctamente conectado:\n");


        switch (opcion_gnd) {
            case 1: printf("  GND -> GND1\n"); break;
            case 2: printf("  GND -> GND2\n"); break;
        }


        printf("  IN1 -> D12\n");


    } else {
        printf("\nError en la conexión.\n");


        if (!gnd_valido)
            printf("El pin GND debe conectarse a GND1 (1) o GND2 (2).\n");


        if (!in1_valido)
            printf("El pin IN1 debe conectarse a IN1 (12).\n");
    }
}


int main() {
    moduloL298N();
    return 0;
}
`
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
