<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">7. Funciones</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Una tienda registra las ventas de 5 días. Hacer un programa en C con tres funciones que reciben el arreglo como parámetro, en este orden: (1) int sumarVentas(int datos[], int tamano), que suma los elementos con un acumulador suma que empieza en 0 y lo devuelve; (2) int buscarMayor(int datos[], int tamano), que toma datos[0] como mayor provisional, recorre desde i = 1 comparando con un if y devuelve el mayor; (3) void aplicarBono(int datos[], int tamano, int bono), que suma bono a cada elemento con datos[i] += bono. En main, declare el arreglo entero ventas de 5 elementos con los valores 120, 85, 200, 150 y 95, y en este orden: muestre Total: X con sumarVentas(ventas, 5) dentro del printf; muestre Mayor: Y con buscarMayor(ventas, 5) dentro del printf; llame a aplicarBono(ventas, 5, 10); muestre Ventas con bono: (sin \n) y, con un for de i = 0 mientras i &lt; 5, cada venta seguida de un espacio (printf con "%d "); muestre un salto de línea con printf("\n"), y por último muestre Total con bono: Z con sumarVentas(ventas, 5) dentro del printf. Todos los ciclos usan el contador i. Use la estructura vista en la teoría: biblioteca stdio.h, los prototipos antes de main, main con return 0; al final y las definiciones de las funciones después de main, en el mismo orden de los prototipos. Use llaves en todos los bloques, termine cada mensaje en \n y escriba los textos sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Total: 650
Mayor: 200
Ventas con bono: 130 95 210 160 105 
Total con bono: 700</pre>
      <p class="texto-personalizado"><em>La tercera línea termina con un espacio después del 105, porque cada venta se imprime seguida de un espacio.</em></p>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <p class="texto-personalizado"><strong>Nota:</strong> En PSeInt, Funcion nombre(parametros) … FinFuncion define una función que no devuelve valor (como void), y Funcion resultado &lt;- nombre(parametros) … FinFuncion define una que devuelve el valor de la variable resultado al terminar (como return). Las funciones se escriben después de FinAlgoritmo y no necesitan prototipo. Las llamadas se escriben igual que en C, pero sin punto y coma. Escribir con comas muestra textos y valores juntos y salta de línea; &lt;- equivale a la asignación =. El arreglo se crea con Dimension y se le asigna cada elemento (para que los índices empiecen en 0, como en C, active en el perfil de PSeInt la opción «Utilizar índices en arreglos y cadenas en base 0»). Por Referencia indica que la función trabaja sobre el arreglo original, como ocurre en C con los arreglos. Para … Hasta tamano - 1 equivale a i &lt; tamano. Escribir Sin Saltar no salta de línea y Escribir "" solo salta de línea.</p>
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
import ImageChecker from "@/components/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio3/ImageCheckerFuncionesConParametrosCEjercicio3.vue";
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