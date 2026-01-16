<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 1. Preparar cables de los motorreductores para la conexión al módulo L298N (puente H)</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el proceso de soldamiento de los pares de cables rojos y negros de los motorreductores. Es importante tener en cuenta que para soldar un cable, 
        <strong>se necesita</strong> un par de cables del mismo color y que estos <strong>deben estar preparados antes</strong> de que el proceso se realice.</p>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> al usuario el número de cables de color rojo de los motorreductores y de color negro que se quieren preparar. Para el proceso de soldamiento <strong>un par de cables son necesarios</strong>.
      Sin embargo, se <strong>debe validar</strong> que los dos cables sean del mismo color, y que también, el número de pares de cables soldados <strong>sea exactamente 2 rojos y  2 negros</strong> para el correcto funcionamiento. 
      de lo contrario imprimir el mensaje: “Error: se debe soldar exactamente 2 pares de cables con la cantidad de cables preparados para el correcto funcionamiento.”.</p>
      <p class="texto-personalizado">Al final, el programa <strong>deberá imprimir</strong> el siguiente mensaje: “Validación correcta: es posible soldar exactamente 2 pares de cables rojos y 2 pares de cables negros.”</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada soldarCables, la cual deberá recibir el número de cables que se quieren preparar, preguntar al usuario cuántos pares de cables rojos y negros se quieren soldar y, debe validar el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar cuatro variables de tipo entero (int) llamadas cablesRojos, cablesNegros, paresRojos y paresNegros.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que el número de pares de cables soldados sea exactamente 2 rojos y 2 negros para el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el número de pares de cables soldados no es exactamente 2 rojos y 2 negros imprimir el siguiente mensaje: "Error: se debe soldar exactamente 2 pares de cables con la cantidad de cables preparados para el correcto funcionamiento.”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación es correcta, al final el programa deberá imprimir el siguiente mensaje: "Validación correcta: es posible soldar exactamente 2 pares de cables rojos y 2 pares de cables negros.”.</strong></p></li>
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
        submodulo: '4.1 Preparar cables de los motorreductores para la conexión al módulo L298N (puente H):',
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

void soldarCables(int cablesRojos, int cablesNegros) {
    int paresRojos, paresNegros;

    printf("Cuántos pares de cables rojos quiere soldar como uno solo: ");
    scanf("%d", &paresRojos);

    printf("Cuántos pares de cables negros quiere soldar como uno solo: ");
    scanf("%d", &paresNegros);

    if (paresRojos == 2 &&
        paresNegros == 2 &&
        paresRojos * 2 <= cablesRojos &&
        paresNegros * 2 <= cablesNegros) {

        printf("Validación correcta: es posible soldar exactamente 2 pares de cables rojos y 2 pares de cables negros.\n");
    } else {
        printf("Error: se debe soldar exactamente 2 pares de cables con la cantidad de cables preparados para el correcto funcionamiento.\n");
    }
}

int main() {
    int cablesRojos, cablesNegros;

    printf("Cuántos cables de color rojo de los motorreductores quiere preparar para la conexión al módulo L298N: ");
    scanf("%d", &cablesRojos);

    printf("Cuántos cables de color negro de los motorreductores quiere preparar para la conexión al módulo L298N: ");
    scanf("%d", &cablesNegros);

    soldarCables(cablesRojos, cablesNegros);

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
      router.push('/GeneralizacionPrepararCablesConexionModuloL298N').then(() => {
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
