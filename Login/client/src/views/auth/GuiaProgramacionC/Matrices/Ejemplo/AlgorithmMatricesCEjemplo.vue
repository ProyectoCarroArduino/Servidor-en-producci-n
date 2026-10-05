<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">6. Estructuras de datos</h1>
      <br>
      <br>
      <h3>Ejemplo:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que declare la matriz entera puntos de 2 filas y 3 columnas, con los valores 4, 7 y 2 en la fila 0 y 5, 1 y 9 en la fila 1, y muestre dos de sus elementos: primero Elemento [1][1]: X, donde X es el valor de puntos[1][1], y después Elemento [1][2]: Y, donde Y es el valor de puntos[1][2]. Cada mensaje se muestra con printf, %d y \n. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las variables y la matriz declaradas al inicio de main con sus valores, llaves en todos los bloques y return 0; al final. Los textos se escriben sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Elemento [1][1]: 1
Elemento [1][2]: 9</pre>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <p class="texto-personalizado"><strong>Nota:</strong> En PSeInt la matriz se crea con Dimension nombre[filas,columnas] y sus elementos se escriben con los dos índices separados por coma en un solo par de corchetes: puntos[1,2] equivale a puntos[1][2] en C. PSeInt no permite dar todos los valores al declarar, así que se asigna cada elemento (los de una misma fila van en una línea, separados por punto y coma). Para que los índices empiecen en 0, como en C, active en el perfil de PSeInt la opción «Utilizar índices en arreglos y cadenas en base 0». Escribir con una coma y el elemento muestra su valor y salta de línea.</p>
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
import ImageChecker from "@/components/GuiaProgramacionC/Matrices/Ejemplo/ImageCheckerMatricesCEjemplo.vue";
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