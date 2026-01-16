<template>
  <div id="layout-general">
    <main class="contenido">
        <h1 class="text-center">4. Variables y operaciones</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que calcule el <strong>precio total</strong> de la compra de un producto.
        El cálculo de la compra debe solicitar dos datos al usuario: el precio del producto y la cantidad que se desea comprar.</p>
      <p class="texto-personalizado">Para obtener el <strong>precio total</strong>, se debe calcular el precio base de la compra y luego agregar el <strong>IVA</strong>, el cual corresponde al 21% del total. 
      Finalmente, este importe se <strong>sumará</strong> al precio base para obtener el <strong>total a pagar</strong>.</p>
      <p><span style="font-weight: bold;">Nota:</span> <strong>(usar solo variables de tipo double)</strong>.</p>
      <br>
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

export default {
  components: {
    Menu
  },

  props: {
    msg: String
  },

  setup() {
    const evaluacionAbstractionStore = useEvaluacionAbstractionStore();

    const evaluacionRaw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Construcción Carro Arduino', // Añadido
        modulo: '',
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
    double precio;
    double cantidad;
    double subtotal;
    double iva;
    double total;

    printf("Introduce el precio del producto: ");
    scanf("%lf", &precio);

    printf("Introduce la cantidad comprada: ");
    scanf("%lf", &cantidad);

    subtotal = precio * cantidad;
    iva = subtotal * 0.21;
    total = subtotal + iva;

    printf("Subtotal: %.2lf euros\n", subtotal);
    printf("IVA (21%%): %.2lf euros\n", iva);
    printf("Total a pagar: %.2lf euros\n", total);

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
