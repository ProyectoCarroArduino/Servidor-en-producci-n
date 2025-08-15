<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">Paso 1. Conectar cables a los motorreductores</h1>
            <br>
            <br>
            <h2>Ejercicio:</h2>
            <br>
            <p class="texto-personalizado">Se necesita un programa en C que simule la conexión <strong>(soldar)</strong> de dos cables, uno rojo y otro negro a un motorreductor. 
                    El programa debe verificar que los cables sean "rojo" y "negro" <strong>(en cualquier orden)</strong> y si es así, debe imprimir el mensaje: "Cable rojo y negro conectados". 
                    Si los cables no son los correctos, debe mostrar un mensaje de error: "Error: No se han enviado los cables correctos"</p>
            <br>
            <p class="texto-personalizado"><strong>Requisitos:</strong></p>
            <ul>
                <li><p class="texto-personalizado"> <strong>Debe declararse la función prototipo "ConectarCables".</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Los cables deben ser variables del tipo cadena de caracter (string).</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada "ConectarCables" que reciba dos cables como parámetros.</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Dentro de la función tipo void se debe verificar si los cables son rojo y negro <strong>(sin importar el orden)</strong>.</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Si los cables son correctos se debe de impirmir el mensaje: "Cable rojo y negro conectados".</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Si los cables no son los correctos se debe de impirmir un mensaje de error: "Error: No se han enviado los cables correctos".</strong></p></li>
            </ul>
            <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(ConectarCables)</strong>:</p>
            <br>
            <p class="texto-personalizado"><strong>Instrucciones:</strong> Ingrese el orden correcto de los audios</p>
            <br>
            <AudioChecker/>
        </div>
        <div class="align-left col-md-3">
            <div class="temas">
                <MenuCarro />
            </div>
        </div>
    </div>
</template>

<script>
import AudioChecker from "@/components/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/AudioCheckerConectarCablesMotorreductores.vue";
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