<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">1. ¿Qué es C?</h1>
      <br>
      <br>
      <h2>4.1 Concepto de variable</h2>
      <br>
      <p class="texto-personalizado">Una variable es un espacio donde se almacena la información que el programa necesita o va a necesitar, además de ello, una variable permite recuperar esa información en cualquier momento.</p>
      <p><span style="font-weight: bold;">Nota:</span> Recordar que para un programa en el lenguaje C la declaración de variables es de las primeras cosas que se digita.</p>
      <p class="texto-personalizado">Antes de hablar de los tipos de variables que se suelen implementar a menudo, se debe de tener en cuenta que en el lenguaje de programación C el uso de una variable sin definir su valor dará como resultado un error de sintaxis, es decir, que no se puede hacer uso de una variable que no tenga definido el valor.</p>
      <br>
      <h2>4.1.1 Tipos de variables</h2>
      <br>
      <p class="texto-personalizado">Entre los tipos de variables se puede encontrar los siguientes tres grupos:</p>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.1.1.1. Variables para valores numéricos:</span> Son variables a las que se les asignan valores pertenecientes a los números reales. Están divididas en dos tipos:</p>
      <ul>
        <li><p class="texto-personalizado">Varaibles para números enteros <span style="font-weight: bold">(int)</span></p></li>
        <li><p class="texto-personalizado">Varaibles para números decimales <span style="font-weight: bold">(float)</span></p></li>
        <li><p class="texto-personalizado">Varaibles para números decimales <span style="font-weight: bold">(double)</span></p></li>
      </ul>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.1.1.2. Variables para valores tipo carácter:</span> Estas variables permiten guardar y asignarles carácteres, los cuales son símbolos como las letras del abecedario. Solo existe un tipo de esta variable y se representa con la palabra reservada <strong>(Char)</strong>.</p>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Char solo permite la declaración de un carácter, más adelante se tratará la forma en la cual se puede definir una palabra <strong>(cadena de carácteres)</strong>.</p>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.1.1.3. Variables para valores de tipo estado:</span> Una variable de este tipo es la que permite definirse su propio estado verdadero o falso <strong>(true/false)</strong>. Se representa con la palabra reservada <strong>(bool)</strong>.</p>
      <br>
      <h2>4.1.2 Declaración de una variable</h2>
      <br>
      <p class="texto-personalizado">Para declarar una variable se debe de tener en cuenta su estructura básica:</p>
      <br>
      <p class="text-center"><span style="font-weight: bold;"> Tipo_de_variable / Nombre_de_la_variable = Valor_de_la_variable</span></p>
      <br>
      <p class="texto-personalizado">El nombre de la variable puede ser cualquiera y puede estar conformado por números y letras al mismo tiempo, pero no puede tener ninguna de las siguientes restricciones:</p>
      <br>
      <ul>
        <li class="texto-personalizado"><strong>Empezar por un número.</strong></li>
        <li class="texto-personalizado"><strong>Tener espacios.</strong></li>
        <li class="texto-personalizado"><strong>Utilizar palabras reservadas.</strong></li>
        <li class="texto-personalizado"><strong>Tener carácteres especiales como tildes, comas, etc.</strong></li>
      </ul>
      <br>
      <br>
      <img class="centrada2" src="/imagenes/Definir variables.PNG?url" alt="">
      <br>
      <br> 
      <p><span style="font-weight: bold;">Nota:</span> El valor de la variable debe de ir asociado al tipo de variable que se declare.</p>
      <br>
      <h2>4.2 Concepto de operación</h2>
      <br>
      <p class="texto-personalizado">Un operador es un elemento que permite realizar acciones entre operandos <strong>(variables)</strong>.</p>
      <p><span style="font-weight: bold;">Nota:</span> El operador más importante que se usa es el de asignación, el cual se representa por el símbolo<strong>(=)</strong>.</p>
      <br>
      <h2>4.2.1 Tipos de operadores</h2>
      <br>
      <p class="texto-personalizado">Los tipos de operadores son seis según su función, los cuales son aritméticos, relacionales, de asignación, lógicos, de manejo de dirección y de Bits.</p>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.1. Operadores aritméticos:</span> Son aquellos que se usan para realizar cálculos y operaciones con números reales. Entre los más comunes se pueden encontrar:</p>
      <br>
      <br>
      <img class="centrada" src="/imagenes/Operadores aritméticos.PNG?url" alt="">
      <br>
      <br>
      <p><span style="font-weight: bold; padding-left: 20px;">Nota:</span> Los operadores de incremento y decremento son más comunes en el uso de estructuras de repetición <strong>(ciclos)</strong>.</p>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.2. Operadores relacionales:</span> También llamados operadores lógicos y de comparación, son utilizados para validar la veracidad o falsedad de las propuestas de relación. Las expresiones relacionales <strong>(operadores relacionales)</strong> aceptan diversos tipos de argumentos y su respuesta siempre es verdadero <strong>(true)</strong> o falso <strong>(false)</strong>, es decir, un resultado booleano.</p>
      <br>
      <br>
      <img class="centrada" src="/imagenes/Oper relacionales.PNG?url" alt="">
      <br>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.3. Operadores de asignación:</span> Como su nombre lo dice estos operadores se usan para asignar un valor determinado a una variable. Los más comunes son:</p>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operadores de asignación no deben tener espacios entre el medio y los últimos cuatro de la lista solo permiten el uso de variables del tipo entero <strong>(int)</strong>.</p>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.4. Operadores lógicos:</span> Estos operadores son utilizados para hacer preguntas, en donde la respuesta es booleana, es decir, del tipo verdadero <strong>(true)</strong> y falso <strong>(false)</strong>. Existen solo tres tipos de estos operadores:</p>
      <br>
      <br>
      <img class="centrada" src="/imagenes/Oper lógicos.PNG?url" alt="">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operadores lógicos se suelen usar en estructuras de control <strong>(if else)</strong>.</p>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.5. Operadores de manejo de dirección:</span> En C existen operadores específicos de dirección <strong>(punteros)</strong> y referencia, los cuales permiten obtener datos o dirigir alguna información a alguna parte.</p>
      <br>
      <br>
      <img class="centrada2" src="/imagenes/Oper management.PNG?url" alt="">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operadores de manejo de dirección son utilizados cuando se imprime por pantalla algún dato, o en las estructuras de datos.</p>
      <br>
      <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.6. Operadores de Bits:</span> Son operadores de movimiento a nivel de Bits, lo que significa que una cantidad determinada es convertida a su equivalente en Bits y luego se realiza el desplazamiento de dicho valor.</p>
      <br>
      <br>
      <img class="centrada2" src="/imagenes/Oper bits.PNG?url" alt="">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operandos de este tipo de operadores tienen que ser del tipo entero <strong>(int)</strong>, esto debido a que el desplazamiento siempre dará como resultado un número entero.</p>
      <br>
      <br>
      <br>
      <div>
        <button class="bt-validate" @click="finish">Avanzar</button>
      </div>
    </main>
    <aside class="menu-lateral">
      <div>
        <Menu />
      </div>
    </aside>
</div>
</template>


<script>
import router from '@/router'
import Menu from "@/components/Menu.vue";
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar,
        Menu
    },

    methods: {
      finish() {
      router.push('/DescompositionVariablesOperacionesCEjemplo.vue')
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
    width: 35%;
}

.centrada2 {
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
  height: 120%;
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
  width: 100%;
  height: 140%;
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