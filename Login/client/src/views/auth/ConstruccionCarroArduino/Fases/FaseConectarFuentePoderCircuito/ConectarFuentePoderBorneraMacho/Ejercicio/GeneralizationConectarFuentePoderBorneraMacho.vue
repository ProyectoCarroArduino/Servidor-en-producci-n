<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 1. Conectar la fuente de poder a la bornera macho</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de dos cables de un portapilas a una bornera tipo macho. El portapilas tiene dos cables, uno <strong>rojo</strong> de potencia y el otro <strong>negro</strong> de polo a tierra(GND). La bornera tipo macho tiene dos pines, 
      uno <strong>positivo</strong> para la conexión a la fuente de poder y el otro <strong>negativo</strong> para el polo a tierra.</p>
      <p class="texto-personalizado">El programa deberá <strong>asignar</strong> un cable de color rojo y otro de color negro. Para la conexión correcta de los cables a los pines de la bornera tipo macho, se debe <strong>validar</strong> que el pin positivo tenga conectado el cable rojo y el pin negativo el cable de color negro, 
      de lo contrario imprimir el mensaje: “Los cables no están bien conectados”.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué cable está conectado al pin positivo y al pin negativo.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada borneraMacho, la cual deberá recibir dos cables, debe validar que el pin positivo tenga conectado el cable rojo y el pin negativo tenga conectado el cable negro.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar dos variables de tipo cadena de carácter llamadas cable1 y cable2.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin positivo de la bornera macho tiene conectado un cable diferente al rojo imprimir el mensaje de error: “El cable conectado al pin positivo debe ser de color rojo”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin negativo de la bornera macho tiene conectado un cable diferente al negro imprimir el mensaje de error: “El cable conectado al pin negativo debe ser de color negro”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir qué cable está conectado al pin positivo y al pin negativo, pero solo si los cables son los correctos para el funcionamiento, de lo contrario imprimir el mensaje: “Los cables no están conectados a sus respectivos pines”.</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(borneraMacho)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesConectarFuentePoderBorneraMacho/CodigoGeneralizacion.png" alt="CodigoGeneralizacion">
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
import AudioChecker from "@/components/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/ConectarFuentePoderBorneraMacho/Ejercicio/AudioCheckerConectarFuentePoderBorneraMacho.vue";
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