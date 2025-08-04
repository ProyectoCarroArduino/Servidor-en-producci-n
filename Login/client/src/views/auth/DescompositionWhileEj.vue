<template>
    <div id="user">
      <div class="card card-body mt-8 align-left col-md-15">
        <h1 class="text-center">5.4 Ciclo while</h1>
        <h3>Ejemplo 1:</h3>
        <br>
        <p class="texto-personalizado">
          Hacer un programa que <strong>imprima</strong> por consola los numeros del 1 al 10 utilizando la estructura del ciclo while.
        </p>
        <br>
        <h3>Descomposición:</h3>
        <br>
        <h4 class="texto-personalizado">Seleccione la imagen que representa la estructura <strong>while</strong> necesaria para resolver el problema:</h4>
        <br>
        <div class="figuras">
          <div
            v-for="figura in figuras"
            :key="figura.alt"
            class="figura"
            @click="manejarClick(figura.alt)"
          >
            <img :src="figura.src" :alt="figura.alt" />
          </div>
        </div>
        <div v-if="respuesta" class="respuesta">
          <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
          <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
        </div>
        <br>
        <br>
        <h4 class="texto-personalizado">Seleccione el valor que se debe asignar al contador y la condición que se va a evaluar como <strong>(condición booleana)</strong> para resolver el problema: </h4>
        <br>
        <div class="figuras">
          <div
            v-for="figura in figurasV"
            :key="figura.alt"
            class="figura"
            @click="manejarClickVar(figura.alt)"
          >
            <img :src="figura.src" :alt="figura.alt" />
          </div>
        </div>
        <div v-if="respuestaVar" class="respuesta">
          <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
          <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
        </div>
        <br>
        <div>
          <br>
          <br>
          <Expresion />
          <Sentencias />
        </div>
        <div>
          <br>
          <br>
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
  
  <script>
  import router from '@/router'
  import Menu from "../../components/Menu.vue";
  import Expresion from "../../components/ExpresionWhileEj.vue";
  import Sentencias from "../../components/SentenciasWhileEj.vue";
  import Figura1 from '@/assets/whileImages/while 1.png';
  import Figura2 from '@/assets/whileImages/while 2.png';
  import Figura3 from '@/assets/whileImages/while 3.png';
  import Figura4 from '@/assets/whileImages/while 4.png';
  import Figura5 from '@/assets/whileImages/while 5.png';
  import Figura6 from '@/assets/whileImages/while 6.png';
  import Figura7 from '@/assets/whileImages/while 7.png';
  import Figura8 from '@/assets/whileImages/while 8.png';
  
  export default {
    name: 'App',
  
    components: {
      Menu,
      Expresion,
      Sentencias,
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
          '¡Error! Selecciona la imagen que tenga sentido con lo solicitado, pero ten presente la teoria sobre el ciclo while y el uso de elementos que se suelen usar',
          '¡Error! Identifica la imagen correcta que cuenta con la estructura while necesaría',
          '¡Error! Intenta tener en cuenta que la estructura while debe de resolver el problema dado',
          '¡Error! Recuerda que debes de seleccionar la imagen que concuerde con la estructura while que resuelva el problema',
        ],
  
        respuestaVar: null,
        CorrectaVar: false,
        mensajeErrorVar: '',
        mensajesErrorVar: [
          '¡Error! El valor que se debe de asignar a la variable contador ayuda a resolver la condición',
          '¡Error! El valor de la variable contador y la condición no son correctas',
          '¡Error! Recuerda que el programa debe de imprimir los números del 1 al 10',
          '¡Error! La condición siempre tiene que tener una operación relacional y para este caso utiliza la variable que se inicializa',
        ],
  
      };
      
      },
  
    methods: {
      manejarClick(figura) {
        this.respuesta = figura;
        this.esCorrecta = figura === 'Figura 1';
        if (!this.esCorrecta) {
          this.mensajeError = this.obtenerMensajeError();
        }
      },
  
      obtenerMensajeError() {
        const randomIndex = Math.floor(Math.random() * this.mensajesError.length);
        return this.mensajesError[randomIndex];
      },
  
      manejarClickVar(figurasV) {
        this.respuestaVar = figurasV;
        this.CorrectaVar = figurasV === 'Figura 5';
        if (!this.CorrectaVar) {
          this.mensajeErrorVar = this.obtenerMensajeErrorVar();
        }
      },
  
      obtenerMensajeErrorVar() {
        const randomIndex = Math.floor(Math.random() * this.mensajesErrorVar.length);
        return this.mensajesErrorVar[randomIndex];
      },

      finish() {
        router.push('/algoritmoWhileEj').then(() => {
          window.scrollTo(0, 0);
        });
      },

    },
  
  
  };
  </script>
  
  <style scoped>
  #app {
    text-align: center;
  }
  .figuras {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px; /* Añade un espacio entre las figuras */
  }
  .figura {
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
    width: 250px; /* Ajusta el tamaño de la imagen */
    height: 250px; /* Ajusta el tamaño de la imagen */
    object-fit: cover; /* Asegura que la imagen mantenga su proporción dentro del contenedor */
  }
  .respuesta {
    margin-top: 20px;
  }
  
  .correcto {
    font-size: 20px;
    color: green;
  }
  
  .incorrecto {
    font-size: 20px;
    color: red;
  }
  
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
  
  </style>