<template>
    <div id="user">
      <div class="card card-body mt-8, align-left, col-md-15">
        <!--<h1 class="text-center">Programación en C</h1>-->
        <h1 class="text-center">6.1 Arreglos (Arrays)</h1>
        <br>
        <br>
        <h2>6.1.1 Concepto de arreglo</h2>
        <p class="texto-personalizado">Un arreglo o array es una estructura de datos almacenada en una variable, donde cada elemento tiene el mismo tipo de dato y nombre, y
        estos están almacenados de forma consecutiva. A cada posición almacenada en un arreglo se le llama <strong>(elemento del arreglo)</strong> y el número de esto va a
        depender del <strong>(tamaño)</strong> que se le asigne al arreglo. Los arreglos son estructuras estáticas debido a que se les declara un tamañao y un tipo de dato 
        conservando estas características durante la ejecución de todo el programa.</p>
        <p><span style="font-weight: bold;">Nota:</span> Un arreglo o array también es llamada vector y su uso principal es implementar listas a un programa, por esta razón
        el tipo de dato más común que usa es <strong>string</strong>.
        </p>
        <br>
        <h2>6.1.2 Declaración de un arreglo</h2>
        <p class="texto-personalizado">Para declarar un arreglo se usa la siguiente estructura:</p>
        <p class="text-center"><span style="font-weight: bold;"> ( tipo +  nombre del arreglo + tamaño )</span></p>
        <ul>
          <li><p class="texto-personalizado"> <strong>Tipo:</strong> Es el tipo de dato que el arreglo guardará y que cada <span style="font-weight: bold">(elemento del arreglo)</span> tendrá asignado.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> El tipo de dato más utilizado es el <strong>string</strong>.</p>
          <li><p class="texto-personalizado"> <strong>Nombre del arreglo:</strong> Es como se quiere llamar a la variable que va a almacenar el arreglo<span style="font-weight: bold"></span>.</p></li>
          <li><p class="texto-personalizado"> <strong>Tamaño:</strong> Es el número de <strong>(elementos del arreglo)</strong> de un tipo especifico que el arreglo va a almacenar.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> El tipo de dato no afecta el tamaño del arreglo y este siempre debe ir delimitado por <strong>(corchetes)</strong>, si no se hace el compilador del lenaguaje no detecta la variable como un arreglo.</p>
        </ul>
        <br>
        <img class="centrada" src="/imagenes/Declaracion array.png?url" alt="">
        <br>
        <br>
        <h2>6.1.3 Guardar datos en un arreglo</h2>
        <br>
        <img class="centrada" src="/imagenes/Elementos while.png?url" alt="">
        <br>
        <div>
          <br>
          <br>
          <button class="bt-validate" @click="finish">Avanzar</button>
        </div>
      </div>
      <div class="col-md-3">
        <div class="temas">
          <Menu />
        </div>
      </div>
  </div>
  </template>

<script>
import router from '@/router'
import Menu from "../../components/Menu.vue";
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar,
        Menu
    },

    methods: {
      
    finish() {
        router.push('/descomposicionArrayEj').then(() => {
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

ul.custom-list {
  list-style-type: square; /* Puedes cambiar 'square' por 'circle', 'disc', etc. */

}

.texto-li{
  font-family: Arial, sans-serif; /* Tipo de letra */
  font-size: 16px; /* Tamaño de fuente */
  text-align: justify; /* Alineación justificada */
}

</style>