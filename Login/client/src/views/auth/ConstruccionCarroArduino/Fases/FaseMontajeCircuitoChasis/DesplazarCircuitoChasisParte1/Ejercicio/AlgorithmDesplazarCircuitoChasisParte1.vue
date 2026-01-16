<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 2. Desplazar circuito al chasis parte 1</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el proceso de ordenar los siguientes componentes: 1. Bornera tipo hembra, 2. Módulo L298N (puente H), 3. Portapilas modelo 18650, 4. Bornera tipo macho. 
        Es importante tener en cuenta que el <strong>orden correcto de los componentes debe ser</strong>:</p>
      <ul>
          <li><p class="texto-personalizado"> <strong>1: Portapilas modelo 18650.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>2: Bornera tipo macho.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>3. Bornera tipo hembra</strong></p></li>
          <li><p class="texto-personalizado"> <strong>4. Módulo L298N (puente H).</strong></p></li>
      </ul>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> al usuario el orden de los componentes. Se <strong>debe validar</strong> que el orden de los componentes sea el correcto, de lo contrario imprimir el mensaje: "Orden de ubicación incorrecto... ".</p>
      <p class="texto-personalizado">Al final, el programa <strong>deberá imprimir</strong> el siguiente mensaje: "Orden de ubicación adecuado!"</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Se debe implementar una función prototipo de tipo void llamada desplazarCircuito.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada desplazarCircuito, la cual deberá recibir el orden de los componentes que el usuario ha seleccionado y debe validar el correcto funcionamiento.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un arreglo de tipo entero (int) llamado ordenUbicar.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo for que permita asignar el orden de los componentes.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que el orden de los componentes sea el siguiente: 1. Portapilas modelo 18650, 2. Bornera tipo macho, 3. Bornera tipo hembra, 4. Módulo L298N (puente H).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación del orden es incorrecta imprimir el siguiente mensaje: "Orden de ubicación incorrecto...".</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación es correcta, al final el programa deberá imprimir el siguiente mensaje: "Orden de ubicación adecuado!”.</strong></p></li>
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
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseMontajeCircuitoChasis/DesplazarCircuitoChasisParte1/Ejercicio/ImageCheckerDesplazarCircuitoChasisParte1.vue";
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