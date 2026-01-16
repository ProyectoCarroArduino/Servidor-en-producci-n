<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">5.2 Switch case</h1>
      <br>
      <br>
      <h3>Ejercicio 1:</h3>
      <br>
      <p class="texto-personalizado">Elabore un programa en lenguaje C que permita al usuario realizar operaciones aritméticas básicas. El programa deberá mostrar un <strong>menú</strong> con las siguientes opciones:</p>
      <ul>
        <li><strong>1: Sumar</strong></li>
        <li><strong>2: Restar</strong></li>
        <li><strong>3: Multiplicar</strong></li>
        <li><strong>4: Dividir</strong></li>
      </ul>
      <p class="texto-personalizado">El usuario <strong>deberá seleccionar</strong> una opción del menú e ingresar dos números. El programa deberá <strong>realizar la operación</strong> correspondiente según la opción seleccionada y mostrar el resultado en pantalla.</p>
      <p><span style="font-weight: bold;">Nota:</span> El programa <strong>debe</strong> utilizar la estructura condicional para validar que la opción ingresada sea valida y que el segundo número <strong>no sea</strong> cero (0) .</p>
      <p><span style="font-weight: bold;">Nota2:</span> El default <strong>no debe</strong> contener break.</p>
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
import ImageChecker from "@/components/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio1/ImageCheckerSwitchCaseCEjercicio1.vue";
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