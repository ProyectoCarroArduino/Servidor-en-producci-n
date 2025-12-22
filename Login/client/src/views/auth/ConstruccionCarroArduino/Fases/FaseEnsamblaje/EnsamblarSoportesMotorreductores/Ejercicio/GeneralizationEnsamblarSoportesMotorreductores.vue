<template>
    <div id="layout-general">
        <main class="contenido">
            <h1 class="text-center">Paso 2. Ensamblar soportes de los motorreductores al chasis</h1>
            <br>
            <br>
            <h2>Ejercicio:</h2>
            <br>
            <p class="texto-personalizado">Se necesita un programa en C que simule el ajuste de un soporte para motorreductor al chasis. 
                Para ello se debe tener en cuenta que para atornillar el soporte <strong>se necesitan exactamente dos tornillos y dos tuercas</strong>, y que cada tornillo debe tener una tuerca correspondiente para ser ajustada.
                El programa deberá <strong>solicitar al usuario</strong> el número de tornillos y tuercas que se necesitan para ajustar el soporte. Finalmente, el programa deberá <strong>imprimir</strong>
                cuántas veces se ha atornillado un tornillo y se ha ajustado una tuerca.</p>
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong></p>
            <ul>
                <li><p class="texto-personalizado"> <strong>Los tornillos y tuercas deben ser variables del tipo entero (int).</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo int llamada "ajustarSoporte" que reciba el número de tornillos y tuercas como parámetros.</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Validar que el número de tuercas y tornillos sea exactamente dos (2), si no es así imprimir el siguiente mensaje: "Error: debe ingresar exactamente 2 tornillos y 2 tuercas".</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Implementar un ciclo (for) que itere, y en cada iteración atornille un tornillo y ajuste una tuerca.</strong></p></li>
                <li><p class="texto-personalizado"> <strong>En cada iteración, imprimir el siguiente mensaje: "Se ha atornillado n tornillo(s) y ajustado n tuerca(s)". Entiéndase (n) como el número de veces que se ha realizado el proceso.</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el número de veces que se ha atornillado un tornillo y se ha ajustado una tuerca.</strong></p></li>
                </ul>
            <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(ajustarSoporte)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesEnsamblarSoportesMotorreductores/CodigoGeneralizacion.png" alt="CodigoGeneralizacion">
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong> Seleccione e ingrese el número correcto de cada audio que corresponde al espacio del código faltante en la imagen: Número(______________)</p>
            <br>
            <AudioChecker/>
        </main>
        <aside class="menu-lateral">
            <div>
                <MenuCarro />
            </div>
        </aside>
    </div>
</template>

<script>
import AudioChecker from "@/components/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/AudioCheckerEnsamblarSoportesMotorreductores.vue";
import MenuCarro from "@/components/MenuCarro.vue";

export default{
    components:{
        MenuCarro,
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