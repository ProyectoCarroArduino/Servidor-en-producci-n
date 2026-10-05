<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">7. Funciones</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Una tienda registra las ventas de 5 días. Hacer un programa en C con tres funciones que reciben el arreglo como parámetro, en este orden: (1) int sumarVentas(int datos[], int tamano), que suma los elementos con un acumulador suma que empieza en 0 y lo devuelve; (2) int buscarMayor(int datos[], int tamano), que toma datos[0] como mayor provisional, recorre desde i = 1 comparando con un if y devuelve el mayor; (3) void aplicarBono(int datos[], int tamano, int bono), que suma bono a cada elemento con datos[i] += bono. En main, declare el arreglo entero ventas de 5 elementos con los valores 120, 85, 200, 150 y 95, y en este orden: muestre Total: X con sumarVentas(ventas, 5) dentro del printf; muestre Mayor: Y con buscarMayor(ventas, 5) dentro del printf; llame a aplicarBono(ventas, 5, 10); muestre Ventas con bono: (sin \n) y, con un for de i = 0 mientras i &lt; 5, cada venta seguida de un espacio (printf con "%d "); muestre un salto de línea con printf("\n"), y por último muestre Total con bono: Z con sumarVentas(ventas, 5) dentro del printf. Todos los ciclos usan el contador i. Use la estructura vista en la teoría: biblioteca stdio.h, los prototipos antes de main, main con return 0; al final y las definiciones de las funciones después de main, en el mismo orden de los prototipos. Use llaves en todos los bloques, termine cada mensaje en \n y escriba los textos sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Total: 650
Mayor: 200
Ventas con bono: 130 95 210 160 105 
Total con bono: 700</pre>
      <p class="texto-personalizado"><em>La tercera línea termina con un espacio después del 105, porque cada venta se imprime seguida de un espacio.</em></p>
      <br>
      <hr class="my-4" />
      <br>
      <h3>Descomposición:</h3>
      <br>
      <h4 class="texto-personalizado">¿Cuál de las siguientes imágenes muestra lo que aparece en pantalla al ejecutar el programa?</h4>
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
      <h4 class="texto-personalizado">¿Cuál imagen muestra la llamada correcta para aplicar el bono de 10 a las 5 ventas?</h4>
      <br>
      <div class="figuras">
        <div
          v-for="(figura, index) in figurasV"
          :key="figura.alt"
          class="figura"
          :class="{ 'figura-bloqueada': ev2.bloqueado || ev2.cargando }"
          @click="manejarClickVar(figura.alt, index)"
        >
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <EstadoSubejercicio :estado="ev2" />
      <div v-if="respuestaVar" class="respuesta">
        <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
      </div>
      <br>
      <br>
        <DragAndDrop1Checker @finalizado="s3Finalizado = $event" />
        <DragAndDrop2Checker @finalizado="s4Finalizado = $event" />
        <div class="ec-acciones">
          <p v-if="!puedeAvanzar" class="ec-acciones-ayuda">Completa los cuatro subejercicios para avanzar. Un subejercicio queda completo cuando lo resuelves o se agotan sus intentos.</p>
          <button class="ec-btn ec-btn-secondary" :disabled="!puedeAvanzar" @click="finish">
            Avanzar
            <span class="material-icons" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
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
import DragAndDrop1Checker from "@/components/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio3/DragAndDrop1CheckerFuncionesConParametrosCEjercicio3.vue";
import DragAndDrop2Checker from "@/components/GuiaProgramacionC/FuncionesConParametros/Ejercicios/Ejercicio3/DragAndDrop2CheckerFuncionesConParametrosCEjercicio3.vue";
import { reactive, toRefs, onMounted } from 'vue';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';
import Figura1 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S1_Correcta.png';
import Figura2 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S1_Inc1.png';
import Figura3 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S1_Inc2.png';
import Figura4 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S1_Inc3.png';
import Figura5 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S2_Correcta.png';
import Figura6 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S2_Inc1.png';
import Figura7 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S2_Inc2.png';
import Figura8 from '@/assets/ImagenesFuncionesConParametros/Ej3_Desc_S2_Inc3.png';


// Ruta comun de los tres subejercicios. Debe coincidir EXACTAMENTE con los
// nombres de la plantilla del curso (ver server/seedCourseTemplate.js).
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '7. Funciones',
  submodulo: '7.2 Funciones con parametros',
  ejercicio: 'Ejercicio 3', 
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


      // Los subejercicios 3 y 4 viven en sus componentes y avisan con @finalizado.
      s3Finalizado: false,
      s4Finalizado: false,

      respuesta: null,
      esCorrecta: false,
      mensajeError: '',
      mensajesError: [
        "¡Error! Un arreglo no se copia: los cambios de la función se ven en main",
        "¡Error! El mayor se busca antes de aplicar el bono",
        "¡Error! El bono se suma a cada una de las 5 ventas",
        "¡Error! Calcula el total antes y después del bono y compara",
      ],
      
      respuestaVar: null,
      CorrectaVar: false,
      mensajeErrorVar: '',
      mensajesErrorVar: [
        "¡Error! En la llamada el arreglo se pasa solo con su nombre",
        "¡Error! Los argumentos van en el orden de los parámetros: arreglo, tamaño y bono",
        "¡Error! aplicarBono es void: no devuelve nada que se pueda guardar",
        "¡Error! El arreglo se modifica dentro de la función; no hace falta asignar nada",
      ],
    };
  },

  computed: {
    // Se avanza cuando los cuatro subejercicios estan cerrados: aprobados o sin intentos.
    puedeAvanzar() {
      return this.ev1.bloqueado && this.ev2.bloqueado && this.s3Finalizado && this.s4Finalizado;
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
      router.push('/FCPAlgoritmo3').then(() => {
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
  height: 220px; /* Ajusta el tamaño de la imagen */
  object-fit: contain; /* Muestra la imagen completa (con cover se recortaba el texto) */
  background-color: white;
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