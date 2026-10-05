<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">3. Estructura de un programa e impresiones por pantalla</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que muestre la frase del día en tres líneas, usando exactamente cuatro printf en este orden: (1) un printf que muestre el título === FRASE DEL DIA === seguido de \n; (2) un printf que muestre la frase Programar es practicar cada dia encerrada entre comillas dobles, que deben verse en pantalla (use \"). Este printf se escribe en dos líneas de código, con dos textos seguidos: el primero contiene las comillas de apertura y Programar es (con un espacio al final) y el segundo contiene practicar cada dia, las comillas de cierre y \n; (3) un printf que muestre Autor: (con un espacio después de los dos puntos y sin \n); (4) un printf que muestre Anonimo seguido de \n. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las instrucciones dentro de las llaves de main y return 0; al final. El programa no usa variables y los textos se escriben sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">=== FRASE DEL DIA ===
"Programar es practicar cada dia"
Autor: Anonimo</pre>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(main)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesEstructuraEImpresiones/Ej2_Gen_Codigo.png" alt="CodigoGeneralizacion">
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
import AudioChecker from "@/components/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio2/AudioCheckerEstructuraImpresionesCEjercicio2.vue";
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