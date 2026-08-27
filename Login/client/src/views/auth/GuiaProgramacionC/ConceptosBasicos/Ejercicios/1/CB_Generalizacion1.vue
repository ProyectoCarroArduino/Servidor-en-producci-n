<template>
    <div id="layout-general" class="layout-general">
      <main class="contenido">
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
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada “arduinoUNO” donde se maneje toda la simulación de la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una variable tipo entera (int) llamada opcion.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Se debe de mostrar un menú que permita la visualización de los componentes que se van a montar a la placa y la opción de salir.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>El menú debe mostrar un mensaje de error que diga lo siguiente: “Opción inválida. Saliendo...” si se ha seleccionado una opción inválida.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el nombre del componente que el usuario ha seleccionado para montar a la placa Arduino UNO.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>No se debe solicitar los pines de conexión ni validar la asignación de estos para un correcto funcionamiento en el ejercicio (por el momento).</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(arduinoUNO)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesMontarArduinoUNOSoporte/CodigoGeneralizacion.png" alt="CodigoGeneralizacion">
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong> Seleccione e ingrese el número correcto de cada audio que corresponde al espacio del código faltante en la imagen: Número(______________)</p>
            <br>
            <AudioChecker/>
        </main>
        <aside class="menu-lateral">
            <div>
                <Menu />
            </div>
        </aside>
    </div>
</template>

<script>
import AudioChecker from "@/views/auth/GuiaProgramacionC/ConceptosBasicos/Ejercicios/1/CB_AudioChecker1.vue";
import Menu from "../../../../../../components/Menu.vue";

export default{
    components:{
        Menu,
        AudioChecker
    },
}
</script >



<style >

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
