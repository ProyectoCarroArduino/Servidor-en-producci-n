<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 4. Ensamblar ruedas a los motorreductores </h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios es una rueda para motorreductor y una tuerca negra grande.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden al <strong>ensamblaje</strong> de una
        rueda del carro a un motorreductor, y para la construcción del carro se <strong>necesitan ensamblar</strong> cuatro ruedas a su respectivo motorreductor, es decir, 
        el paso a paso que se va a explicar a continuación <strong>se debe</strong> repetir cuatro veces.</p> 
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesEnsamblarRuedasMotorreductores/RuedaCarro.png" alt="RuedaCarro">
          <p class="texto">Rueda del carro</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesEnsamblarRuedasMotorreductores/DiscoEncoder.png" alt="DiscoEncoder">
          <p class="texto">Disco encoder</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">El proceso es relativamente sencillo, solo se debe <strong>ajustar o ensamblar</strong> la rueda a la estructura, parte, peldaño, etc blanco del motorreductor.</p>
      <br>
      <div class="contenedordos">         
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesEnsamblarRuedasMotorreductores/AjustarRueda.png" alt="AjustarRueda">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesEnsamblarRuedasMotorreductores/RuedaAjustada.png" alt="RuedaAjustada">
        </div>
      </div>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe de <strong>aplicar</strong> un poco de fuerza para que la rueda quede ajustada en la parte blanca, pero hay que <strong>ser cuidadoso</strong> de no aplicar fuerza de más y dañar el eje para la rueda <strong>(parte blanca)</strong> del motorreductor. </p> 
      <br>
      <p class="texto-personalizado">Por último, se <strong>ajusta</strong> el disco encoder que va a <strong>sujetar firmemente</strong> la rueda de modo que con el movimiento esta última no se vaya a aflojar. Lo que se hace es ajustar el disco encoder <strong>en la otra parte blanca o eje</strong> que tiene el motorreductor. </p>
      <br>
      <div class="contenedordos">         
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesEnsamblarRuedasMotorreductores/AjustarDiscoEncoder.png" alt="AjustarDiscoEncoder">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesEnsamblarRuedasMotorreductores/DiscoEncoderAjustado.png" alt="DiscoEncoderAjustado">
        </div>
      </div>
      <br>
      <br>
      <h2>Video del paso:</h2>
      <br>
      <br>
      <div class="video-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/b5CXmP7cKt8?si=swlUIfejgCu6LoJH" 
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
      router.push('/DescomposicionEnsamblarRuedasMotorreductores').then(() => {
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
  justify-content: center; /* Se asegura que haya espacio entre las imágenes */
  align-items: flex-start; /* Alineación de las imágenes desde la parte superior */
  gap: 100px; /* Espacio entre las imágenes */
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
  height: 90%;
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
  width: 90%;
  height: 80%;
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