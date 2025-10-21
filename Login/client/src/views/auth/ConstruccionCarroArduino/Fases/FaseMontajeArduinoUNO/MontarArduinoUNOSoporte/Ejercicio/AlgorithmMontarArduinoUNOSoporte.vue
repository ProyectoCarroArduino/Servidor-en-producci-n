<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
        <h1 class="text-center">Paso 1. Montar Arduino UNO en el soporte</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule una placa Arduino UNO. En la placa se deberá poder <strong>montar</strong> los componentes: <strong>Modulo Bluetooth HC-06 y Modulo L298N/puente H</strong>. Se debe tener en cuenta que para el montaje de algún componente a la placa Arduino UNO, este debe ir conectado a los pines correspondientes. 
        Sin embargo, para este ejercicio <strong>no se van a solicitar las conexiones</strong> a los pines de la placa para ningún módulo.</p>
      <p class="texto-personalizado">El programa deberá poder <strong>dar al usuario</strong> la opción de que ingrese a algunos de los dos componentes para posteriormente hacer la conexión o montaje de este a la placa Arduino UNO. Además, <strong>debe proporcionar</strong> una forma de salir del programa si no se  quiere seleccionar ninguno de los dos componentes.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué componente se ha seleccionado para posteriormente hacer el montaje.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada “ArduinoUNO” donde se maneje toda la simulación de la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una variable tipo entera (int) llamada opcion.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe de mostrar un menú que permita la visualización de los componentes que se van a montar a la placa y la opción de salir.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>El menú debe mostrar un mensaje de error que diga lo siguiente: “Opción inválida. Saliendo...” si se ha seleccionado una opción inválida.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el nombre del componente que el usuario ha seleccionado para montar a la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>No se debe solicitar los pines de conexión ni validar la asignación de estos para un correcto funcionamiento en el ejercicio (por el momento).</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <ImageChecker/>
        </div>
        <div class="align-left col-md-3">
            <div class="temas">
                <NavMenu />
            </div>
        </div>
    </div>
</template>

<script>
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarArduinoUNOSoporte/ImageCheckerMontarArduinoUNOSoporte.vue";
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