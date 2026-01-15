<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 1. Conectar fuente de energía al interruptor de 4 pines</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el proceso de conexión de dos cables de color rojo al interruptor de 4 pines, esto se hace con el fin de <strong>alimentar el interruptor con energía</strong>. 
        Es importante tener en cuenta que el interruptor tiene <strong>4 pines</strong>, de los cuales 2 son de entrada, que reciben la energía, y los otros dos son de salida. Los cables rojos <strong>solo pueden</strong> ir conectados a los pines de entrada. 
        <strong>El orden de los pines es el siguiente</strong>:</p>
      <ul>
          <li><p class="texto-personalizado"> <strong>1: Pin 1 (entrada).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>2: Pin 2 (entrada).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>3. Pin 3 (salida).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>4. Pin 4 (salida).</strong></p></li>
      </ul>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> al usuario los pines del (1 - 4) a los cuales quiere conectar los cables. Se <strong>debe validar</strong> que los cables estén conectados a los pines de entrada, de lo contrario imprimir el mensaje: "Debe haber un cable en el pin 1 y otro en el pin 2.".
         Si se conectan los cables a los pines 3 y 4 se debe imprimir el siguiente mensaje: "No se permiten cables en los pines 3 y 4.". </p>
      <p class="texto-personalizado">Al final, si se cumple la validación para que el interruptor funcione correctamente, el programa <strong>deberá imprimir</strong> el siguiente mensaje: "¡Conexion correcta!".</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función prototipo de tipo entero (int) llamada interruptor4Pines.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entero (int) llamada interruptor4Pines, la cual deberá recibir los pines a los cuales el usuario ha decidido conectar los cables rojos y, también debe validar que los cables estén conectados a sus respectivos pines .</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una matriz de tipo entero (int) interruptor[4][2].</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo que solicite al usuario en qué pines quiere conectar los cables.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que los pines de entrada (1 y 2) tengan conectados un cable. Para ello, hacer uso del ciclo para recorrer la matriz. </strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que los pines de salida (3 y 4) no tengan conectados ninguno de los cables. Para ello, hacer uso del ciclo para recorrer la matriz.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una variable de tipo entero llamada suma, la cual permita validar si los pines (3 y 4) tienen conectado un cable, si si lo tienen retornar 0, pero si los pines (1 y 2) tienen conectado un cable retornar 1.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación de que hay cables conectados a los pines 3 y 4 es correcta se debe imprimir el siguiente mensaje: "No se permiten cables en los pines 3 y 4.".</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, si se cumple la validación para que el interruptor funcione correctamente, el programa deberá imprimir el siguiente mensaje: "¡Conexion correcta!".</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <ImageChecker/>
        </main>
        <aside class="menu-lateral">
            <div>
                <NavMenu />
            </div>
        </aside>
    </div>
</template>

<script>
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarFuenteEnergiaInterruptor4Pines/Ejercicio/ImageCheckerConectarFuenteEnergiaInterruptor4Pines.vue";
import NavMenu from "@/components/MenuCarro.vue";
export default{
    components:{
        NavMenu, 
        ImageChecker
    },
}
</script >



<style>

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

</style>