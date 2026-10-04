<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">5.2 Ciclo while</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que permita <strong>evaluar</strong> las notas de <strong>5</strong> estudiantes para un examen. El programa deberá <strong>solicitar</strong> ingresar la nota correspondiente de cada estudiante,
         esta se <strong>asigna</strong> de un valor de 0 a 5. Si la nota de un estudiante es <strong>menor</strong> de 3 el programa deberá imprimir el mensaje: <strong>“Resultado: Reprobado.”</strong>, 
         por el contrario si la nota de un estudiante es <strong>mayor</strong> de 3 el programa deberá imprimir el mensaje: <strong>“Resultado: Aprobado!”</strong>.</p>
      <p class="texto-personalizado">Al finalizar el programa deberá indicar cuántos estudiantes han <strong>aprobado</strong> el examen y cuántos han <strong>reprobado</strong> este.</p>
      <br>
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
import ImageChecker from "@/components/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/WhileC/Ejercicios/Ejercicio2/ImageCheckerWhileCEjercicio2.vue";
import NavMenu from "@/components/Menu.vue";
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