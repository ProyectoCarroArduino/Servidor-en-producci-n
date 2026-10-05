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
      <h3>Descomposición:</h3>
      <br>
      <h4 class="texto-personalizado">¿Cuál de las siguientes imágenes muestra lo que aparece en pantalla al ejecutar el programa con edad = 16?</h4>
      <br>
      <div class="figuras">
        <div
          v-for="(figura, index) in figuras"
          :key="figura.alt"
          class="figura"
          @click="manejarClick(figura.alt, index)"
        > 
        <div
          v-if="totalClicks > 0 && mostrarContador === index"
          class="contador-imagen"
        >
          {{ maxClicks - totalClicks }}
        </div>
          <img :src="figura.src" :alt="figura.alt" 
          :style="{ 
              pointerEvents: isBlocked ? 'none' : 'auto', 
              opacity: isBlocked ? 0.5 : 1 
          }"/>
        </div>
      </div>
      <div v-if="respuesta" class="respuesta">
        <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
      </div>
      <div v-if="evaluacion !== null" class="correcto">
        <p class="alert alert-info">Tu evaluación es: {{ evaluacion }}</p>
      </div>
      <br>
      <br>
      <h4 class="texto-personalizado">¿Cuál imagen muestra la condición correcta para saber si la persona puede votar?</h4>
      <br>
      <div class="figuras">
        <div
          v-for="(figura, index) in figurasV"
          :key="figura.alt"
          class="figura"
          @click="manejarClickVar(figura.alt, index)"
        >
        <div
          v-if="totalClicksV > 0 && mostrarContadorV === index"
          class="contador-imagen"
        >
          {{ maxClicksV - totalClicksV }}
        </div>
          <img :src="figura.src" :alt="figura.alt" 
          :style="{ 
              pointerEvents: isBlockedV ? 'none' : 'auto', 
              opacity: isBlockedV ? 0.5 : 1 
          }"/>
        </div>
      </div>
      <div v-if="respuestaVar" class="respuesta">
        <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
      </div>
      <div v-if="evaluacionV !== null" class="correcto">
        <p class="alert alert-info">Tu evaluación es: {{ evaluacionV }}</p>
      </div>
      <br>
      <div>
        <br>
        <br>
        <DragAndDrop1Checker @evaluacionDrapAndDrop1Checker="actualizarEvaluacionDragAndDrop1Checker"/>
        <DragAndDrop2Checker @evaluacionDragAndDrop2Checker="actualizarEvaluacionDragAndDrop2Checker"/>
      </div>
      <div>
        <br>
        <br>
      </div>
      <br>
      <div v-if="puedeAvanzar" class="evaluacion-final">
        <p class="alert alert-primary">
          Evaluación total: {{ evaluacionTotal.toFixed(1) }}
        </p>
      </div>
      <button class="bt-validate" 
        @click="finish"
        :disabled="!puedeAvanzar">
        Avanzar
      </button>
    </main>
    <aside class="menu-lateral">
      <div>
        <Menu />
      </div>
    </aside>
  </div>
</template>

<script>
import router from '@/router'
import Menu from "@/components/Menu.vue";
import DragAndDrop1Checker from "@/components/GuiaProgramacionC/IfElse/Ejemplo/DragAndDrop1CheckerIfElseCEjemplo.vue";
import DragAndDrop2Checker from "@/components/GuiaProgramacionC/IfElse/Ejemplo/DragAndDrop2CheckerIfElseCEjemplo.vue";
import Figura1 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S1_Correcta.png';
import Figura2 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S1_Inc1.png';
import Figura3 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S1_Inc2.png';
import Figura4 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S1_Inc3.png';
import Figura5 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S2_Correcta.png';
import Figura6 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S2_Inc1.png';
import Figura7 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S2_Inc2.png';
import Figura8 from '@/assets/ImagenesIfElse/Ejemplo_Desc_S2_Inc3.png';

