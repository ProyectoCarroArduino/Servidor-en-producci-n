<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
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
            <p class="texto-personalizado"><strong> Requisitos:</strong></p>
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
            <h3>Algoritmo:</h3>
            <br>
            <ImageChecker/>
        </div>
        <div class="align-left col-md-3">
            <div class="temas">
                <NavMenu />
            </div>
        </div>
    </div>
</template>

<script>
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseEnsamblaje/EnsamblarSoportesMotorreductores/Ejercicio/ImageCheckerEnsamblarSoportesMotorreductores.vue";
import NavMenu from "@/components/MenuCarro.vue";
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