<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">6. Estructuras de datos</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">En un torneo, 3 jugadores (filas) juegan 4 rondas (columnas). Hacer un programa en C que declare la matriz entera puntos de 3 filas y 4 columnas, con los valores 10, 15, 8, 12 en la fila 0; 14, 9, 11, 16 en la fila 1, y 7, 13, 12, 10 en la fila 2. Declare también, en este orden, las variables enteras mayor con el valor de puntos[0][0], filaMayor con 0 y columnaMayor con 0. Primero, muestre el total de cada ronda (suma por columna): un ciclo for externo con el contador j para las columnas (desde 0 mientras j &lt; 4) y, dentro de él, declare int sumaRonda = 0; y un ciclo interno con el contador i para las filas (desde 0 mientras i &lt; 3) que haga sumaRonda += puntos[i][j]. Al terminar el ciclo interno muestre Ronda X: Y puntos, donde X es j + 1 e Y es sumaRonda. Después, busque el mayor puntaje con otros dos ciclos anidados: el externo con i para las filas (i &lt; 3) y el interno con j para las columnas (j &lt; 4); si puntos[i][j] es mayor que mayor, guarde el valor en mayor, la fila en filaMayor y la columna en columnaMayor, en ese orden. Al final muestre Mejor puntaje: M (jugador F, ronda C), donde M es mayor, F es filaMayor + 1 y C es columnaMayor + 1. Cada mensaje termina en \n. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las variables y la matriz declaradas al inicio de main con sus valores, llaves en todos los bloques y return 0; al final. Los textos se escriben sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Ronda 1: 31 puntos
Ronda 2: 37 puntos
Ronda 3: 31 puntos
Ronda 4: 38 puntos
Mejor puntaje: 16 (jugador 2, ronda 4)</pre>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(main)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesMatrices/Ej3_Gen_Codigo.png" alt="CodigoGeneralizacion">
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong> Seleccione e ingrese el número correcto de cada audio que corresponde al espacio del código faltante en la imagen: Número(______________)</p>
            <br>
            <AudioChecker/>
        </main>
        <aside class="menu-lateral">
            <div>
                <Menu />
            </div>
        </aside>
    </div>
</template>

<script>
import AudioChecker from "@/components/GuiaProgramacionC/Matrices/Ejercicios/Ejercicio3/AudioCheckerMatricesCEjercicio3.vue";
import Menu from "@/components/Menu.vue";

export default{
    components:{
        Menu,
        AudioChecker
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

.centrada {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 45%;
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