export default {
  name: 'App',

  components: {
    Menu,
    DragAndDrop1Checker,
    DragAndDrop2Checker,
  },

  data() {
    return {
      figuras: [
        { src: Figura1, alt: 'Figura 1' },
        { src: Figura2, alt: 'Figura 2' },
        { src: Figura3, alt: 'Figura 3' },
        { src: Figura4, alt: 'Figura 4' },
      ].sort(() => Math.random() - 0.5),

      figurasV: [
        { src: Figura5, alt: 'Figura 5' },
        { src: Figura6, alt: 'Figura 6' },
        { src: Figura7, alt: 'Figura 7' },
        { src: Figura8, alt: 'Figura 8' },
      ].sort(() => Math.random() - 0.5),


      respuesta: null,
      esCorrecta: false,
      mensajeError: '',
      mensajesError: [
        "¡Error! Compara 16 con 18: ¿la condición es verdadera o falsa?",
        "¡Error! En un if else siempre se ejecuta uno de los dos bloques, nunca ambos",
        "¡Error! Si la condición es falsa, se ejecuta el bloque del else",
        "¡Error! Recuerda que con if else el programa siempre muestra un mensaje",
      ],
      
      respuestaCorrecta: 'Figura 1',
      respuestaVar: null,
      CorrectaVar: false,
      mensajeErrorVar: '',
      mensajesErrorVar: [
        "¡Error! Con 18 años ya se puede votar: revisa si el operador incluye el 18",
        "¡Error! Revisa cómo se escribe el operador mayor o igual que",
        "¡Error! La condición del if va siempre entre paréntesis",
        "¡Error! Repasa la tabla de operadores relacionales de la teoría",
      ],

      respuestaCorrectaV: 'Figura 5',
      totalClicks: 0,
      totalClicksV: 0,
      maxClicks: 3,
      maxClicksV: 3,
      mostrarContador: null,
      mostrarContadorV: null,
      isBlocked: false,
      isBlockedV: false,
      evaluacion: null,
      evaluacionV: null,
      evaluacionDragAndDrop1Checker: null,
      evaluacionDragAndDrop2Checker: null,
    };
    
    },

    computed: {
    // Propiedad computada para habilitar o deshabilitar el botón
    puedeAvanzar() {
      return (
        this.evaluacion !== null &&
        this.evaluacionV !== null &&
        this.evaluacionDragAndDrop1Checker !== null && // Incluye la evaluación de Llamada
        this.evaluacionDragAndDrop2Checker !== null
      );
    },

    evaluacionTotal() {
      const total =
        (this.evaluacion ?? 0) +
        (this.evaluacionV ?? 0) +
        (this.evaluacionDragAndDrop1Checker ?? 0) +
        (this.evaluacionDragAndDrop2Checker ?? 0);

      return total / 4; // Dividimos entre el total de actividades
    },
  },

  methods: {
    manejarClick(funcion, index) {
      if (this.isBlocked || this.totalClicks >= this.maxClicks) {
        return; // Bloquea clics adicionales si se alcanzó el límite o la respuesta es correcta
      }

      const figuraSeleccionada = this.figuras[index].alt;
      
      if (figuraSeleccionada === this.respuestaCorrecta) {
        this.isBlocked = true; // Bloquea clics adicionales
        this.calcularEvaluacion();
        this.mostrarContador = index; // Muestra el contador en la imagen seleccionada
        this.respuesta = figura;
        this.esCorrecta = true;
        return; // Termina aquí para evitar incrementar el contador
      }

      this.totalClicks++; // Incrementa el contador global
      this.mostrarContador = index; // Muestra el contador en la imagen seleccionada
      this.respuesta = figura;
      this.esCorrecta = figura === 'Figura 1';

      if (this.totalClicks >= this.maxClicks) {
        this.isBlocked = true; 
        this.evaluacion = 1; // Asegura que se evalúe como 0
        return;
      }

      if (!this.esCorrecta) {
        this.mensajeError = this.obtenerMensajeError();
      }
    },

    calcularEvaluacion() {
      if (this.totalClicks === 0) {
        this.evaluacion = 5;
      } else if (this.totalClicks === 1) {
        this.evaluacion = 4;
      } else if (this.totalClicks === 2) {
        this.evaluacion = 3;
      } 
    },

    obtenerMensajeError() {
      const randomIndex = Math.floor(Math.random() * this.mensajesError.length);
      return this.mensajesError[randomIndex];
    },

    manejarClickVar(figurasV, index) {
      if (this.isBlockedV || this.totalClicksV >= this.maxClicksV) {
        return; // Bloquea clics adicionales si se alcanzó el límite o la respuesta es correcta
      }

      const figuraSeleccionada = this.figurasV[index].alt;
      
      if (figuraSeleccionada === this.respuestaCorrectaV) {
        this.isBlockedV = true; // Bloquea clics adicionales
        this.calcularEvaluacionVar();
        this.mostrarContadorV = index; // Muestra el contador en la imagen seleccionada
        this.respuestaVar = figurasV;
        this.CorrectaVar = true;
        return; // Termina aquí para evitar incrementar el contador
      }

      this.totalClicksV++; // Incrementa el contador global
      this.mostrarContadorV = index; // Muestra el contador en la imagen seleccionada
      this.respuestaVar = figurasV;
      this.CorrectaVar = figurasV === 'Figura 5';

      if (this.totalClicksV >= this.maxClicksV) {
        this.isBlockedV = true; 
        this.evaluacionV = 1; // Asegura que se evalúe como 0
        return;
      }

      if (!this.CorrectaVar) {
        this.mensajeErrorVar = this.obtenerMensajeErrorVar();
      }
    },

    calcularEvaluacionVar() {
      if (this.totalClicksV === 0) {
        this.evaluacionV = 5;
      } else if (this.totalClicksV === 1) {
        this.evaluacionV = 4;
      } else if (this.totalClicksV === 2) {
        this.evaluacionV = 3;
      } 
    },

    obtenerMensajeErrorVar() {
      const randomIndex = Math.floor(Math.random() * this.mensajesErrorVar.length);
      return this.mensajesErrorVar[randomIndex];
    },

    actualizarEvaluacionDragAndDrop1Checker(evaluacion) {
      this.evaluacionDragAndDrop1Checker = evaluacion;
    },

    actualizarEvaluacionDragAndDrop2Checker(evaluacion) {
      this.evaluacionDragAndDrop2Checker = evaluacion;
    },

    finish() {
      router.push('/IEEjAlgoritmo').then(() => {
        window.scrollTo(0, 0);
      });
    },

  },


};
</script>

