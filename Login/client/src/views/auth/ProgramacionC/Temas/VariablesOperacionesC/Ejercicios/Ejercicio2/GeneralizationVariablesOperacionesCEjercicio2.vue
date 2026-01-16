<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">4. Variables y operaciones</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que calcule el <strong>precio total</strong> de la compra de un producto.
        El cálculo de la compra debe solicitar dos datos al usuario: el precio del producto y la cantidad que se desea comprar.</p>
      <p class="texto-personalizado">Para obtener el <strong>precio total</strong>, se debe calcular el precio base de la compra y luego agregar el <strong>IVA</strong>, el cual corresponde al 21% del total. 
      Finalmente, este importe se <strong>sumará</strong> al precio base para obtener el <strong>total a pagar</strong>.</p>
      <p><span style="font-weight: bold;">Nota:</span> <strong>(usar solo variables de tipo double)</strong>.</p>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(main)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesVariablesOperacionesC/CodigoGeneralizacion3.png" alt="CodigoGeneralizacion">
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
import AudioChecker from "@/components/ProgramacionC/Temas/VariablesOperacionesC/Ejercicios/Ejercicio2/AudioCheckerVariablesOperacionesCEjercicio2.vue";
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