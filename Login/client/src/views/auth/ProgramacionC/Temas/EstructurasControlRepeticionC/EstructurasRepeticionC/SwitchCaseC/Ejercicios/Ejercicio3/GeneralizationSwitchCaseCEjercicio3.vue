<template>
    <div id="layout-general">
        <main class="contenido">
        <h1 class="text-center">5.2 Switch case</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que simule el funcionamiento de un sistema de gestión de libros para una biblioteca. 
      La biblioteca debe <strong>mostrar el número de libros disponibles y libros prestados,  permitir el préstamo de libros a un usuario y permitir la devolución de libros de un usuario</strong>, 
      este sistema se debe ejecutar hasta que el usuario decida <strong>salir</strong>. La biblioteca cuenta las siguientes reglas:</p>
      <ul>
        <li class="texto-personalizado">La biblioteca <strong>solo</strong> puede almacenar un número máximo de <strong>25</strong> libros.</li>
        <li class="texto-personalizado">Un usuario puede solicitar el <strong>préstamo de libros</strong>, pero este número debe ser acorde al número de <strong>libros disponibles</strong> en la biblioteca, de lo contrario imprimir el mensaje:
            <strong>“No hay libros disponibles suficientes para prestar en este momento.”</strong>.</li>
        <li class="texto-personalizado">Un usuario solo puede <strong>devolver los libros</strong> que haya <strong>solicitado</strong> a la biblioteca, si ese número <strong>excede</strong> el máximo de libros almacenados imprimir el mensaje: 
            <strong>"No puede devolver más libros de los que ha solicitado"</strong>. Así mismo, el número de <strong>libros devueltos</strong> debe ser mayor a <strong>0</strong>, si no es así imprimir el mensaje: <strong>“La cantidad debe ser mayor que cero.”</strong>.</li>
        <li class="texto-personalizado">Si un usuario decide <strong>devolver</strong> más libros de los que la biblioteca <strong>puede almacenar</strong> imprimir el mensaje: <strong>“No se pueden almacenar más libros.”</strong>.</li>
      </ul>
      <p><span style="font-weight: bold;">Nota:</span> El programa debe utilizar la instrucción <strong>switch case</strong> y el default debe contener <strong>break</strong>.</p>
      <p><span style="font-weight: bold;">Nota2:</span> El progrma <strong>debe imprimir</strong> el siguiente mensaje si se digita una opción que no es válida: <strong>"Opcion no valida. Intente de nuevo."</strong>.</p>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Generalización:</h3>
            <br>
            <p class="texto-personalizado">Teniendo en cuenta las <strong>didácticas</strong> anteriores generalice el paso a paso de la definición de la función <strong>(main)</strong>:</p>
            <br>
            <img class="centrada" src="@/assets/ImagenesSwitchCaseC/CodigoGeneralizacion4.png" alt="CodigoGeneralizacion">
            <br>
            <img class="centrada" src="@/assets/ImagenesSwitchCaseC/CodigoGeneralizacion5.png" alt="CodigoGeneralizacion">
            <br>
            <img class="centrada" src="@/assets/ImagenesSwitchCaseC/CodigoGeneralizacion6.png" alt="CodigoGeneralizacion">
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