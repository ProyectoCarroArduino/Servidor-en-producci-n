<template>
  <div id="layout-general">
    <main class="contenido">
        <h1 class="text-center">7. Funciones</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Una tienda registra las ventas de 5 días. Hacer un programa en C con tres funciones que reciben el arreglo como parámetro, en este orden: (1) int sumarVentas(int datos[], int tamano), que suma los elementos con un acumulador suma que empieza en 0 y lo devuelve; (2) int buscarMayor(int datos[], int tamano), que toma datos[0] como mayor provisional, recorre desde i = 1 comparando con un if y devuelve el mayor; (3) void aplicarBono(int datos[], int tamano, int bono), que suma bono a cada elemento con datos[i] += bono. En main, declare el arreglo entero ventas de 5 elementos con los valores 120, 85, 200, 150 y 95, y en este orden: muestre Total: X con sumarVentas(ventas, 5) dentro del printf; muestre Mayor: Y con buscarMayor(ventas, 5) dentro del printf; llame a aplicarBono(ventas, 5, 10); muestre Ventas con bono: (sin \n) y, con un for de i = 0 mientras i &lt; 5, cada venta seguida de un espacio (printf con "%d "); muestre un salto de línea con printf("\n"), y por último muestre Total con bono: Z con sumarVentas(ventas, 5) dentro del printf. Todos los ciclos usan el contador i. Use la estructura vista en la teoría: biblioteca stdio.h, los prototipos antes de main, main con return 0; al final y las definiciones de las funciones después de main, en el mismo orden de los prototipos. Use llaves en todos los bloques, termine cada mensaje en \n y escriba los textos sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Total: 650
Mayor: 200
Ventas con bono: 130 95 210 160 105 
Total con bono: 700</pre>
      <p class="texto-personalizado"><em>La tercera línea termina con un espacio después del 105, porque cada venta se imprime seguida de un espacio.</em></p>
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
        <button
          class="ec-btn ec-btn-primary"
          @click="analyzeCode"
          :disabled="isRetryDisabled"
        >
          Analizar Código
        </button>
        <br>

        <br>
        <p v-if="result" :class="resultClass">{{ result }}</p>
      </div>

      <br>
      

      <div>
        <div class="ec-acciones">
          <p v-if="!isFinishEnabled" class="ec-acciones-ayuda">Resuelve el código o agota tus intentos para avanzar a Generalización.</p>
          <button
            class="ec-btn ec-btn-secondary"
            :disabled="!isFinishEnabled"
            @click="finish"
          >
            Avanzar
            <span class="material-icons" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
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
        modulo: '7. Funciones',
        submodulo: '7.2 Funciones con parametros',
        ejercicio: 'Ejercicio 3',
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

int sumarVentas(int datos[], int tamano);
int buscarMayor(int datos[], int tamano);
void aplicarBono(int datos[], int tamano, int bono);

int main(void) {
    int ventas[5] = {120, 85, 200, 150, 95};

    printf("Total: %d\\n", sumarVentas(ventas, 5));
    printf("Mayor: %d\\n", buscarMayor(ventas, 5));

    aplicarBono(ventas, 5, 10);
    printf("Ventas con bono: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", ventas[i]);
    }
    printf("\\n");
    printf("Total con bono: %d\\n", sumarVentas(ventas, 5));

    return 0;
}

int sumarVentas(int datos[], int tamano) {
    int suma = 0;
    for (int i = 0; i < tamano; i++) {
        suma += datos[i];
    }
    return suma;
}

int buscarMayor(int datos[], int tamano) {
    int mayor = datos[0];
    for (int i = 1; i < tamano; i++) {
        if (datos[i] > mayor) {
            mayor = datos[i];
        }
    }
    return mayor;
}

void aplicarBono(int datos[], int tamano, int bono) {
    for (int i = 0; i < tamano; i++) {
        datos[i] += bono;
    }
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
      if (!this.isFinishEnabled) return;
      this.evaluacionAbstractionStore.evaluacion = this.evaluacion;
      router.push('/FCPGeneralizacion3').then(() => {
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
