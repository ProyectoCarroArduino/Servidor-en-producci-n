<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 1. Conectar cables a los motorreductores</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son una unidad de motorreductor <strong>(puede o no tener caja reductora)</strong> dos cables de teléfono
      <strong>(el color puede ser el que se guste, pero preferible que sean negro y rojo)</strong>, alicates, pinzas o pelacables, un cautín tipo lapiz y un pedazo de estaño.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la <strong>conexión</strong> de un
        motorreductor, y para la construcción del carro se <strong>necesitan conectar</strong> cuatro motorreductores, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir cuatro veces. </p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/Moto.png" alt="Moto">
          <p class="texto">Motorreductor</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/CableTeléfono.png" alt="CablesTeléfono">
          <p class="texto">Cable de teléfono</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/Alicates.png" alt="Alicates">
          <p class="texto">Alicates/pinzas/pelacable</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/Cautin.png" alt="Cautin">
          <p class="texto">Cautín tipo lápiz</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarCablesMotorreductores/Estaño.png" alt="Estaño">
          <p class="texto">Estaño</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Lo primero que se debe hacer es <strong>quitar</strong> un centímetro y medio de la cobertura, forro, protector del cable, etc. Para ello se usarán los alicates, 
        pinzas o pelacables de tal forma que la parte que <strong>protege</strong> los cables internos del cable de teléfono sea arrancada.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarCablesMotorreductores/CortarCableTelefono.png" alt="CortarCablesTelefono">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarCablesMotorreductores/CablesInternos.png" alt="CablesInternos">
        </div>
      </div>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Importante no cortar todo el cable, ya que lo que se <strong>necesita</strong> son los cables internos o pequeños.</p>
      <br>
      <p class="texto-personalizado">Una vez hecho esto se procede a <strong>enrrollar</strong> los cables internos con los dedos para que formen un solo cable, hay que tener cuidado de no <strong>arrancar</strong> los cables pequeños o internos en este proceso.</p>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarCablesMotorreductores/CablesInternosEnrrollados.png" alt="CablesInternosEnrrollados">
      <br>
      <br>
      <p class="texto-personalizado">Después de haber enrollado los cables internos se procede a <strong>conectarlos</strong> al motorreductor, es importante que primero se identifique la parte en donde deben ir conectados los cables de teléfono, 
        a esa parte se le llama <strong>terminales</strong>.</p>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarCablesMotorreductores/TerminalesMotorreductor.png" alt="TerminalesMotorreductor">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Un motorreductor básico o simple <strong>no tiene</strong> polaridad, es decir, que no hay terminal positivo ni negativo determinados, <strong>cualquiera</strong> puede ser positivo o negativo.</p>
      <br>
      <p class="texto-personalizado">Para una mayor comodidad se va a tratar el cable <strong>rojo</strong> como positivo y deberá ir conectado en la <strong>terminal derecha</strong> del motorreductor, 
        y el cable <strong>negro</strong> como negativo y deberá ir conectado en la <strong>terminal izquierda</strong> del motorreductor.</p>
      <br>
      <p class="texto-personalizado">Al momento de conectar los cables a los terminales del motorreductor se <strong>aplicará</strong> un técnica que consiste en hacer que el cable enrollado <strong>pase por debajo y se envuelva</strong> en la parte hueca del terminal.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarCablesMotorreductores/EnvolverCable.png" alt="EnvolverCable">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarCablesMotorreductores/MotorreductorConectado.png" alt="MotorreductorConectado">
        </div>
      </div>
      <br>
      <br>
      <p class="texto-personalizado">Por último, se procederá a <strong>soldar los cables</strong> a las terminales del motorreductor. El proceso de soldar consiste en <strong>mantener</strong> el cuatín tipo lápiz en un mano y en la otra un pedazo de estaño, 
        de tal forma que al <strong>presionar</strong> el cautín tipo lápiz en el medio donde se evuelven los cables pequeños y la unión del terminal la soldadura se efectue y mantenga fijos los cables.</p>
      <p class="texto-personalizado">Tener en cuenta que el proceso <strong>debe de ser una punzada</strong> del cautín en los pequeños cables y que el <strong>cautín no debe estar</strong> demasiado caliente o puede dañar las termianles del motorreductor.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold; color: red;">Advertencia:</span> Se recomienda que se usen gafas de protección, también que las personas con cabello largo lo tengan recogido y alejado del cautín.</p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarCablesMotorreductores/AplicarSoldadura.png" alt="AplicarSoldadura">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarCablesMotorreductores/SoldaduraAplicada.png" alt="SoldaduraAplicada">
        </div>
      </div>
      <br>
      <h2>Motorreductor conectado:</h2>
      <br>
      <br>
      <img class="centradados" src="@/assets/ImagenesConectarCablesMotorreductores/MotorreductorSoldado.png" alt="MotorreductorSoldado">
      <br>
      <br>
      <h2>Video del paso:</h2>
      <br>
      <br>
      <div class="video-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/DxX0sUtk9_M?si=LSws90oVe6Lx2DaQ" 
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
      router.push('/DescomposicionConectarCablesMotorreductores').then(() => {
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
    width: 25%;
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
  width: 100%;
  height: 100%;
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