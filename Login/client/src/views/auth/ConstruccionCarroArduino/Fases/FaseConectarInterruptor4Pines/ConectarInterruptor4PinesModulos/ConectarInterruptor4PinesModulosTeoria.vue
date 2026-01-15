<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 2. Conectar interruptor de 4 pines a la placa Arduino y al módulo L298N</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son un cautín tipo lápiz, cables jumper tipo macho hembra, un módulo L298N o puente H y una placa Arduino UNO.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la <strong>conexion</strong> de la 
        de 4 pines a los modulos, y para la construcción del carro <strong>solo se necesita conectar</strong> el interruptor de 4 pines a los modulos una vez, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir solo una vez.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/Cautin.png" alt="Interruptor4Pines">
          <p class="texto">Cautín tipo lápiz</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/CablesJumper.png" alt="CablesJumper">
          <p class="texto">cables jumper</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/ModuloL298N.png" alt="ModuloL298N">
          <p class="texto">Módulo L298N (puente H)</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/ArduinoUNO.png" alt="ArduinoUNO">
          <p class="texto">Placa Arduino UNO</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Lo primero que se tiene que hacer es <strong>seleccionar dos</strong> cables jumper de tipo macho hembra, preferiblemente de color <strong>rojo o naranja</strong>, ya que estos estarán <strong>conectados a los pines de energía</strong> de los dos componentes más imporantenes
       <strong>(el módulo L298N y la placa Arduino UNO)</strong>.</p>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarInterruptor4PinesModulos/DosCables.png" alt="DosCables">
      <br>
      <br>
      <p class="texto-personalizado">Después de haber seleccionado los cables, se procederá a <strong>cortar los pines</strong> de los extremos de uno de esos dos cables, este cable más adelante <strong>se conectará</strong> al módulo L298N o puente H, mientras que al otro cable solo se le cortará <strong>el pin hembra</strong>
       y estará conectado a la placa Arduino UNO. Una vez se han cortado los pines se procede a <strong>quitar</strong> una pequeña parte de la cobertura del cable y a <strong>enrollar</strong> los cables pequeños que hay adentro.</p>
      <br>
      <br>
      <h3>Módulo L298N (puente H):</h3>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/CortarPines.png" alt="CortarPines">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/PinesCortados.png" alt="PinesCortados">
        </div>
      </div>
      <br>
      <br>
      <h3>Placa Arduino UNO:</h3>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/CortarPin.png" alt="CortarPin">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/PinCortado.png" alt="PinCortado">
        </div>
      </div>
      <br>
      <br>
      <p class="texto-personalizado">Luego de haber <strong>preparado los cables</strong> para conectar a los componentes, lo que se hará <strong>es conectar los cables</strong> a los pines de salida <strong>(NO)</strong> del interruptor de 4 pines. Para ello se va a tomar un <strong>pedazo</strong>
       de estaño y el cautín tipo lápiz después de <strong>estar caliente</strong> y se va a soldar <strong>ambos cables</strong> a los pines de salida, <strong>uno en cada pin</strong>.</p>
      <br>
      <br>
      <div class="contenedordosv2">
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/SoldarCables.png" alt="SoldarCables">
        </div>
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/CablesSoldados.png" alt="CablesSoldados">
        </div>
      </div>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe <strong>asegurar</strong> que la soldadura sea firme y ajuste bien el cable <strong>al contacto con el pin</strong> para que la corriente entre sin ningún problema.</p>
      <br>
      <br>
      <p class="texto-personalizado">Cuando ya se han soldado <strong>ambos cables</strong> a los pines de salida del interruptor de 4 pines, lo siguiente que se hará es <strong>conectar cada cable</strong> a su respectivo componente. Antes de empezar con la conexión, se debe tener en cuenta que el cable que tenga pin macho <strong>(aguja)</strong> 
      va a ir <strong>conectado a la placa Arduino UNO</strong>, y el cable al que se le han enrrollado los pequeños cables deberá ir <strong>conectado al módulo L298N</strong>.</p>
      <br>
      <p class="texto-personalizado">Para la conexión del cable a la placa Arduino UNO, lo que se va a hacer es tomar el cable que tenga pin y este se va a <strong>introducir</strong> en el <strong>pin de 7V o (VIN)</strong> de la placa. Al conectar el interruptor en ese pin lo que se quiere hacer es <strong>alimentar</strong> a la placa Arduino UNO un voltaje de más de 7V y menos de 12V.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> <strong>No se debe olvidar</strong> que el módulo bluetooth HC-06 <strong>ya tiene ocupado</strong> el pin de 5V de la placa, es decir, que a la placa Arduino UNO <strong>solo le queda disponible</strong> el pin de 7V o (VIN).</p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/ConectarArduino.png" alt="ConectarArduino">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/UbicacionCable.png" alt="UbicacionCable">
        </div>
      </div>
      <br>
      <br>
      <h3>Resultado del proceso:</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarInterruptor4PinesModulos/CableConectado.png" alt="CableConectado">
      <br>
      <br>
      <p class="texto-personalizado">La siguiente conexión que se debe hacer es del cable al módulo L298N, para dicha conexión el cable al que se le han enrrollado los cables pequeños va a ir <strong>conectado</strong> al <strong>pin VIN del puente H</strong>. A pesar de que el módulo L298N <strong>tiene disponible</strong> el pin de 5V,
         el voltaje y la carga que este proveé al circuito <strong>no son suficientes</strong> para alimentar 4 motorreductores.</p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/ConectarL298N.png" alt="ConectarL298N">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/UbicacionCable2.png" alt="UbicacionCable2">
        </div>
      </div>
      <br>
      <br>
      <h3>Resultado del proceso:</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarInterruptor4PinesModulos/CableConectado2.png" alt="CableConectado2">
      <br>
      <br>
      <p class="texto-personalizado">Por último, <strong>se debe encender</strong> el interruptor de 4 pines, esto con el fin de <strong>comprobar</strong> que el circuito tiene corriente cuando se <strong>oprime el botón</strong>, y así mismo el circuito <strong>no debería</strong> tener corriente cuando este se encuentre <strong>abajo o apagado</strong>. 
        La mejor manera de ver si el circuito está siendo alimentado por la corriente de forma correcta es <strong>fijarse en el led</strong> interno con el que cuenta el módulo bluetooth HC-06 esté <strong>parpadeando de forma intermitente</strong>.</p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/ModuloHC06.png" alt="ModuloHC06">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarInterruptor4PinesModulos/UbicacionCable2.png" alt="UbicacionCable2">
        </div>
      </div>
      <br>
      <br>
      <br>
      <h2>Video del paso:</h2>
      <br>
      <br>
      <div class="video-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/m9QqY3dORGM?si=_RWH1CKcvVhGxRCA" 
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
    </main>
    <aside class="menu-lateral">
      <div>
        <MenuCarro />
      </div>
    </aside>
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
      router.push('/DescomposicionConectarInterruptor4PinesModulos').then(() => {
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
    width: 22%;
}

.centrada2 {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 45%;
}

.centradados {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 32%;
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
  gap: 10px; /* Espacio entre las imágenes */
  flex-wrap: wrap; /* Permite que las imágenes se ajusten si el espacio es insuficiente */
}

.imagen-item {
  text-align: center;
  width: 18%; /* Ajusta el tamaño de cada contenedor de imagen */
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
  width: 22%;
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
  width: 130%;
  height: 95%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.contenedordosv2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  flex-wrap: nowrap;
}

.imagen-item-dosv2 {
  text-align: center;
  width: 20%;
  position: relative;
}

.imagen-item-dosv2::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-dosv2 img {
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
  gap: 110px;
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
  height: 85%;
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