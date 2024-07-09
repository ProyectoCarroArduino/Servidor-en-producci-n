<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">4. Variables y operaciones</h1>
            <h3>Ejemplo 1:</h3>
            <br>
            <p class="texto-personalizado">
            Hacer un programa que le solcite al usuario que <strong>digite</strong> un número entre 1 y 2. Si el usuario <strong>digita</strong> el número 1
            imprimir el mensaje: "Ha seleccionado la opción número 1", si el usuario <strong>digita</strong> el número 2 imprimir el mensaje:
            "Ha seleccionado la opción número 2" y por último, si el usuario <strong>digita</strong> cualquier otro número imrpimir el mensaje:
            "El número seleccionado no se encuentra en las opciones".
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
import ImageChecker from "@/components/ImageCheckerSwitch.vue";
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