<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">6.1 Arreglos (Arrays)</h1>
            <br>
            <h3>Ejemplo 1:</h3>
            <br>
            <p class="texto-personalizado">
            Hacer un programa que <strong>solicite</strong> y almacene en una lista los siguientes nombres: Juan, Camila y Chovy. 
            El programa deberá imprimir por pantalla los nombres en el orden dado y los nombres no deben ser solicitados al usuario.
            </p>
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta la teoria sobre los <strong>arreglos</strong> generalice el paso a paso de la declaración de un <strong>arreglo</strong> para el problema:</p>
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
import AudioChecker from "@/components/AudioCheckerArrayEj.vue";
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