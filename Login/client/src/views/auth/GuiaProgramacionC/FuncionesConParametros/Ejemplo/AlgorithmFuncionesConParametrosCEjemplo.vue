<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">7. Funciones</h1>
      <br>
      <br>
      <h3>Ejemplo:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C con una función void llamada mostrarDoble, que reciba un parámetro entero llamado numero y muestre El doble de X es Y, donde X es numero e Y es numero * 2 (calculado dentro del printf). En main, llame a la función dos veces: primero con el argumento 4 y después con el argumento 9. Use la estructura vista en la teoría: biblioteca stdio.h, los prototipos antes de main, main con return 0; al final y las definiciones de las funciones después de main, en el mismo orden de los prototipos. Use llaves en todos los bloques, termine cada mensaje en \n y escriba los textos sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">El doble de 4 es 8
El doble de 9 es 18</pre>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <p class="texto-personalizado"><strong>Nota:</strong> En PSeInt, Funcion nombre(parametros) … FinFuncion define una función que no devuelve valor (como void), y Funcion resultado &lt;- nombre(parametros) … FinFuncion define una que devuelve el valor de la variable resultado al terminar (como return). Las funciones se escriben después de FinAlgoritmo y no necesitan prototipo. Las llamadas se escriben igual que en C, pero sin punto y coma. Escribir con comas muestra textos y valores juntos y salta de línea; &lt;- equivale a la asignación =.</p>
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
import ImageChecker from "@/components/GuiaProgramacionC/FuncionesConParametros/Ejemplo/ImageCheckerFuncionesConParametrosCEjemplo.vue";
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