<template>
  <div id="user">
    <div class="card card-body mt-8, align-left, col-md-15">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 3. Montar puente H (módulo L298N) y conectarlo al Arduino UNO</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son el puente H o más conocido como módulo L298N, cables jumper de tipo macho hembra y la placa Arduino UNO.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden al <strong>montaje</strong> de un 
        módulo L298N a la placa Arduino UNO, y para la construcción del carro <strong>solo se necesita hacer el montaje</strong> de un solo módulo L298N, es decir, que 
        el paso a paso que se va a explicar a continuación <strong>se debe</strong> repetir solo una vez.</p> 
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarModuloL298N/ModuloL298N.png" alt="ModuloL298N">
          <p class="texto">Módulo Puente H (módulo L298N)</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ArduinoUNO.png" alt="ArduinoUNO">
          <p class="texto">Placa Arduino UNO</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/CablesJumperMH.png" alt="CablesJumperMH">
          <p class="texto">Cables jumper tipo macho hembra</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Lo primero que se debe de hacer es <strong>tomar el módulo L298N</strong> y conectarle a sus pines y puertos cables jumper de tipo macho hembra, pero se debe de tener en cuenta que <strong>no todos los pines</strong> se van a cablear. 
        Por lo tanto, se hará una breve introducción al puente H o módulo L298N que cuenta con los siguientes pines:</p>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Pines de Entrada (IN1, IN2, IN3, IN4):</strong> Estos pines se utilizan para controlar la dirección de los motores.</p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>IN1 e IN2:</strong> Controlan el sentido de giro del motor.</p></li>
                <li><p class="texto-personalizado"> <strong>IN3 e IN4:</strong> Controlan el sentido de giro del motor.</p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Pines de Salida (OUT1, OUT2, OUT3, OUT4):</strong> Estos pines proporcionan la energía para mover los motores. La polaridad de las conexiones determina la dirección de giro de los motores.</p></li>             
          <li><p class="texto-personalizado"> <strong>Pines de Control de Velocidad (ENA, ENB):</strong> Se utilizan para controlar la velocidad de los motores mediante señales PWM (modulación por ancho de pulsos). 
            Si conectas estos pines a salidas PWM de un microcontrolador como Arduino, puedes variar la velocidad de los motores.</p></li>             
          <li><p class="texto-personalizado"> <strong>Pines de Alimentación (VCC y GND):</strong></p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>VCC:</strong> Conecta la fuente de alimentación del módulo (3V a 3,5V, dependiendo de la configuración del jumper regulador).</p></li>
                <li><p class="texto-personalizado"> <strong>GND:</strong> Conecta a tierra.</p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Pines de Entrada de 5V (5V):</strong> Este pin proporciona una salida de 5V para alimentar otros módulos si se utiliza el jumper regulador.</p></li>              
          <li><p class="texto-personalizado"> <strong>Pines de Entrada de 12V (12V):</strong> Este pin se utiliza para alimentar la parte lógica del driver si no se utiliza el jumper regulador.</p></li>                
      </ul>
      <br>
      <img class="centrada" src="@/assets/ImagenesMontarModuloL298N/PinesModuloL298N.png" alt="PinesModuloL298N">
      <br> 
      <br>
      <p class="texto-personalizado"> <strong>Como en el anterior paso se hizo hincapié</strong> en los pines que se encuentran en una placa Arduino UNO y <strong>qué funciones tienen</strong> cada uno, en este paso <strong>no se volverá a mencionar</strong> esa teoría. 
        Sin embargo, se debe tener en cuenta que el módulo L298N <strong>también necesita ir conectado</strong> a la placa Arduino UNO. Para ello, los pines del puente H que deben de ir cableados son de dos tipos: <strong>pines de entrada (IN1, IN2, IN3, IN4)</strong>  
        y <strong>pin de alimentación (GND).</strong>.</p>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesMontarModuloL298N/ConectarCablesModuloL298N.png" alt="ConectarCablesModuloL298N">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El color en los pines de la imagen<strong>representa el color del cable que se le va a asignar a cada pin</strong>. Es recomendable seguir este orden, pero en caso de que no se haga, 
      tener en cuenta que el pin <strong>(GND)</strong> debe ser <strong>negro o azul oscuro</strong>.</p>
      <br>
      <br>
      <p class="texto-personalizado"> Una vez establecidos los colores para cada uno de los cables <strong>se procederá a conectarlos</strong>, se tomará un cable jumper tipo macho hembra y <strong>se hará la conexión del pin hembra</strong>, 
       es decir, el que <strong>no tiene una aguja</strong> a cada pin del puente H.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesMontarModuloL298N/ConectarPines.png" alt="ConectarPines">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesMontarModuloL298N/CableJumperPinesL298N.png" alt="ableJumperPinesL298N">
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Cuando se hayan hecho todas las conexiones de todos los cables a los pines del módulo L298N debe quedar de la siguiente manera:</p>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesMontarModuloL298N/ModuloL298NCableado.png" alt="ModuloL298NCableado"> 
      <br>
      <br>
      <p class="texto-personalizado">Los pines a los que se van a conectar los cables en la placa <strong>Arduino UNO</strong> serán:</p>  
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>IN1 –-> al pin digital 12 del Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>IN2 –-> al pin digital 9 del Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>IN3 –-> al pin digital 13 del Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>IN4 –-> al pin digital 8 del Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>GND –-> al pin GND del Arduino</strong></p></li>
      </ul>
      <br>
      <h2>Esquema de los pines a los que se van a conectar los cables:</h2>
      <br>
      <img class="centradacuatro" src="@/assets/ImagenesMontarModuloL298N/SimulacionFritzingConexion.png" alt="SimulacionFritzingConexion">
      <br>
      <br>
      <p class="texto-personalizado">Para la conexión del pin GND del módulo L298N al pin GND de la placa Arduino se recomienda <strong>usar un cable jumper de color negro o azul oscuro</strong>, 
        además, <strong>se necesita cortar</strong> el extremo del cable en donde <strong>no se encuentra el pin macho</strong>, posteriormente se debe <strong>quitar la cobertura</strong> 
        de este con la ayuda de los alicates o las pinzas.</p>
      <br>   
      <div class="contenedordosV1">
        <div class="imagen-item-dosV1">
          <img src="@/assets/ImagenesMontarModuloL298N/CortarPinHembra.png" alt="CortarPinHembra">
        </div>
        <div class="imagen-item-dosV1">
          <img src="@/assets/ImagenesMontarModuloL298N/CableCortado.png" alt="CableCortado">
        </div>
      </div>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Tener mucho cuidado de no dañar los pequeños cables internos de cobre.</p>
      <br>
      <p class="texto-personalizado">Lo siguiente será <strong>enrollar esos cables pequeños</strong>, después se van a conectar al pin GND del módulo L298N, lo que significa que <strong>se debe desatornillar este pin e introducir</strong> 
       el cable dentro y luego <strong>volver a atornillar</strong> para evitar fallos. </p>
      <br>
      <br>
      <div class="contenedordosV2">
        <div class="imagen-item-dosV2">
          <img src="@/assets/ImagenesMontarModuloL298N/DesatornillarPinGND.png" alt="DesatornillarPinGND">
        </div>
        <div class="imagen-item-dosV2">
          <img src="@/assets/ImagenesMontarModuloL298N/PinGNDCableado.png" alt="PinGNDCableado">
        </div>
      </div>
      <br>
      <br>
      <br>
      <p class="texto-personalizado">Ya para finalizar se conecta la parte del cable que tiene pin a uno de los <strong>dos pines GND</strong> de la placa Arduino.</p> 
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarModuloL298N/ModuloL298N.png" alt="ModuloL298N">
          <p class="texto">Módulo Puente H (módulo L298N)</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ArduinoUNO.png" alt="ArduinoUNO">
          <p class="texto">Placa Arduino UNO</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/CablesJumperMH.png" alt="CablesJumperMH">
          <p class="texto">Cables jumper tipo macho hembra</p>
        </div>
      </div>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El pin GND del Arduino se <strong>debe desconectar momentáneamente</strong> en la (Fase de montaje del circuito en el chasis) 
      para <strong>evitar que los cables se dañen</strong> cuando se esté desplazando el circuito al chasis.</p>
      <br>
      <br>  
      <h2>Video del paso:</h2>
      <br>
      <br>
      <div class="video-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/X9DwB9A9yVg?si=YYn9tT-SRyhXB3gC" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
      </div>
      <br>
      <br>
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
import router from '@/router';
import MenuCarro from "@/components/MenuCarro.vue";
import NavBar from '@/components/NavBar.vue';
import Moto from '@/assets/imagenesCarro/Moto.png';
export default {
    components: {
        NavBar,
        MenuCarro
    },

    data() {
        return {
            Moto // Agregar la imagen a `data()`
        };
    },

    methods: {
    finish() {
      router.push('/DescomposicionMontarModuloPuenteHL298N').then(() => {
        window.scrollTo(0, 0);
      });
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
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 30%;
}

.centradados {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 30%;
}

.centradatres {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 65%;
}

.centradacuatro {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 70%;
}

.temas {
  position: sticky;
  margin-top: -245px;
}

.letras {
  font-size: 0px;
  height: 0px;
  font-weight: bold;
  color: #16161696;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}

.contenedor {
  display: flex;
  justify-content: space-between; /* Se asegura que haya espacio entre las imágenes */
  align-items: flex-start; /* Alineación de las imágenes desde la parte superior */
  gap: 100px; /* Espacio entre las imágenes */
  flex-wrap: wrap; /* Permite que las imágenes se ajusten si el espacio es insuficiente */
}

.imagen-item {
  text-align: center;
  width: 25%; /* Ajusta el tamaño de cada contenedor de imagen */
  display: flex;
  flex-direction: column; /* Coloca el texto debajo de la imagen */
  justify-content: center;
  align-items: center;
}



.imagen-item img {
  width: 100%; /* Las imágenes llenan el contenedor */
  height: 200px; /* Establece una altura fija para todas las imágenes */
  object-fit: contain; /* Mantiene la proporción de la imagen */
}

.texto {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  min-height: 50px; /* Ajusta la altura mínima del texto */
}

.contenedordos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  flex-wrap: nowrap;
}

.imagen-item-dos {
  text-align: center;
  width: 18%;
  position: relative;
}

.imagen-item-dos::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-dos img {
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 100%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.contenedordosV1 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  flex-wrap: nowrap;
}

.imagen-item-dosV1 {
  text-align: center;
  width: 22%;
  position: relative;
}

.imagen-item-dosV1::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-dosV1 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.contenedordosV2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  flex-wrap: nowrap;
}

.imagen-item-dosV2 {
  text-align: center;
  width: 20%;
  position: relative;
}

.imagen-item-dosV2::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-dosV2 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 115%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}


.contenedortres {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-wrap: nowrap;
}

.imagen-item-tres {
  text-align: center;
  width: 25%;
  position: relative;
}

.imagen-item-tres::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-tres img {
  position: absolute;
  top: 0;
  left: 0;
  width: 115%;
  height: 70%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px; /* Espaciado superior e inferior */
}

</style>