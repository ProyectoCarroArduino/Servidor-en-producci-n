<template>
    <div id="user">
      <div class="card card-body mt-8 align-left col-md-15">
        <h1 class="text-center">7.1 Funciones (sin parámetros)</h1>
        <h3>Ejemplo 2:</h3>
        <br>
        <p class="texto-personalizado">
          Hacer un programa que <strong>imprima</strong> el siguiente mensaje: "Esta es la prueba de laboratorio número: 48". 
          El programa deberá usar funciones, de tal forma que el main llame a la función <strong>(laboratorio)</strong> e imrprima
          el mensaje que se solicita.
        </p>
        <p><span style="font-weight: bold;">Nota:</span> Hacerlo de tal forma que la función <strong>(laboratorio)</strong> sea una función <strong>(sin parámetros)</strong>.</p>
        <br>
        <h3>Descomposición:</h3>
        <br>
        <h4 class="texto-personalizado">De acuerdo a la teroria sobre funciones <strong>(sin parámetros)</strong> seleccione la imagen que representa la función <strong>(prototipo)</strong>
        para este ejemplo: </h4>
        <br>
        <div class="figuras">
          <div
            v-for="funcion in funciones"
            :key="funcion.alt"
            class="figura"
            @click="manejarClick(funcion.alt)"
          >
            <img :src="funcion.src" :alt="funcion.alt" />
          </div>
        </div>
        <div v-if="respuesta" class="respuesta">
          <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
          <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
        </div>
        <br>
        <br>
        <h4 class="texto-personalizado">De acuerdo a la teoria sobre funciones <strong>(sin parámetros)</strong> seleccione la imagen que representa la declaración de la función <strong>(laboratorio)</strong> para el ejercicio dado: </h4>
        <br>
        <div class="figuras">
          <div
            v-for="funcion in funcionesV"
            :key="funcion.alt"
            class="figura"
            @click="manejarClickVar(funcion.alt)"
          >
            <img :src="funcion.src" :alt="funcion.alt" />
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
          <Llamada />
          <Estructura />
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
  import Llamada from "../../components/LlamadaFunction.vue";
  import Estructura from "../../components/EstructuraFunction.vue";
  import Funcion1 from '@/assets/FuncionesSinparImages/Funciones 1.png';
  import Funcion2 from '@/assets/FuncionesSinparImages/Funciones 2.png';
  import Funcion3 from '@/assets/FuncionesSinparImages/Funciones 3.png';
  import Funcion4 from '@/assets/FuncionesSinparImages/Funciones 4.png';
  import Funcion5 from '@/assets/FuncionesSinparImages/Funciones 5.png';
  import Funcion6 from '@/assets/FuncionesSinparImages/Funciones 6.png';
  import Funcion7 from '@/assets/FuncionesSinparImages/Funciones 7.png';
  import Funcion8 from '@/assets/FuncionesSinparImages/Funciones 8.png';
  
  export default {
    name: 'App',
  
    components: {
      Menu,
      Llamada,
      Estructura,
    },
  
    data() {
      return {
        funciones: [
          { src: Funcion1, alt: 'Funcion 1' },
          { src: Funcion2, alt: 'Funcion 2' },
          { src: Funcion3, alt: 'Funcion 3' },
          { src: Funcion4, alt: 'Funcion 4' },
        ].sort(() => Math.random() - 0.5),
  
        funcionesV: [
          { src: Funcion5, alt: 'Funcion 5' },
          { src: Funcion6, alt: 'Funcion 6' },
          { src: Funcion7, alt: 'Funcion 7' },
          { src: Funcion8, alt: 'Funcion 8' },
        ].sort(() => Math.random() - 0.5),
  
  
        respuesta: null,
        esCorrecta: false,
        mensajeError: '',
        mensajesError: [
          '¡Error! Selecciona la imagen que tenga sentido con lo solicitado, pero ten presente la teoria sobre: funciones (sin parámetros) en la parte de estructura de una función',
          '¡Error! Identifica la imagen correcta que tiene la estructura necesaría',
          '¡Error! Intenta tener en cuenta que la imagen seleccionada debe de resolver el problema dado',
          '¡Error! Recuerda que debes de seleccionar la imagen que concuerde con la función prototipo que resuelva el problema',
        ],
  
        respuestaVar: null,
        CorrectaVar: false,
        mensajeErrorVar: '',
        mensajesErrorVar: [
          '¡Error! Recuerda que debes de seleccionar la imagen que tenga la declaración de la función (laboratorio) de forma correcta',
          '¡Error! La forma en la que estas haciendo la declaración de la función (laboratorio) no es correcta',
          '¡Error! Intenta ir a revisar la teoria sobre la declaración de una función e intentalo de nuevo',
          '¡Error! Ten en cuenta que la declaración de la función (laboratorio) para este caso es una función (sin parámetros)',
        ],
  
      };
      
      },
  
    methods: {
      manejarClick(funcion) {
        this.respuesta = funcion;
        this.esCorrecta = funcion === 'Funcion 1';
        if (!this.esCorrecta) {
          this.mensajeError = this.obtenerMensajeError();
        }
      },
  
      obtenerMensajeError() {
        const randomIndex = Math.floor(Math.random() * this.mensajesError.length);
        return this.mensajesError[randomIndex];
      },
  
      manejarClickVar(funcionesV) {
        this.respuestaVar = funcionesV;
        this.CorrectaVar = funcionesV === 'Funcion 5';
        if (!this.CorrectaVar) {
          this.mensajeErrorVar = this.obtenerMensajeErrorVar();
        }
      },
  
      obtenerMensajeErrorVar() {
        const randomIndex = Math.floor(Math.random() * this.mensajesErrorVar.length);
        return this.mensajesErrorVar[randomIndex];
      },

      finish() {
        router.push('/algoritmoFuncionesSinparEj').then(() => {
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