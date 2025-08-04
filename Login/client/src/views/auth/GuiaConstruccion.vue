<template>
    <div id="user">
      <div class="card card-body mt-8, align-left, col-md-15">
        <!--<h1 class="text-center">Programación en C</h1>-->
        <h1 class="text-center">Guía construcción carro Arduino</h1>
        <br>
        <br>
        <h2>Materiales:</h2>
        <br>
        <ul>
          <li><p class="texto-personalizado"> <strong>Placa Arduino UNO</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Chasis carro Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Base en 3D para placa Arduino UNO</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Base en 3D para módulo L298N</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Cuatro soportes para motorredcutor en 3D</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Carcasa en 3D</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Tapa en acrílico transparente</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Cuatro ruedas para motorredcutor</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Cuatro motorredcutores TT de doble eje</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Módulo controlador de motores L298N o Puente H</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Módulo Bluetooth HC-05</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Interruptor ON/OFF de cuatro pines</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Porta pilas para la alimentación de la placa de Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Tres pilas de 3.7V</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Cables de teléfono, tuercas y tornillos</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Una bornera macho</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Una bornera hembra</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Cables jumper macho hembra</strong></p></li>
        </ul>
        <br>
        <p class="texto-personalizado">Algunos otros materiales de uso general como destornilladores, alicates, pinzas, bisturí, corta frios, cautín tipo lápiz, etc también son necesarios. 
        Al principio de cada paso se menciona qué materiales son necesarios para el desarrollo de este.</p>
        <p><span style="font-weight: bold;">Nota:</span> Los materiales que están de color rojo se adquieren en una tienda electrónica de confianza, y algunos otros también se pueden adquirir en internet. 
        Es necesario contar con los materiales correctos para poder seguir la guía detalladamente, de no ser así el proceso puede ser difícil y en algunos pasos podría obstruir el avance.</p>
        <p class="texto-personalizado">Nombre y número de contacto de la tienda especializada en electrónica en donde se adquirieron los materiales necesarios señalados en rojo: <strong>Milton Ojeda 3005527396</strong>.</p>
        <div>
          <button class="bt-validate" @click="finish">Avanzar</button>
        </div>
      </div>
      <div class="col-md-3">
        <div class="temas">
          <MenuCarro />
        </div>
      </div>
  </div>
  </template>
  
  <script>
  import router from '@/router'
  import MenuCarro from "../../components/MenuCarro.vue";
  import NavBar from '@/components/NavBar.vue';
  export default {
      components: {
          NavBar,
          MenuCarro
      },
  
      methods: {
        finish() {
        router.push('/ConectarCablesTeoria')
      },
      },
  
  };
  </script>
  
  <style scoped>
  
  #user {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }
  
  .card {
    max-width: 100%;
    margin: auto;
  }
  
  .align-left {
    text-align: left; /* Alinea el contenido a la izquierda */
  }
  
  .square-card {
    width: 330px; /* Define el ancho deseado de la tarjeta */
    margin-top: 0px;
    overflow: hidden; /* Evita que el contenido se desborde */
  }
  
  .texto-personalizado {
      font-family: Arial, sans-serif; /* Tipo de letra */
      font-size: 18px; /* Tamaño de fuente */
      text-align: justify; /* Alineación justificada */
  }
  
  .centrada {
      display: block;
      margin: 0 auto; /* Esto centra horizontalmente la imagen */
      max-width: 80%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
      height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
  }
  
  .temas {
    position: sticky;
    margin-top: -245px;
  }
  
  .letras {
    font-size: 22px;
    height: 25px;
    font-weight: bold;
    color: #16161696;
  }
  
  .bt-validate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
  }
  
  </style>