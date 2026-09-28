<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">5.2 Ciclo while</h1>
      <br>
      <br>
      <h3>Ejercicio 1:</h3>
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
      <h3>Descomposición:</h3>
      <br>
      <h4 class="texto-personalizado">De acuerdo a la teroria sobre <strong>switch case</strong> seleccione la imagen que representa los siguientes elementos en la estructura: <strong>instrucción switch, instrucción case, break y default</strong>.</h4>
      <br>
      <div class="figuras">
        <div
          v-for="(figura, index) in figuras"
          :key="figura.alt"
          class="figura"
          :class="{ 'figura-bloqueada': ev1.bloqueado || ev1.cargando }"
          @click="manejarClick(figura.alt, index)"
        > 
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <EstadoSubejercicio :estado="ev1" />
      <div v-if="respuesta" class="respuesta">
        <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
      </div>
      <br>
      <br>
      <h4 class="texto-personalizado">De acuerdo a la teoria sobre la instrucción switch case seleccione la imagen que representa la variable de entrada y el condicional que valida si la opción ingresada es valida:</h4>
      <br>
      <div class="figuras">
        <div
          v-for="(figura, index) in figurasV"
          :key="figura.alt"
          class="figura"
          :class="{ 'figura-bloqueada': ev2.bloqueado || ev2.cargando }"
          @click="manejarClickVar(figura.alt, index)"
        >
          <img :src="figura.src" :alt="figura.alt" 
        </div>
      </div>
      <EstadoSubejercicio :estado="ev2" />
      <div v-if="respuestaVar" class="respuesta">
        <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
      </div>
      <br>
      <br>
        <DragAndDrop1Checker @evaluacionDrapAndDrop1Checker="actualizarEvaluacionDragAndDrop1Checker"/>
        <DragAndDrop2Checker @evaluacionDragAndDrop2Checker="actualizarEvaluacionDragAndDrop2Checker"/>
    </main>

    <aside class="menu-lateral">
      <div>
        <Menu />
      </div>
    </aside>
  </div>
</template>

<script>
import router from '@/router'
import Menu from "@/components/Menu.vue";
import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";
import DragAndDrop1Checker from "@/components/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio3/DragAndDrop1CheckerSwitchCaseCEjercicio3.vue";
import DragAndDrop2Checker from "@/components/ProgramacionC/Temas/EstructurasControlRepeticionC/EstructurasRepeticionC/SwitchCaseC/Ejercicios/Ejercicio3/DragAndDrop2CheckerSwitchCaseCEjercicio3.vue";
import { reactive, toRefs, onMounted } from 'vue';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';
import Figura1 from '@/assets/ImagenesSwitchCaseC/Codigo25.png';
import Figura2 from '@/assets/ImagenesSwitchCaseC/Codigo26.png';
import Figura3 from '@/assets/ImagenesSwitchCaseC/Codigo27.png';
import Figura4 from '@/assets/ImagenesSwitchCaseC/Codigo28.png';
import Figura5 from '@/assets/ImagenesSwitchCaseC/Codigo29.png';
import Figura6 from '@/assets/ImagenesSwitchCaseC/Codigo30.png';
import Figura7 from '@/assets/ImagenesSwitchCaseC/Codigo31.png';
import Figura8 from '@/assets/ImagenesSwitchCaseC/Codigo32.png';


// Ruta comun de los tres subejercicios. Debe coincidir EXACTAMENTE con los
// nombres de la plantilla del curso (ver server/seedCourseTemplate.js).
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '4. Variables y operaciones',
  submodulo: '',
  ejercicio: 'Ejercicio 1', 
  categoria: 'descomposicion'
};

