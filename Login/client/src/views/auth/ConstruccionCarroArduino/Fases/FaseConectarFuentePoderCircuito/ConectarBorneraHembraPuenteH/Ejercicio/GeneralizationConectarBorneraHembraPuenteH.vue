<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 3. Conectar bornera tipo hembra al puente H (módulo L298N)</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de tres cables al pin GND del puente H (módulo L298N). Es importante tener en cuenta que el puente H <strong>solo tiene un</strong> pin GND, por lo que los tres cables deberán ir conectados al <strong>mismo pin</strong>.</p>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> el número de cables que se quieren conectar al pin GND del puente H (módulo L298N). Para la conexión de los cables y el funcionamiento correcto del pin GND, se debe <strong>validar</strong> que este tenga conectado tres cables,
       de lo contrario imprimir el mensaje: “ERROR: El pin GND debe tener exactamente 3 cables conectados”.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> el total de cables conectados al pin GND del puente H (módulo L298N).</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada puenteH, la cual deberá recibir el número de cables que se quiere conectar al pin GND y debe validar que el pin GND tenga conectados los cables correspondientes.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar dos variables de tipo entero (int) llamadas numeroCables y conexionesGND.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un arreglo de tipo entero llamado cables.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo for que permita llenar el arreglo siguiendo la siguiente condición: Cada ciclo se debe preguntar si se quiere hacer la conexión de un cable o no. Para conectar el cable se debe digitar 1 y para no conectarlo se debe digitar 0.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el número de conexiones en el pin GND del puente H (módulo L298N) tiene más de tres cables conectados imprimir el mensaje de error: “ERROR: El pin GND debe tener exactamente 3 cables conectados”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el total de cables conectados al pin GND del puente H (módulo L298N) y si se cumple la condición para el funcionamiento correcto imprimir el mensaje: “Pin GND VÁLIDO: exactamente 3 cables conectados”.</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(puenteH)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesConectarBorneraHembraPuenteH/CodigoGeneralizacion.png" alt="CodigoGeneralizacion">
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong> Seleccione e ingrese el número correcto de cada audio que corresponde al espacio del código faltante en la imagen: Número(______________)</p>
            <br>
            <AudioChecker/>
        </main>
        <aside class="menu-lateral">
            <div>
                <MenuCarro />
            </div>
        </aside>
    </div>
</template>

<script>
import AudioChecker from "@/components/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarBorneraHembraPuenteH/Ejercicio/AudioCheckerConectarBorneraHembraPuenteH.vue";
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