<style scoped>

.figuras {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* Añade un espacio entre las figuras */
}

.figura {
  position: relative;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  border: 2px solid #ccc; /* Añade un borde para distinguir cada figura */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Asegura que la imagen no sobresalga del contenedor */
  transition: transform 0.2s; /* Añade una transición para el efecto de agrandamiento */
}

.figura:hover {
  transform: scale(1.1); /* Agranda la imagen al pasar el cursor sobre ella */
}

.figura img {
  width: 350px; /* Ajusta el tamaño de la imagen */
  height: 220px; /* Ajusta el tamaño de la imagen */
  object-fit: contain; /* Muestra la imagen completa (con cover se recortaba el texto) */
  background-color: white;
}

.respuesta {
  margin-top: 20px;
}

.contador-imagen {
position: absolute;
top: 10px;
left: 10px;
background-color: rgba(0, 0, 0, 0.7);
color: white;
font-size: 14px;
padding: 5px 10px;
border-radius: 5px;
}

.correcto {
  font-size: 20px;
  color: green;
}

.incorrecto {
  font-size: 20px;
  color: red;
}

.card {
  max-width: 100%;
  margin: auto;
  padding: 20px;
}

.texto-personalizado {
  font-family: Arial, sans-serif; /* Tipo de letra */
  font-size: 18px; /* Tamaño de fuente */
  text-align: justify; /* Alineación justificada */
}

.temas {
  position: fixed;
  margin-top: -245px;
}

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

.evaluacion-final {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

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

.align-left {
  text-align: left; /* Alinea el contenido a la izquierda */
}

.square-card {
  width: 330px; /* Define el ancho deseado de la tarjeta */
  margin-top: 0px;
  overflow: hidden; /* Evita que el contenido se desborde */
}

.centrada {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 35%;
}

.centrada2 {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 25%;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}

</style>