<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 2. Preparar la bornera tipo hembra para conexión</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de cuatro cables jumper tipo macho hembra a una bornera tipo hembra. Dos cables son <strong>rojos</strong> y otros dos son <strong>negros</strong>. La bornera tipo hembra tiene <strong>dos pines</strong>, 
        uno <strong>positivo</strong> para la conexión a la fuente de poder y el otro <strong>negativo</strong> para el polo a tierra.</p>
      <p class="texto-personalizado">El programa <strong>deberá asignar</strong> dos cables de color <strong>rojo</strong> y otros dos de color <strong>negro</strong>. Para la conexión correcta de los cables a los pines de la bornera tipo hembra, se debe <strong>validar</strong> 
      que el pin positivo tenga conectado <strong>dos cables rojos</strong> y el pin negativo <strong>dos cables de color negro</strong>, de lo contrario imprimir el mensaje: “Los cables no están bien conectados”.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué cables están conectados al pin positivo y al pin negativo.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada borneraHembra, la cual deberá recibir cuatro cables, debe validar que el pin positivo tenga conectado dos cables rojos y el pin negativo tenga conectados dos cables negros.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar cuatro variables de tipo cadena de carácter llamadas cableR1, cableR2, cableN1 y cableN2.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin positivo de la bornera hembra tiene conectados cables diferentes al rojo imprimir el mensaje de error: “Los cables conectados al pin positivo deben ser de color rojo”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin negativo de la bornera hembra tiene conectados cables diferentes al negro imprimir el mensaje de error: “Los cables conectados al pin negativo debe ser de color negro”. </strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir qué cables están conectados al pin positivo y al pin negativo, pero solo si los cables son los correctos para el funcionamiento, de lo contrario imprimir el mensaje: “Los cables no están conectados a sus respectivos pines”.</strong></p></li>
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
        modulo: '3. Fase de Conectar fuente de poder al circuito',
        submodulo: '3.2 Preparar la bornera hembra para conexión:',
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
#include <string.h>

void borneraHembra(char cableR1[], char cableR2[], char cableN1[], char cableN2[]) {
    int correcto = 1;

    if (strcmp(cableR1, "rojo") != 0 || strcmp(cableR2, "rojo") != 0) {
        printf("Los cables conectados al pin positivo deben ser de color rojo\n");
        correcto = 0;
    }

    if (strcmp(cableN1, "negro") != 0 || strcmp(cableN2, "negro") != 0) {
        printf("Los cables conectados al pin negativo deben ser de color negro\n");
        correcto = 0;
    }

    if (correcto) {
        printf("Conexión correcta:\n");
        printf("Pin positivo: %s, %s\n", cableR1, cableR2);
        printf("Pin negativo: %s, %s\n", cableN1, cableN2);
    } else {
        printf("Los cables no están conectados a sus respectivos pines\n");
    }
}

int main() {
    char cableR1[] = "rojo";
    char cableR2[] = "rojo";
    char cableN1[] = "negro";
    char cableN2[] = "negro";

    borneraHembra(cableR1, cableR2, cableN1, cableN2);

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
      router.push('/GeneralizacionPrepararBorneraHembraConexion').then(() => {
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
