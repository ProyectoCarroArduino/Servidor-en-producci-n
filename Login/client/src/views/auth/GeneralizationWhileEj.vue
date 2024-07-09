<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">5.4 Ciclo while</h1>
            <h3>Ejemplo 1:</h3>
            <br>
            <p class="texto-personalizado">
            Hacer un programa que <strong>imprima</strong> por consola los numeros del 1 al 10 utilizando la estructura del ciclo while.
            </p>
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta la teoria sobre el <strong>ciclo while</strong> generalice el paso a paso de la sintaxis del <strong>ciclo while</strong> para el problema:</p>
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong> ingrese el orden correcto de los audios</p>
            <br>
            <AudioChecker/>
        </div>
        <div class="align-left col-md-3">
            <div class="temas">
                <Menu />
            </div>
        </div>
    </div>
</template>

<script>
import AudioChecker from "@/components/AudioCheckerWhileEj.vue";
import Menu from "../../components/Menu.vue";
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