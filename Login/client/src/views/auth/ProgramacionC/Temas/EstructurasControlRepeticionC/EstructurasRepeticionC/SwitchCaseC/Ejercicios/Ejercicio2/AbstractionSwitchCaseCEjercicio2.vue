<template>
  <div id="layout-general">
    <main class="contenido">
        <h1 class="text-center">5.2 Switch case</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C  que simule el funcionamiento de un cajero automático. El usuario comenzará con un valor de <strong>$100.000</strong> pesos como saldo inicial. 
      El cajero debe poder <strong>mostrar, depositar y retirar</strong> dinero del saldo disponible, esta acción se debe ejecutar hasta que el cliente decida <strong>salir</strong> de este. 
      El cajero deberá validar si la cantidad que un cliente desea retirar es acorde con el <strong>saldo disponible</strong>, de lo contrario imprimir el mensaje: <strong>“Fondos insuficientes. Su saldo es:”</strong>.</p>
      <p><span style="font-weight: bold;">Nota:</span> El programa debe utilizar la instrucción <strong>switch case</strong> y el default debe contener <strong>break</strong>.</p>
      <p><span style="font-weight: bold;">Nota2:</span> El progrma <strong>debe imprimir</strong> el siguiente mensaje si se digita una opción que no es válida: <strong>"Opcion no valida. Intente de nuevo."</strong>.</p>
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
        ejercicio: 'Ejercicio 2',
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

int main() {
    
    int opcion = 0;
    float saldo = 100000; 
    float cantidad = 0.0; 

    
    
    while (opcion != 4) {
        
        printf("\n--- CAJERO AUTOMÁTICO ---\n");
        printf("1. Consultar saldo\n");
        printf("2. Depositar dinero\n");
        printf("3. Retirar dinero\n");
        printf("4. Salir\n");
        printf("Elija una opcion: ");
        scanf("%d", &opcion);

        
        switch (opcion) {
            case 1:
                printf("Su saldo actual es: $%.2f\n", saldo);
                break;

            case 2:
                printf("¿Cuanto dinero desea depositar?: $");
                scanf("%f", &cantidad);
                saldo = saldo + cantidad; 
                printf("Deposito exitoso. Nuevo saldo: $%.2f\n", saldo);
                break;

            case 3:
                printf("¿Cuanto dinero desea retirar?: $");
                scanf("%f", &cantidad);
                
                
                if (cantidad <= saldo) {
                    saldo = saldo - cantidad; 
                    printf("Retiro exitoso. Nuevo saldo: $%.2f", saldo);
                } else {
                    printf("Fondos insuficientes. Su saldo es: $%.2f", saldo);
                }
                break;

            case 4:
                printf("Gracias por usar el cajero automático. ¡Adiós!\n");
                break;

            default:
                printf("Opcion no valida. Intente de nuevo.\n");
                break;
        }
    }

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
      router.push('/GeneralizacionSwitchCaseCEjercicio1').then(() => {
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
