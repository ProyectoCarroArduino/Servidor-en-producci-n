<template>
  <div id="user">
    <div class="card card-body mt-8, align-left, col-md-15">
      <h1 class="text-center">4. Variables y operaciones</h1>
      <h3>Ejemplo 1:</h3>
      <p class="texto-personalizado">Hacer un programa que calcule el área de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el área de un triángulo de base 12 cm y altura 8 cm (no usar fórmula de Herón).</p>
      <br>
      <h3>Descomposición:</h3>
      <div class="options-container">
        <p class="texto-personalizado">De las siguientes palabras, ¿cuál es la que define lo que el problema está solicitando?</p>
        <div v-for="(option, index) in options" :key="index" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            :id="`option${index}`"
            :value="option"
            v-model="selectedOption"
          >
          <label class="form-check-label" :for="`option${index}`">
            {{ option }}
          </label>
        </div>
      </div>

      <p class="texto-personalizado">Respuesta seleccionada: {{ selectedOption }}</p>
      <button @click="submitForm" class="btn btn-primary">Submit</button>
      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>

      <div class="options-container">
        <p class="texto-personalizado">Selecciona cuántos subproblemas hay en este problema y cuáles son:</p>
        <div v-for="(option, index) in optionsa" :key="index" class="form-check">
          <input
            class="form-check-input"
            type="radio"
            :id="`option${index}`"
            :value="option"
            v-model="selectedOptiona"
          >
          <label class="form-check-label" :for="`option${index}`">
            {{ option }}
          </label>
        </div>
      </div>

      <p class="texto-personalizado">Respuesta seleccionada: {{ selectedOptiona }}</p>
      <button @click="submitForma" class="btn btn-primary">Submit</button>
      <div v-if="errorMessagea" class="alert alert-danger mt-3" role="alert">
        {{ errorMessagea }}
      </div>
    <div>
    <br> 
    <p class="texto-personalizado">Organiza como crees que sería la jerarquia de los subproblemas: </p>
    <div 
      v-for="(item, index) in items"
      :key="index"
      class="draggable-container"
      :class="{ dragging: index === dragIndex }"
      @mousedown="startDrag(index, $event)"
      @touchstart="startDrag(index, $event)"
    >
      <div class="list" :style="{
        transition: index === dragIndex ? 'none' : dragTransition,
        position: index === dragIndex ? 'fixed' : 'relative',
        boxShadow: index === dragIndex ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none'}">
        {{ item }}
      </div>
    </div>
    <button @click="submitOrder" class="btn btn-primary">Enviar Orden</button>
    <div v-if="errorMessageDrag" class="alert alert-danger mt-3" role="alert">
        {{ errorMessageDrag }}
      </div>
    </div>
    <br>
    <div>
      <button class="bt-validate" @click="finish">Avanzar</button>
    </div>
  </div>
  <div class="align-left col-md-3">
  <div class="temas">
    <Menu />
  </div>
  </div>
</div>
</template>

