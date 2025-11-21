<template>
    <div id="layout-general">
        <main class="contenido">
            <h1 class="text-center">Paso 1. Conectar cables a los motorreductores</h1>
            <br>
            <br>
            <h2>Ejercicio:</h2>
            <br>
            <p class="texto-personalizado">Se necesita un programa en C que simule la conexión <strong>(soldar)</strong> de dos cables, uno rojo y otro negro a un motorreductor. 
                    El programa debe verificar que los cables sean "rojo" y "negro" <strong>(en cualquier orden)</strong> y si es así, debe imprimir el mensaje: "Cable rojo y negro conectados". 
                    Si los cables no son los correctos, debe mostrar un mensaje de error: "Error: No se han enviado los cables correctos".</p>
            <br>
            <p class="texto-personalizado"><strong> Requisitos:</strong></p>
            <ul>
                <li><p class="texto-personalizado"> <strong>Debe declararse la función prototipo "ConectarCables".</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Los cables deben ser variables del tipo cadena de carácter (string).</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada "ConectarCables" que reciba dos cables como parámetros.</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Dentro de la función tipo void se debe verificar si los cables son rojo y negro <strong>(sin importar el orden)</strong>.</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Si los cables son correctos se debe de impirmir el mensaje: "Cable rojo y negro conectados".</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Si los cables no son los correctos se debe de imprimir un mensaje de error: "Error: No se han enviado los cables correctos".</strong></p></li>
            </ul>
            <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <ImageChecker/>
        </main>
        <aside class="menu-lateral">
            <div>
                <NavMenu />
            </div>
        </aside>
    </div>
</template>

<script>
import ImageChecker from "@/components/ConstruccionCarroArduino/Fases/FaseEnsamblaje/ConectarCablesMotorreductores/Ejercicio/ImageCheckerConectarCablesMotorreductores.vue";
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