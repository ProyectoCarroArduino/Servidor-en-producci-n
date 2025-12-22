<template>
    <div class="layout-general">
      <div class="contenido">
        <h1 class="text-center">Paso 2. Montar módulo Bluetooth HC-06 al Arduino UNO</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de los pines VCC y GND de un módulo bluetooth HC-06 a los pines de alimentación de una placa Arduino UNO. La placa tiene que tener disponibles <strong>todos</strong> sus pines de alimentación para efectuar el montaje o conexión del módulo. 
        Se debe tener en cuenta que la placa cuenta con los siguientes pines de alimentación: <strong>(3.3V, 5V, GND, GND, VIN)</strong> y, para que el dispositivo esté conectado o montado <strong>tiene</strong> que tener su pin VCC conectado a un pin de <strong>alimentación (3.3V, 5V, VIN)</strong>
        y su pin GND a uno de los dos pines de <strong>alimentación (GND)</strong>.</p>
      <p class="texto-personalizado">El programa deberá <strong>solicitar al usuario</strong> a qué pin de la placa Arduino UNO quiere conectar los pines VCC y GND del módulo HC-06, así mismo el programa <strong>deberá validar</strong> 
        que los dos pines VCC y GND del módulo estén conectados a los respectivos pines de alimentación de la placa Arduino para el correcto funcionamiento.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué pines de alimentación de la placa Arduino UNO se están utilizando para el montaje del módulo bluetooth HC-06.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada “moduloHC06”, la cual deberá de encargarse de la asignación de los pines VCC y GND a los pines de alimentación de la placa Arduino UNO y la validación de la asignación de pines para el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar dos variables de tipo entera (int) llamadas opcion_vcc y opcion_gnd.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe mostrar un menú que permita la visualización de los pines de alimentación de la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe validar que el pin VCC del módulo HC-06 esté conectado a uno de los pines de alimentación (3.3V, 5V, VIN) de la placa Arduino UNO, y así mismo el pin GND del módulo también esté conectado a uno de los dos pines GND de la placa.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin VCC del módulo HC-06 no está conectado a uno de alimentación correspondiente de la placa Arduino UNO imprimir el mensaje de error: “El pin VCC debe conectarse a 3.3V (1), 5V (2) o VIN (5).”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin GND del módulo HC-06 no está conectado a uno de los dos pines GND de la placa Arduino UNO imprimir el mensaje de error: “El pin GND debe conectarse a GND1 (3) o GND2 (4).”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir los pines que se están utilizando para la conexión. La impresión debe hacerse llamando a la función ModuloHC06 en el case 1 del menú del código que se ha desarrollado en el anterior paso.</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(moduloHC06)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesMontarModuloBluetoothHC06/CodigoGeneralizacion.png" alt="CodigoGeneralizacion">
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong> Seleccione e ingrese el número correcto de cada audio que corresponde al espacio del código faltante en la imagen: Número(______________)</p>
            <br>
            <AudioChecker/>
        </div>
        <div class="menu-lateral">
            <aside>
                <MenuCarro />
            </aside>
        </div>
    </div>
</template>

<script>
import AudioChecker from "@/components/ConstruccionCarroArduino/Fases/FaseMontajeArduinoUNO/MontarModuloBluetoothHC06/AudioCheckerMontarModuloBluetoothHC06.vue";
import MenuCarro from "@/components/MenuCarro.vue";

export default{
    components:{
        MenuCarro,
        AudioChecker
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

.centrada {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 45%;
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