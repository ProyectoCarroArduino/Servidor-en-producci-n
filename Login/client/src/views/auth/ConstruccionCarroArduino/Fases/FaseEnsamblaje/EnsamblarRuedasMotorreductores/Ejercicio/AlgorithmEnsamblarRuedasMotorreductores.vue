<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">Paso 4. Ensamblar ruedas a los motorreductores</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule un ensamblador de ruedas. El ensamblador deberá ensamblar <strong>todas</strong> las ruedas que el usuario solicite. 
        Para ello se debe tener en cuenta que por cada rueda ensamblada <strong>se va a necesitar específicamente una rueda de carro y un disco encoder</strong>.</p>
      <p class="texto-personalizado">El programa deberá <strong>solicitar al usuario</strong> el número de ruedas que se van a ensamblar, y el número de ruedas y discos encoder disponibles en bodega. 
        Al final el programa deberá <strong>imprimir</strong> el número de ruedas y de discos encoder que se han ensamblado. 
        Además, deberá <strong>imprimir</strong> las existencias de ruedas y discos encoder que quedaron en bodega después del proceso de ensamblaje.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>La cantidad de ruedas a ensamblar, ruedas y discos encoder disponibles deben ser variables del tipo entero (int).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entera llamada “ensambladorRuedas” que debe recibir la cantidad de ruedas que se quieren ensamblar, el número de ruedas y discos encoder disponibles en la bodega como parámetros.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo (for) que ensamble una rueda y un disco encoder y los descuente en cada iteración.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>En cada iteración se debe validar que el número de ruedas y discos encoder sea mayor a cero (0), si no es así imprimir el mensaje: “No hay materiales suficientes en bodega” y se debe terminar el ciclo.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>La función ensambladorRuedas debe retornar el número de ruedas ensambladas.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir el número de ruedas ensambladas y, ruedas y discos encoder que quedaron en bodega después del proceso de ensamblaje.</strong></p></li>
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
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarRuedasMotorreductores/Ejercicio/ImageCheckerEnsamblarRuedasMotorreductores.vue";
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