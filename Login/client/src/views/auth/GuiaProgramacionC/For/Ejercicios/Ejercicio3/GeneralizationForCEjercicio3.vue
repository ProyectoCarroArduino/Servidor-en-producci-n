<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">5. Estructuras de control y repetición</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que muestre una escalera de 4 filas (la fila 1 tiene el número 1, la fila 2 los números 1 2, la fila 3 los números 1 2 3 y la fila 4 los números 1 2 3 4, cada número seguido de un espacio), sume todos los números mostrados e indique si la suma alcanza una meta. Declare las variables enteras total con el valor 0 y meta con el valor 20, en ese orden. Use dos ciclos for anidados: el externo con el contador fila, desde 1 mientras fila sea menor o igual que 4, con fila++; el interno con el contador columna, desde 1 mientras columna sea menor o igual que fila, con columna++. En el ciclo interno, muestre columna seguido de un espacio (printf con "%d ") y luego súmela a total con total += columna. Al terminar cada fila (después del ciclo interno y dentro del externo), muestre un salto de línea con printf("\n"). Después de los ciclos, muestre Total: X, donde X es total. Luego, con un if else: si total es mayor o igual que meta, muestre Meta alcanzada; si no, muestre Faltan Y para la meta, donde Y es meta - total. Estos dos últimos mensajes terminan en \n. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las variables declaradas al inicio de main con su valor fijo, llaves en todos los bloques y return 0; al final. Los textos se escriben sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">1 
1 2 
1 2 3 
1 2 3 4 
Total: 20
Meta alcanzada</pre>
      <p class="texto-personalizado"><em>Las cuatro filas de la escalera terminan con un espacio, porque cada número se imprime seguido de un espacio.</em></p>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(main)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesFor/Ej3_Gen_Codigo.png" alt="CodigoGeneralizacion">
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
import AudioChecker from "@/components/GuiaProgramacionC/For/Ejercicios/Ejercicio3/AudioCheckerForCEjercicio3.vue";
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