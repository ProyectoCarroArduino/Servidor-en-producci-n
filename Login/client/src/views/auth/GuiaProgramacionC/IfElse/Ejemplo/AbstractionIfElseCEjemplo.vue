<template>
  <div id="layout-general">
    <main class="contenido">
        <h1 class="text-center">5. Estructuras de control y repetición</h1>
      <br>
      <br>
      <h3>Ejemplo:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que indique si una persona puede votar. Declare la variable entera edad con el valor 16. Con un if else: si edad es mayor o igual que 18, muestre Puede votar; si no, muestre Todavia no puede votar. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las variables declaradas al inicio de main con su valor fijo, llaves en todos los bloques y return 0; al final. Cada mensaje termina en \n y se escribe sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Todavia no puede votar</pre>
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
          <p v-if="!isFinishEnabled" class="ec-acciones-ayuda">Resuelve correctamente el código para avanzar a Generalización.</p>
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
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu,
  },

  props: {
    msg: String,
  },

  data() {
    return {
      isCorrect: false,
      code: '',
      result: '',
      resultClass: '',
      analizando: false,
    };
  },

  computed: {
    isRetryDisabled() {
      return this.analizando || !this.code.trim();
    },
    isFinishEnabled() {
      return this.isCorrect;
    },
  },

  methods: {
    async analyzeCode() {
      if (this.isRetryDisabled) return;
      this.analizando = true;
      this.result = '';
      this.isCorrect = false;
      const submittedCode = this.code;
      try {
        const response = await axios.post(import.meta.env.VITE_API_URI_ANALYZE, {
          code: submittedCode,
        });
        if (this.code !== submittedCode) return;
        this.isCorrect = !response.data.errors;
        this.result = this.isCorrect ? '¡Correcto!' : '¡Incorrecto!';
        this.resultClass = this.isCorrect ? 'success' : 'warning';
      } catch (error) {
        console.error('Error al analizar el código:', error);
        if (this.code === submittedCode) {
          this.result = 'No se pudo analizar el código. Inténtalo nuevamente.';
          this.resultClass = 'warning';
        }
      } finally {
        this.analizando = false;
      }
    },
    finish() {
      if (!this.isFinishEnabled) return;
      router.push('/IEEjGeneralizacion').then(() => window.scrollTo(0, 0));
    },
  },
  watch: {
    code() {
      this.isCorrect = false;
      this.result = '';
      this.resultClass = '';
    },
  },
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
