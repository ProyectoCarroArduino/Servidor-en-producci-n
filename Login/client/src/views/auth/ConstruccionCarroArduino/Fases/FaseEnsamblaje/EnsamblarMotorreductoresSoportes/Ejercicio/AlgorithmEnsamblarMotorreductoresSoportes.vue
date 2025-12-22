<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 3. Ensamblar motorreductores a los soportes</h1>
        <br>
        <br>
        <h2>Ejercicio:</h2>
        <br>
        <p class="texto-personalizado">Se necesita un programa en C que simule un ensamblador de motorreductores a sus soportes. El ensamblador deberá ensamblar <strong>cuatro</strong> motorreductores a sus soportes, <strong>uno por cada motorreductor</strong>. 
            Para ello se debe tener en cuenta que por cada motorreductor que se requiere ensamblar a su soporte <strong>se va a necesitar específicamente un tornillo largo y una tuerca pequeña</strong>. En el proceso de ensamblaje del motorreductor al soporte este se debe ajustar, 
            es por eso que <strong>mientras</strong> se atornilla el tornillo largo la tuerca pequeña se debe ajustar. </p>
        <p class="texto-personalizado">El programa deberá <strong>solicitar al usuario</strong> el número de veces que se va a ensamblar un motorreductor y su soporte, también deberá <strong>proveer</strong> el número de tornillos largos y tuercas pequeñas que se requieran para el proceso de ensamblaje. 
            Al final el programa deberá <strong>imprimir</strong> el número de veces que se ha utilizado el ensamblador.</p>
        <br>
        <p class="texto-personalizado"><strong>Requisitos:</strong></p>
        <ul>
            <li><p class="texto-personalizado"> <strong>Los tornillos largos y tuercas pequeñas deben ser variables del tipo entero (int).</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entera llamada “Ensamblador” que debe recibir el número de veces que se va a utilizar el ensamblador, el número de tornillos largos y tuercas pequeñas como parámetros.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Implementar un ciclo (do while) que atornille un tornillo largo y ajuste una tuerca pequeña cada vez que se use el ensamblador.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>En cada itereración se debe validar que el número de tornillos largos y tuercas pequeñas sea mayor a cero (0), si no es así imprimir el mensaje: “Materiales agotados en stock” y descuente en uno el número de veces que el ensamblador hizo el proceso de ensamblaje.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>En cada iteración, decrementar en uno los tornillos largos y las tuercas pequeñas.</strong></p></li>
            <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el número de veces que se ha utilizado o ha realizado el proceso el ensamblador.</strong></p></li>
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
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarMotorreductoresSoportes/Ejercicio/ImageCheckerEnsamblarMotorreductoresSoportes.vue";
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