<script lang="">
import router from '@/router'
import Menu from "../../components/Menu.vue";
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
        NavBar,
        Menu
    },

    data() {
        return {
            options: ["consultar", "hallar", "calcular", "plantear"],
            optionsa: ["3: calcular el área de un rectangulo, calcular el área de un trapecio y calcular el área de un cuadrado", 
                            "1: calcular el área de un rectángulo", 
                            "2: calcular el área de un rectángulo y un trapecio", 
                            "2: calcular el área de un rectángulo y un triángulo"],
            items: ["hallar el área de un triángulo", "hallar el área de un rectángulo", "Fin"],
            validOrder: ["hallar el área de un rectángulo", "hallar el área de un triángulo", "Fin"],
            selectedOption: null,
            selectedOptiona: null,
            errorMessage: null,
            errorMessagea: null,
            errorMessageDrag: null,
            dragging: false,
            dragIndex: null,
            initialPosition: { x: 0, y: 0 },
            offset: { x: 0, y: 0 },
            dragTransition: "none", 
            textoParaValidar: '',
            respuestaServidor: '',
            codigo: '',
            esTextoValido: false,
        };
    }, 

    methods: {
    submitForm() {
      this.errorMessage = null;

      if (this.selectedOption === 'calcular') {
        // Si la respuesta es correcta, imprime el mensaje
        this.errorMessage='Respuesta correcta';
      } else {
        // La respuesta no es correcta, puedes mostrar un mensaje o tomar alguna acción
        this.errorMessage='Vuelve a intentarlo!';
      }
    },

    submitForma() {
      this.errorMessagea = null;

      if (this.selectedOptiona === '2: calcular el área de un rectángulo y un triángulo') {
        // Si la respuesta es correcta, imprime el mensaje
        this.errorMessagea='Respuesta correcta';
      } else {
        // La respuesta no es correcta, puedes mostrar un mensaje o tomar alguna acción
        this.errorMessagea='Vuelve a intentarlo!';
      }
    },

    startDrag(index, event) {
      // Inicia el proceso de arrastrar
      this.dragging = true;
      this.dragIndex = index;
      this.initialPosition = { x: event.clientX, y: event.clientY };
      this.offset = { x: 0, y: 0 };

      // Agrega los listeners de eventos
      window.addEventListener('mousemove', this.handleDrag);
      window.addEventListener('touchmove', this.handleDrag, { passive: false });
      window.addEventListener('mouseup', this.stopDrag);
      window.addEventListener('touchend', this.stopDrag);
    },

    handleDrag(event) {
      if (this.dragging) {
        // Calcula el desplazamiento
        this.offset = {
          x: event.clientX - this.initialPosition.x,
          y: event.clientY - this.initialPosition.y,
        };

        // Mueve el elemento arrastrado
        this.dragTransition = "transform 0.1s ease"; 
        this.items.splice(
          this.dragIndex + Math.round(this.offset.y / 50),
          0,
          this.items.splice(this.dragIndex, 1)[0]
        );
      }
    },

    stopDrag() {
      // Detiene el proceso de arrastrar
      this.dragging = false;
      this.dragIndex = null;

      this.dragTransition = "none";

      // Remueve los listeners de eventos
      window.removeEventListener('mousemove', this.handleDrag);
      window.removeEventListener('touchmove', this.handleDrag);
      window.removeEventListener('mouseup', this.stopDrag);
      window.removeEventListener('touchend', this.stopDrag);
    },

    submitOrder() {
      this.errorMessageDrag = null;
      // Verificar si el orden actual es igual al orden válido
      const currentOrder = this.items.map(item => item);
      const isValid = this.validOrder.every((item, index) => item === currentOrder[index]);

      if (isValid) {
        this.errorMessageDrag = 'Respuesta correcta';
      } else {
        this.errorMessageDrag = 'Vuelve a intentarlo';
      }
    },

    validarTexto() {
      console.log('Código a enviar al servidor:', this.codigo);
      // Realiza una solicitud POST al servidor con el código del text area
      axios.post('http://localhost:5000/api/auth/analyze-code', {
        codigo: this.codigo
      })
      .then(response => {
        // Maneja la respuesta del servidor
        this.respuestaServidor = response.data;
      })
      .catch(error => {
        // Maneja los errores de la solicitud
        console.error('Error al enviar código al servidor:', error);
        if (error.response && error.response.data && error.response.data.error) {
            const errorMessage = error.response.data.error;
            // Traducción de los mensajes de error
            const translatedError = this.translateError(errorMessage);
            this.respuestaServidor = translatedError;
        } else {
            this.respuestaServidor = 'Error al enviar el código al servidor';
        }
      });
    },

    finish() {
      router.push('/algoritmo')
    },
  },
}
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

.options-container {
  margin-top: 30px; 
}

.draggable-container {
  display: flex;
  align-items: center;
}

.list {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: grab;
  user-select: none;
  background-color: #f0f0f0;
  transform: translate(0, 0);
}

.dragging {
  cursor: grabbing;
  transform: translate(0, 0);
}

.mensaje-error {
  color: red;
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

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}


</style>