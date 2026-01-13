<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">7.1 Funciones (sin parámetros)</h1>
            <br>
            <h3>Ejemplo 1:</h3>
            <br>
            <p class="texto-personalizado">
            Hacer un programa que <strong>imprima</strong> el siguiente mensaje: "Esta es la prueba de laboratorio número: 48". 
            El programa deberá usar funciones, de tal forma que el main llame a la función <strong>(laboratorio)</strong> e imrprima
            el mensaje que se solicita.
            </p>
            <br>
            <h3>Abstracción:</h3>
            <br>
            <div class="hello">
              <h1>{{ msg }}</h1>
              <textarea v-model="code" placeholder="Escribe tu código aquí"></textarea>
              <br>
              <br>
              <button @click="analyzeCode"
              :disabled="isRetryDisabled">
              Analizar Código
              </button>
              <br>
              <br>
              <p v-if="attempts > 0 && !isCorrect" class="contador">
                intentos restantes: {{ maxAttempts - attempts }}
              </p>
              <br>
              <p v-if="result" :class="resultClass">{{ result }}</p>
            </div>
            <br>
            <p v-if="isCorrect || attempts >= maxAttempts" class="correcto alert alert-success mt-3">
              Tu evaluación final es: {{ evaluacion }}
            </p>
            <div>
              <button 
              class="bt-validate" 
              v-if="isCorrect || attempts === maxAttempts" 
              :disabled="!isFinishEnabled"
              @click="finish">
              Avanzar
              </button>
            </div>
        </div>
        <div class="align-left col-md-3">
            <div class="temas">
                <Menu />
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import Menu from "../../components/Menu.vue";

export default {
    components: {
        Menu
    },

    props: {
        msg: String
    },

    data() {
        return {
            attempts: 0,
            maxAttempts : 3,
            evaluacion : null,
            isCorrect : false,
            code: '', // Código ingresado por el usuario
            result: '', // Mensaje de validación
            resultClass: '', // Estilo del mensaje
            correctCode: `#include <stdio.h>

void laboratorio();

int main() {
    laboratorio();
    return 0;
}

void laboratorio() {
    printf("Esta es la prueba de laboratorio número: 48\\n");
}` // Código esperado
        };
    },

    computed: {
  
        isRetryDisabled() {
          // El botón se desactiva si la respuesta es correcta o los intentos disponibles se agotaron
          return this.isCorrect || this.attempts >= this.maxAttempts;
        },

        isFinishEnabled() {
          // El botón de finalizar está disponible si la respuesta es correcta o se acaban los intentos
          return this.isCorrect || this.attempts >= this.maxAttempts;
        },
      },

    methods: {
        
      analyzeCode() {

      if(this.isCorrect === true || this.attempts >= this.maxAttempts){
          return;
      }

      this.attempts++;

      // Normalizamos espacios y saltos de línea para comparación
      const userCode = this.code.replace(/\s+/g, ' ').trim();
      const correctCode = this.correctCode.replace(/\s+/g, ' ').trim();

      // Variable para rastrear errores
      let localError = "";

      if (userCode !== correctCode) {
        localError =
          "El código ingresado no coincide con la solución esperada. Revisa la sintaxis, espacios y elimine cualquier comentario que haya: ";
      }

      // Realizamos el análisis con el servidor
      axios
        .post("http://localhost:5000/api/auth/analyze", { code: this.code })
        .then((response) => {
          let analyzerError = "";

          if (response.data.errors) {
            analyzerError = response.data.errors;
          }

          // Combinar mensajes de error
          if (localError || analyzerError) {
            this.result = [
              localError,
              analyzerError,
            ]
              .filter(Boolean) // Elimina mensajes vacíos
              .join("\n");
            this.resultClass = "warning";
          } else {
            // Sin errores, el código es válido
            this.result = "¡El código es correcto!";
            this.resultClass = "success";
            this.isCorrect = true;
          }

          this.calcularEvaluacion();

        })
        .catch((error) => {
          console.error("Error al analizar el código:", error);
          this.result =
            "Ha ocurrido un error al analizar el código. Inténtalo nuevamente.";
          this.resultClass = "warning";
        });
        
        this.calcularEvaluacion();
      },


      calcularEvaluacion() {
      if (this.isCorrect === true) {
        // Calcular evaluación solo si la respuesta es correcta
        if (this.attempts === 1) {
          this.evaluacion = 5;
        } else if (this.attempts === 2) {
          this.evaluacion = 4;
        } else if (this.attempts === 3) {
          this.evaluacion = 3;
        }
      } else if (this.attempts === this.maxAttempts) {
        // Asignar calificación mínima al alcanzar intentos máximos sin éxito
        this.evaluacion = 1;
      }
      },

      finish() {
          router.push('/generalizacionFuncionesSinparEj');
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
