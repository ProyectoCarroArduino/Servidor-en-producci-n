<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 2. Conectar interruptor de 4 pines a la placa Arduino y al módulo L298N</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el proceso de conexión de los dos cables del interruptor de 4 pines a la placa Arduino UNO y al módulo L298N, esto se hace con el fin de <strong>alimentar todo el circuito con energía</strong>. Es importante tener en cuenta que el interruptor tiene <strong>4 pines</strong>, de los cuales 2 son de entrada, que reciben la energía, y los otros dos son de salida.
         Los cables que salen de los pines de salida del interruptor <strong>solo pueden</strong> ir conectados a los pines voltaje de los componentes. <strong>El orden de los pines de los componentes es el siguiente:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>1: GND.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>2: 5V.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>3. VIN.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>4. 3V.</strong></p></li>
      </ul>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> al usuario los pines del (1 - 4) a los cuales quiere conectar los cables de salida del interruptor. Se <strong>debe validar</strong> que los cables estén conectados a los pines de energía correctos, de lo contrario imprimir el mensaje: “Error: Ambos cables de energía deben estar conectados al pin correcto.”. 
        Si se conectan los cables a alguno de los pines de energía que <strong>no es el correcto</strong>, se debe imprimir el siguiente mensaje: "Conexion incorrecta.".</p>
      <p class="texto-personalizado">Al final, si se cumple la validación para que la placa Arduino UNO y el módulo L298N (puente H) estén conectados a los pines de energía correctos, el programa <strong>deberá imprimir</strong> el siguiente mensaje: "Ambos cables están conectados correctamente.”.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse dos funciones prototipo de tipo entero (int) llamadas:  energiaArduinoUNO y energiaModuloL298N.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entero (int) llamada energiaArduinoUNO, la cual deberá recibir el pin al cual el usuario ha decidido conectar el cable de energía en la placa Arduino UNO y, también debe validar que ese pin sea el que hace que el componente funcione de forma correcta.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entero (int) llamada energiaModuloL298N, la cual deberá recibir el pin al cual el usuario ha decidido conectar el cable de energía en el módulo L298N (puente H) y, también debe validar que ese pin sea el que hace que el componente funcione de forma correcta.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una matriz de tipo entero (int) conexion[4][2].</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo que solicite al usuario en qué pines de la placa Arduino UNO y el módulo L298N quiere conectar los cables de energía.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que los pines de energía o voltaje de la placa Arduino UNO y el módulo L298N (VIN) tengan conectados un cable. Para ello, hacer uso del ciclo para recorrer la matriz.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una variable de tipo entero llamada suma, la cual permita validar si los pines (GND, 5V Y 2V) tienen conectado un cable, si si lo tienen retornar 0, pero si el pin (VIN) es el que tiene conectado un cable en los dos componentes retornar 1.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación de que hay cables conectados a los pines GND, 5V Y 2V es correcta se debe imprimir el siguiente mensaje: “Error: Ambos cables de energía deben estar conectados al pin correcto.”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, si se cumple la validación para que la placa Arduino UNO y módulo funcione correctamente, el programa deberá imprimir el siguiente mensaje: "¡Conexion correcta!".</strong></p></li>
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
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseConectarInterruptor4Pines/ConectarInterruptor4PinesModulos/Ejercicio/ImageCheckerConectarInterruptor4PinesModulos.vue";
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