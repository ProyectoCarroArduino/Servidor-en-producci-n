<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">5.2 Switch case</h1>
      <br>
      <br>
      <h3>Ejercicio 2:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C  que simule el funcionamiento de un cajero automático. El usuario comenzará con un valor de <strong>$100.000</strong> pesos como saldo inicial. 
      El cajero debe poder <strong>mostrar, depositar y retirar</strong> dinero del saldo disponible, esta acción se debe ejecutar hasta que el cliente decida <strong>salir</strong> de este. 
      El cajero deberá validar si la cantidad que un cliente desea retirar es acorde con el <strong>saldo disponible</strong>, de lo contrario imprimir el mensaje: <strong>“Fondos insuficientes. Su saldo es:”</strong>.</p>
      <p><span style="font-weight: bold;">Nota:</span> El programa debe utilizar la instrucción <strong>switch case</strong> y el default debe contener <strong>break</strong>.</p>
      <p><span style="font-weight: bold;">Nota2:</span> El progrma <strong>debe imprimir</strong> el siguiente mensaje si se digita una opción que no es válida: <strong>"Opcion no valida. Intente de nuevo."</strong>.</p>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(main)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesSwitchCaseC/CodigoGeneralizacion2.png" alt="CodigoGeneralizacion">
            <br>
            <img class="centrada" src="@/assets/ImagenesSwitchCaseC/CodigoGeneralizacion3.png" alt="CodigoGeneralizacion">
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
import AudioChecker from "@/components/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio2/AudioCheckerSwitchCaseCEjercicio2.vue";
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