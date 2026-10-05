<template>
  <div id="layout-general">
    <main class="contenido">
        <h1 class="text-center">4. Variables y operaciones</h1>
      <br>
      <br>
      <h3>Ejemplo:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que calcule el <strong>área</strong> de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el <strong>área</strong> de un triángulo de base 12 cm y altura 8 cm.</p>
      <p><span style="font-weight: bold;">Nota:</span> <strong>(no usar fórmula de Herón)</strong>.</p>
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
        <button @click="analyzeCode" :disabled="isRetryDisabled">Analizar Código</button>
        <br>

        <br>
        <p v-if="result" :class="resultClass">{{ result }}</p>
      </div>

      <br>

      <div>
        <button
          class="bt-validate"

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
      router.push('/GeneralizacionVariablesOperacionesCEjemplo').then(() => window.scrollTo(0, 0));
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
