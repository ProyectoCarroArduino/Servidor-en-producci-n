<template>
  <div id="layout-general">
    <main class="contenido">
        <h1 class="text-center">5.2 Ciclo while</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que permita <strong>evaluar</strong> las notas de <strong>5</strong> estudiantes para un examen. El programa deberá <strong>solicitar</strong> ingresar la nota correspondiente de cada estudiante,
         esta se <strong>asigna</strong> de un valor de 0 a 5. Si la nota de un estudiante es <strong>menor</strong> de 3 el programa deberá imprimir el mensaje: <strong>“Resultado: Reprobado.”</strong>, 
         por el contrario si la nota de un estudiante es <strong>mayor</strong> de 3 el programa deberá imprimir el mensaje: <strong>“Resultado: Aprobado!”</strong>.</p>
      <p class="texto-personalizado">Al finalizar el programa deberá indicar cuántos estudiantes han <strong>aprobado</strong> el examen y cuántos han <strong>reprobado</strong> este.</p>
      <br>
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
        <Menu />
      </div>
    </aside>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import Menu from "@/components/Menu.vue";
import { onMounted, reactive, toRefs } from 'vue';
import { useEvaluacionAbstractionStore } from '@/stores/evaluation';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';
import EstadoSubejercicio from '@/components/EstadoSubejercicio.vue';

export default {
  components: {
    Menu,
    EstadoSubejercicio
  },

  props: {
    msg: String
  },

  setup() {
    const evaluacionAbstractionStore = useEvaluacionAbstractionStore();

    const evaluacionRaw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Programación en C', // Añadido
        modulo: '4. Variables y operaciones',
        submodulo: '',
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

int main() {

    int cantidadEstudiantes;
    int estudiante = 1;
    int aprobados = 0;
    int reprobados = 0;

    printf("¿Cuantos estudiantes desea registrar? ");
    scanf("%d", &cantidadEstudiantes);

    while (estudiante <= cantidadEstudiantes) {

        float suma = 0;
        float nota;
        float promedio;

        printf("\n--- Estudiante %d ---\n", estudiante);

        for (int i = 1; i <= 3; i++) {

            printf("Ingrese la nota %d: ", i);
            scanf("%f", &nota);

            suma = suma + nota;
        }

        promedio = suma / 3;

        printf("Promedio: %.2f\n", promedio);

        if (promedio >= 3.0) {
            printf("Resultado: APROBADO\n");
            aprobados++;
        } else {
            printf("Resultado: REPROBADO\n");
            reprobados++;
        }

        estudiante++;
    }

    printf("\n===== RESULTADOS =====\n");
    printf("Estudiantes aprobados: %d\n", aprobados);
    printf("Estudiantes reprobados: %d\n", reprobados);

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
      router.push('/GeneralizacionVariablesOperacionesCEjercicio2').then(() => {
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
