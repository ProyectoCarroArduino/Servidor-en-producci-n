<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">5. Estructuras de control y repetición</h1>
      <br>
      <br>
      <h3>Ejercicio 1:</h3>
      <br>
      <p class="texto-personalizado">Una persona lee 15 páginas cada día. Hacer un programa en C que muestre cuántas páginas lleva leídas al final de cada uno de 5 días y el total. Declare las variables enteras paginasPorDia con el valor 15 y total con el valor 0 (acumulador), en ese orden. Use un ciclo for con el contador dia, desde 1 mientras dia sea menor o igual que 5, con dia++. En cada vuelta, primero sume paginasPorDia a total con total += paginasPorDia y luego muestre Dia X: Y paginas, donde X es dia e Y es total. Después del ciclo, muestre Total leido: Y paginas, donde Y es total. Cada mensaje termina en \n. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las variables declaradas al inicio de main con su valor fijo, llaves en todos los bloques y return 0; al final. Los textos se escriben sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Dia 1: 15 paginas
Dia 2: 30 paginas
Dia 3: 45 paginas
Dia 4: 60 paginas
Dia 5: 75 paginas
Total leido: 75 paginas</pre>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <p class="texto-personalizado"><strong>Nota:</strong> En PSeInt, Para i &lt;- inicio Hasta fin Con Paso n Hacer … FinPara equivale a un for que va de inicio a fin (incluido) sumando n al contador en cada vuelta. Escribir con una coma y la variable muestra su valor (como %d) y salta de línea; &lt;- equivale a la asignación =.</p>
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
import ImageChecker from "@/components/GuiaProgramacionC/For/Ejercicios/Ejercicio1/ImageCheckerForCEjercicio1.vue";
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