<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 2. Preparar la bornera tipo hembra para conexión</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de cuatro cables jumper tipo macho hembra a una bornera tipo hembra. Dos cables son <strong>rojos</strong> y otros dos son <strong>negros</strong>. La bornera tipo hembra tiene <strong>dos pines</strong>, 
        uno <strong>positivo</strong> para la conexión a la fuente de poder y el otro <strong>negativo</strong> para el polo a tierra.</p>
      <p class="texto-personalizado">El programa <strong>deberá asignar</strong> dos cables de color <strong>rojo</strong> y otros dos de color <strong>negro</strong>. Para la conexión correcta de los cables a los pines de la bornera tipo hembra, se debe <strong>validar</strong> 
      que el pin positivo tenga conectado <strong>dos cables rojos</strong> y el pin negativo <strong>dos cables de color negro</strong>, de lo contrario imprimir el mensaje: “Los cables no están bien conectados”.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué cables están conectados al pin positivo y al pin negativo.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada borneraHembra, la cual deberá recibir cuatro cables, debe validar que el pin positivo tenga conectado dos cables rojos y el pin negativo tenga conectados dos cables negros.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar cuatro variables de tipo cadena de carácter llamadas cableR1, cableR2, cableN1 y cableN2.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin positivo de la bornera hembra tiene conectados cables diferentes al rojo imprimir el mensaje de error: “Los cables conectados al pin positivo deben ser de color rojo”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin negativo de la bornera hembra tiene conectados cables diferentes al negro imprimir el mensaje de error: “Los cables conectados al pin negativo debe ser de color negro”. </strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir qué cables están conectados al pin positivo y al pin negativo, pero solo si los cables son los correctos para el funcionamiento, de lo contrario imprimir el mensaje: “Los cables no están conectados a sus respectivos pines”.</strong></p></li>
        </ul>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(borneraHembra)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesPrepararBorneraHembraConexion/CodigoGeneralizacion.png" alt="CodigoGeneralizacion">
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
import AudioChecker from "@/components/ConstruccionCarroArduino/Fases/FaseConectarFuentePoderCircuito/PrepararBorneraHembraConexion/Ejercicio/AudioCheckerPrepararBorneraHembraConexion.vue";
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