<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">7.1 Funciones (sin parámetros)</h1>
            <br>
            <h3>Ejemplo 1:</h3>
            <br>
            <p class="texto-personalizado">
            Hacer un programa que <strong>imprima</strong> el siguiente mensaje: "Esta es la prueba de laboratorio número: 48". 
            El programa deberá usar funciones, de tal forma que el main llame a la función <strong>(laboratorio)</strong> e imrprima
            el mensaje que se solicita.
            </p>
            <br>
            <h3>Algoritmo:</h3>
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
import ImageChecker from "@/components/ImageCheckerParameterlessFunctionEj.vue";
import NavMenu from "../../components/Menu.vue";
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