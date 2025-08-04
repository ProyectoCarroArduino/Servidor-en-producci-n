<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">4. Variables y operaciones</h1>
            <h3>Ejemplo 2:</h3>
            <br>
            <p class="texto-personalizado">Hacer un programa que calcule el <strong>área</strong> de un triángulo de base 12 cm y altura 8 cm <strong>(no usar fórmula de Herón)</strong>.</p>
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
import ImageChecker from "@/components/ImageCheckerEx.vue";
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