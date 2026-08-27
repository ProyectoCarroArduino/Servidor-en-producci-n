<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 2. Ensamblar soportes de los motorreductores al chasis</h1>
        <br>
        <br>
        <h2>Ejercicio:</h2>
        <br>
        <p class="texto-personalizado">Se necesita un programa en C que simule el ajuste de un soporte para motorreductor al chasis. 
            Para ello se debe tener en cuenta que para atornillar el soporte <strong>se necesitan exactamente dos tornillos y dos tuercas</strong>, y que cada tornillo debe tener una tuerca correspondiente para ser ajustada.
            El programa deberá <strong>solicitar al usuario</strong> el número de tornillos y tuercas que se necesitan para ajustar el soporte. Finalmente, el programa deberá <strong>imprimir</strong>
            cuántas veces se ha atornillado un tornillo y se ha ajustado una tuerca.</p>
        <br>
         <p class="texto-personalizado"><strong> Requisitos:</strong></p>
        <ul>
            <li><p class="texto-personalizado"> <strong>Los tornillos y tuercas deben ser variables del tipo entero (int).</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo int llamada "ajustarSoporte" que reciba el número de tornillos y tuercas como parámetros.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Validar que el número de tuercas y tornillos sea exactamente dos (2), si no es así imprimir el siguiente mensaje: "Error: debe ingresar exactamente 2 tornillos y 2 tuercas".</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Implementar un ciclo (for) que itere, y en cada iteración atornille un tornillo y ajuste una tuerca.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>En cada iteración, imprimir el siguiente mensaje: "Se ha atornillado n tornillo(s) y ajustado n tuerca(s)". Entiéndase (n) como el número de veces que se ha realizado el proceso.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el número de veces que se ha atornillado un tornillo y se ha ajustado una tuerca.</strong></p></li>
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
        modulo: '1. Fase de ensamblaje',
        submodulo: '1.2 Conectar soportes de los motoreductores al chasis',
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

int ajustarSoporte(int tornillos, int tuercas) {
    int completados = 0;

    if (tornillos == 2 && tuercas == 2) {
        for (int i = 0; i < 2; i++) {
            completados++;
            printf("Se ha atornillado %d tornillo(s) y ajustado %d tuerca(s).\n", completados, completados);
        }
    } else {
        printf("Error: debe ingresar exactamente 2 tornillos y 2 tuercas.\n");
    }

    return completados;
}

int main() {
    int tornillos, tuercas, resultado;

    printf("Ingrese número de tornillos: ");
    scanf("%d", &tornillos);

    printf("Ingrese número de tuercas: ");
    scanf("%d", &tuercas);

    resultado = ajustarSoporte(tornillos, tuercas);

    printf("Se ha atornillado %d tornillo(s) y ajustado %d tuerca(s).\n", resultado, resultado);

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
      router.push('/GeneralizacionEnsamblarSoportesMotorreductores').then(() => {
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