export default {
  name: 'App',

  components: {
    Menu,
    EstadoSubejercicio,
    DragAndDrop1Checker,
    DragAndDrop2Checker,
  },

  setup() {
    const ev1 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 1' }));
    const ev2 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 2' }));

    onMounted(() => {
      ev1.obtenerIntentos();
      ev2.obtenerIntentos();
    });

    return { ev1, ev2 };
  },

  data() {
    return {
      figuras: [
        { src: Figura1, alt: 'Figura 1' },
        { src: Figura2, alt: 'Figura 2' },
        { src: Figura3, alt: 'Figura 3' },
        { src: Figura4, alt: 'Figura 4' },
      ].sort(() => Math.random() - 0.5),

      figurasV: [
        { src: Figura5, alt: 'Figura 5' },
        { src: Figura6, alt: 'Figura 6' },
        { src: Figura7, alt: 'Figura 7' },
        { src: Figura8, alt: 'Figura 8' },
      ].sort(() => Math.random() - 0.5),


      respuesta: null,
      esCorrecta: false,
      mensajeError: '',
      mensajesError: [
        '¡Error! Selecciona la imagen que tenga sentido con lo solicitado, pero ten presente la teoria sobre: funciones (sin parámetros) en la parte de estructura de una función',
        '¡Error! Identifica la imagen correcta que tiene la estructura necesaría',
        '¡Error! Intenta tener en cuenta que la imagen seleccionada debe de resolver el problema dado',
        '¡Error! Recuerda que debes de seleccionar la imagen que concuerde con la función prototipo que resuelva el problema',
      ],
      
      respuestaVar: null,
      CorrectaVar: false,
      mensajeErrorVar: '',
      mensajesErrorVar: [
        '¡Error! Recuerda que debes de seleccionar la imagen que tenga la declaración de la función (laboratorio) de forma correcta',
        '¡Error! La forma en la que estas haciendo la declaración de la función (laboratorio) no es correcta',
        '¡Error! Intenta ir a revisar la teoria sobre la declaración de una función e intentalo de nuevo',
        '¡Error! Ten en cuenta que la declaración de la función (laboratorio) para este caso es una función (sin parámetros)',
      ],
    };
  },

  computed: {
    // Propiedad computada para habilitar o deshabilitar el botón
    puedeAvanzar() {
      return (
        this.evaluacion !== null &&
        this.evaluacionV !== null &&
        this.evaluacionDragAndDrop1Checker !== null && // Incluye la evaluación de Llamada
        this.evaluacionDragAndDrop2Checker !== null
      );
    },

    evaluacionTotal() {
      const total =
        (this.evaluacion ?? 0) +
        (this.evaluacionV ?? 0) +
        (this.evaluacionDragAndDrop1Checker ?? 0) +
        (this.evaluacionDragAndDrop2Checker ?? 0);

      return total / 4; // Dividimos entre el total de actividades
    },
  },

  methods: {

    // Un subejercicio ya aprobado o sin intentos no vuelve a registrarse: antes
    // se podia acertar (nota 5) y luego bajarla a 1 haciendo clic otra vez.
    puedeResponder(ev) {
      return ev.estadoCargado && !ev.bloqueado && !ev.cargando;
    },

    mensajeAleatorio(lista) {
      return lista[Math.floor(Math.random() * lista.length)];
    },

    async manejarClick(figura) {
      if (!this.puedeResponder(this.ev1)) return;

      this.respuesta = figura;
      this.esCorrecta = figura === 'Figura 1';
      if (!this.esCorrecta) {
        this.mensajeError = this.mensajeAleatorio(this.mensajesError);
      }

      // El servidor calcula la nota a partir de los intentos restantes.
      await this.ev1.registrarResultado(this.esCorrecta);
    },

    async manejarClickVar(figura) {
      if (!this.puedeResponder(this.ev2)) return;

      this.respuestaVar = figura;
      this.CorrectaVar = figura === 'Figura 5';
      if (!this.CorrectaVar) {
        this.mensajeErrorVar = this.mensajeAleatorio(this.mensajesErrorVar);
      }

      await this.ev2.registrarResultado(this.CorrectaVar);
    },

    finish() {
      router.push('/AlgoritmoSwitchCaseCEjercicio1').then(() => {
        window.scrollTo(0, 0);
      });
    },

  },


};
</script>

<style scoped>

.figuras {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* Añade un espacio entre las figuras */
}

.figura {
  position: relative;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  border: 2px solid #ccc; /* Añade un borde para distinguir cada figura */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Asegura que la imagen no sobresalga del contenedor */
  transition: transform 0.2s; /* Añade una transición para el efecto de agrandamiento */
}

.figura:hover {
  transform: scale(1.1); /* Agranda la imagen al pasar el cursor sobre ella */
}

.figura img {
  width: 350px; /* Ajusta el tamaño de la imagen */
  height: 350px; /* Ajusta el tamaño de la imagen */
  object-fit: cover; /* Asegura que la imagen mantenga su proporción dentro del contenedor */
}

.respuesta {
  margin-top: 20px;
}

.contador-imagen {
position: absolute;
top: 10px;
left: 10px;
background-color: rgba(0, 0, 0, 0.7);
color: white;
font-size: 14px;
padding: 5px 10px;
border-radius: 5px;
}

.correcto {
  font-size: 20px;
  color: green;
}

.incorrecto {
  font-size: 20px;
  color: red;
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

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

.evaluacion-final {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

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

.align-left {
  text-align: left; /* Alinea el contenido a la izquierda */
}

.square-card {
  width: 330px; /* Define el ancho deseado de la tarjeta */
  margin-top: 0px;
  overflow: hidden; /* Evita que el contenido se desborde */
}

.centrada {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 35%;
}

.centrada2 {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 25%;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}

</style>