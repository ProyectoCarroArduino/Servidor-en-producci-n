<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 1. Preparar cables de los motorreductores para la conexión al módulo L298N (puente H)</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el proceso de soldamiento de los pares de cables rojos y negros de los motorreductores. Es importante tener en cuenta que para soldar un cable, 
        <strong>se necesita</strong> un par de cables del mismo color y que estos <strong>deben estar preparados antes</strong> de que el proceso se realice.</p>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> al usuario el número de cables de color rojo de los motorreductores y de color negro que se quieren preparar. Para el proceso de soldamiento <strong>un par de cables son necesarios</strong>.
      Sin embargo, se <strong>debe validar</strong> que los dos cables sean del mismo color, y que también, el número de pares de cables soldados <strong>sea exactamente 2 rojos y  2 negros</strong> para el correcto funcionamiento. 
      de lo contrario imprimir el mensaje: “Error: se debe soldar exactamente 2 pares de cables con la cantidad de cables preparados para el correcto funcionamiento.”.</p>
      <p class="texto-personalizado">Al final, el programa <strong>deberá imprimir</strong> el siguiente mensaje: “Validación correcta: es posible soldar exactamente 2 pares de cables rojos y 2 pares de cables negros.”</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada soldarCables, la cual deberá recibir el número de cables que se quieren preparar, preguntar al usuario cuántos pares de cables rojos y negros se quieren soldar y, debe validar el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar cuatro variables de tipo entero (int) llamadas cablesRojos, cablesNegros, paresRojos y paresNegros.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que el número de pares de cables soldados sea exactamente 2 rojos y 2 negros para el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el número de pares de cables soldados no es exactamente 2 rojos y 2 negros imprimir el siguiente mensaje: "Error: se debe soldar exactamente 2 pares de cables con la cantidad de cables preparados para el correcto funcionamiento.”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación es correcta, al final el programa deberá imprimir el siguiente mensaje: "Validación correcta: es posible soldar exactamente 2 pares de cables rojos y 2 pares de cables negros.”.</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(soldarCables)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesPrepararCablesConexionModuloL298N/CodigoGeneralizacion.png" alt="CodigoGeneralizacion">
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
import AudioChecker from "@/components/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/PrepararCablesConexionModuloL298N/Ejercicio/AudioCheckerPrepararCablesConexionModuloL298N.vue";
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