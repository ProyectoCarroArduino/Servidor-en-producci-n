<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">7. Funciones</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C con dos funciones, en este orden: (1) una función int llamada esAprobado, que reciba el parámetro entero nota y devuelva 1 si nota es mayor o igual que 60 (con un if que haga return 1;) y 0 en otro caso (con return 0; después del if); (2) una función void llamada mostrarResultado, que reciba dos parámetros enteros, numero y nota, en ese orden, y con un if else que use esAprobado(nota) como condición muestre Estudiante X: Y - Aprobado o Estudiante X: Y - Reprobado, donde X es numero e Y es nota. En main, llame a mostrarResultado tres veces: con 1 y 75, con 2 y 48, y con 3 y 60. Use la estructura vista en la teoría: biblioteca stdio.h, los prototipos antes de main, main con return 0; al final y las definiciones de las funciones después de main, en el mismo orden de los prototipos. Use llaves en todos los bloques, termine cada mensaje en \n y escriba los textos sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Estudiante 1: 75 - Aprobado
Estudiante 2: 48 - Reprobado
Estudiante 3: 60 - Aprobado</pre>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <p class="texto-personalizado"><strong>Nota:</strong> En PSeInt, Funcion nombre(parametros) … FinFuncion define una función que no devuelve valor (como void), y Funcion resultado &lt;- nombre(parametros) … FinFuncion define una que devuelve el valor de la variable resultado al terminar (como return). Las funciones se escriben después de FinAlgoritmo y no necesitan prototipo. Las llamadas se escriben igual que en C, pero sin punto y coma. Escribir con comas muestra textos y valores juntos y salta de línea; &lt;- equivale a la asignación =. En PSeInt la función no termina en medio, así que esAprobado empieza con aprobado &lt;- 0 y lo cambia a 1 si la nota alcanza; el resultado es el mismo que con los dos return de C. Si … Entonces … SiNo … FinSi equivale a if … else.</p>
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
import ImageChecker from "@/components/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio2/ImageCheckerFuncionesConParametrosCEjercicio2.vue";
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