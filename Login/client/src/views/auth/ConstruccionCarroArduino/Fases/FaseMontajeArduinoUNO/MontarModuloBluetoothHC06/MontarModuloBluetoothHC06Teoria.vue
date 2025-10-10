<template>
  <div id="user">
    <div class="card card-body mt-8, align-left, col-md-15">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 2. Montar módulo Bluetooth HC-06 al Arduino UNO</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son un módulo Bluetooth HC-06, una placa Arduino UNO y cables jumpers de tipo macho hembra.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden al <strong>montaje</strong> de un 
        módulo Bluetooth HC-06 a la placa Arduino UNO, y para la construcción del carro <strong>solo se necesita hacer el montaje</strong> de un solo módulo Bluetooth HC-06, es decir, que 
        el paso a paso que se va a explicar a continuación <strong>se debe</strong> repetir solo una vez.</p> 
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ModuloBluetoothHC06.png" alt="ModuloBluetoothHC06">
          <p class="texto">Módulo bluetooth HC-06</p>
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
      <p class="texto-personalizado">Lo primero que se debe hacer es <strong>tomar el módulo Bluetooth HC-06</strong> y conectarle a sus pines o conectores un cable jumper macho hembra, <strong>uno para cada pin</strong>, 
      pero antes de hacer este paso se debe tener en cuenta que <strong>no se van a cablear todos los pines</strong>, ya que no es necesario. 
      Para ello, se va a hacer una breve introducción al módulo Bluetooth HC-06 que cuenta con los siguientes pines: </p>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>VCC:</strong> Es el pin que va a alimentar el módulo, por lo general con una potencia entre 3.3V y 5V. Sin embargo, este voltaje no es general, eso depende del módulo.</p></li>
          <li><p class="texto-personalizado"> <strong>GND:</strong> Es el pin que se usa para el polo a tierra, es decir, es el que completa el circuito, permitiendo que funcione correctamente.</p></li>
          <li><p class="texto-personalizado"> <strong>TXD:</strong> Es el pin de transmisión de datos, es el que permite que se pueda enviar información desde el módulo a otro dispositivo o placa, en este caso la placa Arduino UNO.</p></li>
          <li><p class="texto-personalizado"> <strong>RXD:</strong> Es el pin de recepción de datos, es el que se encarga de recibir la información proveniente desde un dispositivo o placa, en este caso la placa Arduino UNO.</p></li>
          <li><p class="texto-personalizado"> <strong>STATE:</strong> Es el pin de salida, el cual permite saber el estado de la conexión Bluetooth.</p></li>
          <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Como se está usando una placa Arduino UNO <strong>no es necesario cablear este pin</strong> para conocer el estado de conexión a otros dispositivos, ya sea bajo <strong>(low)</strong> o alto <strong>(high)</strong>.</p>
          <li><p class="texto-personalizado"> <strong>EN o KEY:</strong> Es el pin que permite la configuración del modo al que funcione el módulo.</p></li>
          <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> No se suele cambiar el modo de funcionamiento del módulo por dos razones. En primer lugar porque <strong>se necesitaría de un dispositivo o placa</strong> que pueda permitir la configuración por medio de un software que 
          <strong>se debe de desarrollar en un ambiente de desarrollo</strong> como el IDE de Arduino, 
          y segundo porque <strong>no se necesita configurar</strong> para que funcione correctamente.</p>
        </ul>
      <br>
      <img class="centrada" src="@/assets/ImagenesMontarModuloBluetoothHC06/PinesModuloBluetooth.png" alt="PinesModuloBluetooth">
      <br> 
      <br>
      <p class="texto-personalizado">Una vez conocidas las funciones de cada pin, lo siguiente va a ser cablear con un cable jumper macho hembra <strong>cuatro de esos pines</strong>, los cuales son: el de alimentación <strong>(VCC)</strong>, el de polo a tierra <strong>(GND)</strong>, 
      el de transmisión de datos <strong>(TXD)</strong> y el de recepción de datos <strong>(RXD)</strong>.</p>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesMontarModuloBluetoothHC06/ConectarCablesModuloHC06.png" alt="ConectarCablesModuloHC06">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El color en los pines de la imagen <strong>representa el color del cable que se le va a asignar a cada pin</strong>. Es recomendable seguir este orden, pero en caso de que no se haga, 
      tener en cuenta que el pin de alimentación <strong>(VCC)</strong> debe de ser de color <strong>rojo, naranja o amarillo</strong>, y para el pin de polo a tierra <strong>(GND)</strong> debe ser <strong>negro o azul oscuro</strong>.</p>
      <br>
      <br>
      <p class="texto-personalizado">Al momento de conectar un cable jumper tipo macho hembra a uno de los pines del módulo Bluetooth HC-06 <strong>se debe prestar atención</strong> a que el pin hembra, es decir, <strong>la parte sin aguja</strong> es la que debe de ser introducida para hacer la conexión correctamente. </p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ConectarPinVCC.png" alt="ConectarPinVCC">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/CableJumperVCCHC06.png" alt="CableJumperVCCHC06">
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Cuando se hayan hecho todas las conexiones de todos los cables a los pines del módulo HC-06 debe quedar de la siguiente manera:</p>
      <br>
      <img class="centradados" src="@/assets/ImagenesMontarModuloBluetoothHC06/ModuloBluetoothHC06Conectado.png" alt="ModuloBluetoothHC06Conectado">
      <br>
      <p class="texto-personalizado">Para poder continuar con el proceso de montaje del módulo HC-06 a la placa Arduino UNO <strong>es necesario conocer</strong> los diferentes <strong>pines y puertos digitales</strong> de la placa de programación Arduino UNO. 
      En este proceso nuevamente <strong>no se van a usar todos los pines</strong>, pero es importante conocer las funciones de cada pin y puerto, para más adelante poder <strong>designar</strong> qué pines y puertos se van a cablear. 
      La placa Arduino UNO contiene los siguientes pines digitales, pines análogicos, pines de alimentación y pines de interrupción:</p>  
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Pines digitales (0 a 13):</strong> Estos pines se utilizan para señales digitales, que pueden ser Alta (High) o Baja (Low). Se usan para entradas o salidas digitales.</p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>Pines 0 y 1 (RX, TX):</strong> Estos pines están dedicados a la comunicación serial. El pin <strong>0 (RX)</strong> recibe datos, y el pin <strong>1 (TX)</strong> transmite datos. 
                Usualmente, estos pines se usan para la comunicación con otros dispositivos <strong>(como un ordenador o un módulo Bluetooth)</strong>, aunque también se pueden usar como pines digitales normales.</p></li>
                <li><p class="texto-personalizado"> <strong>Pines 2 a 13:</strong> Son pines digitales que pueden usarse para entradas o salidas. Algunos de ellos tienen funciones especiales, como PWM o interrupciones.</p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Pines analógicos (A0 a A5):</strong> Estos pines se utilizan para leer señales analógicas. Arduino UNO puede leer valores de 0 a 1023 (usando el ADC de 10 bits) que representan voltajes entre 0 y 5V.</p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>A0 a A5:</strong> Estos pines están destinados a leer señales analógicas, como las provenientes de sensores, potenciómetros, etc. 
                También se pueden usar como pines digitales si se requieren más pines para entradas o salidas.</p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Pines de alimentación:</strong></p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>GND (Ground):</strong> Son los pines de tierra del Arduino, necesarios para cerrar el circuito. Los pines GND están en varias ubicaciones en la placa para facilitar las conexiones a dispositivos externos.</p></li>
                <li><p class="texto-personalizado"> <strong>5V:</strong> Este pin proporciona 5V de voltaje regulado desde la placa de Arduino. Se usa para alimentar componentes externos que necesiten 5V.</p></li>
                <li><p class="texto-personalizado"> <strong>3.3V:</strong> Este pin proporciona 3.3V de voltaje regulado. Algunos componentes, como ciertos sensores, necesitan 3.3V para operar.</p></li>
                <li><p class="texto-personalizado"> <strong>Vin:</strong> Este pin se usa para suministrar voltaje externo a la placa, generalmente a través de una fuente de alimentación de 7-12V, que luego es regulada internamente a 5V.</p></li>
                <li><p class="texto-personalizado"> <strong>IOREF:</strong> Este pin proporciona el voltaje de referencia de entrada/salida de la placa. Es útil si se usa una placa Arduino que opere a 3.3V en lugar de 5V.</p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Pines PWM (Pulse Width Modulation):</strong></p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>Pines 3, 5, 6, 9, 10, 11:</strong> Estos pines tienen capacidad de modulación por ancho de pulso (PWM). Se utilizan para simular una señal analógica mediante una señal digital, 
                lo que es útil para controlar el brillo de un LED, la velocidad de un motor, etc.</p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Pines de interrupción:</strong></p></li>
             <ul>
                <li><p class="texto-personalizado"> <strong>Pines 2 y 3:</strong> Estos pines pueden usarse para interrupciones externas, lo que permite al Arduino responder rápidamente a ciertos eventos, 
                como el cambio de estado de un sensor o un botón. </p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Puerto USB (para conexión con la computadora):</strong> El puerto USB sirve para programar la placa y también para la comunicación serial con la computadora. Conecta el Arduino UNO a tu PC y utiliza el IDE de Arduino para cargar tus programas.</p></li>
          <li><p class="texto-personalizado"> <strong>Puerto de alimentación (jack):</strong> Este es el conector de alimentación de la placa, donde puedes conectar una fuente de voltaje externa (7-12V) para alimentar el Arduino cuando no esté conectado por USB.</p></li>
          <li><p class="texto-personalizado"> <strong>Puerto de programación (ICSP):</strong> Este puerto es usado para programar el microcontrolador ATmega328P a través de un programador externo (por ejemplo, para cargar un "bootloader" o reprogramar el chip si es necesario). 
          No se usa comúnmente para proyectos típicos, pero es útil para desarrolladores avanzados.   </p></li>
          <li><p class="texto-personalizado"> <strong>LED incorporado:</strong></p></li>
             <ul>
                <li><p class="texto-personalizado"> <strong>Pin 13:</strong> El pin 13 tiene un LED incorporado en la placa. Este LED puede ser controlado como un pin digital normal y se usa comúnmente en ejemplos para verificar el funcionamiento básico de la placa.</p></li>
            </ul>
           <li><p class="texto-personalizado"> <strong>Botón de reset:</strong></p></li>
             <ul>
                <li><p class="texto-personalizado"> <strong>RESET:</strong> Este es un botón físico en la placa. Al presionarlo, se reinicia el programa que esté corriendo en el Arduino, comenzando de nuevo desde el principio.</p></li>
            </ul>
      </ul>
      <br>
      <img class="centradatres" src="@/assets/ImagenesMontarModuloBluetoothHC06/PinesArduinoUNO.png" alt="PinesArduinoUNO">
      <br>
      <br>
      <p class="texto-personalizado">Después de conocer para qué sirven los pines digitales, analógicos, de alimentación y demás, se procede a <strong>conectar el extremo que cuenta con pin</strong> de los cables macho hembra que anteriormente se han conectado 
      <strong>a los pines del módulo Bluetooth HC-06</strong> a la placa Arduino UNO.</p> 
      <br>
      <br>
      <div class="contenedortres">
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/CableJumperVCCArduinoUNO.png" alt="CableJumperVCCArduinoUNO">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ConectarCablesArduinoUNO.png" alt="ConectarCablesArduinoUNO">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ArduinoUNOConectado.png" alt="ArduinoUNOConectado">
        </div>
      </div>
      <p class="texto-personalizado">Los pines a los que se van a conectar los cables en la placa <strong>Arduino UNO</strong> serán:</p>  
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>VCC –-> al pin de alimentación 5V del Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>GND –-> al pin GND del Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>TXD –-> al pin digital 0 (RX ) del Arduino</strong></p></li>
          <li><p class="texto-personalizado"> <strong>RXD –-> al pin digital 1 (TX) del Arduino</strong></p></li>
      </ul>
      <br>
      <h2>Esquema de los pines a los que se van a conectar los cables:</h2>
      <br>
      <img class="centradacuatro" src="@/assets/ImagenesMontarModuloBluetoothHC06/SimulacionFritzingConexion.png" alt="SimulacionFritzingConexion">
      <br>
      <br>
      <h2>Video del paso:</h2>
      <br>
      <br>
      <div class="video-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/mlPdQHwn98E?si=0MTGBZC0rRqo0hPi" 
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
      router.push('/DescomposicionMontarModuloBluetoothHC06').then(() => {
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
    width: 35%;
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
    width: 50%;
}

.centradacuatro {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 75%;
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
  width: 21%;
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