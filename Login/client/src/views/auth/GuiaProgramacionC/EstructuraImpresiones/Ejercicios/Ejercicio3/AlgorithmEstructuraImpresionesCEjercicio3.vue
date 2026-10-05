<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">3. Estructura de un programa e impresiones por pantalla</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que muestre la ficha de un proyecto en cinco líneas, usando exactamente seis printf en este orden, cada uno terminado en \n salvo el quinto: (1) el título ==== FICHA DEL PROYECTO ====; (2) Archivo:, una tabulación (\t) y ficha.c; (3) Carpeta:, una tabulación y la ruta C:\Proyectos\Guia, con sus barras invertidas visibles en pantalla (use \\); (4) Mensaje:, una tabulación y el texto Compilado sin errores entre comillas dobles visibles (use \"); (5) Consejo: y una tabulación, sin \n; (6) un printf con dos textos seguidos en la misma línea de código: el primero es Usa, un espacio, los caracteres \n visibles en pantalla (escritos como \\n) y otro espacio; el segundo es para saltar de linea seguido del salto de línea \n. Las líneas 5 y 6 forman juntas la última línea de la salida. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las instrucciones dentro de las llaves de main y return 0; al final. El programa no usa variables y los textos se escriben sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">==== FICHA DEL PROYECTO ====
Archivo:        ficha.c
Carpeta:        C:\Proyectos\Guia
Mensaje:        "Compilado sin errores"
Consejo:        Usa \n para saltar de linea</pre>
      <p class="texto-personalizado"><em>Entre la etiqueta y el dato hay una tabulación (\t); en la consola se ve como un espacio amplio. Aquí se muestra con espacios hasta la columna 17.</em></p>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <p class="texto-personalizado"><strong>Nota:</strong> En PSeInt, Escribir equivale a un printf terminado en \n y Escribir Sin Saltar equivale a un printf sin \n. Escribir con varios textos separados por coma los muestra unidos, como dos textos seguidos en C. PSeInt no tiene secuencias de escape: [TAB] indica que se pulsa la tecla Tab dentro del texto, la barra invertida se escribe una sola vez y se muestra tal cual (por eso \n aparece en pantalla), y para mostrar comillas dobles el texto se encierra entre comillas simples.</p>
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
import ImageChecker from "@/components/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio3/ImageCheckerEstructuraImpresionesCEjercicio3.vue";
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