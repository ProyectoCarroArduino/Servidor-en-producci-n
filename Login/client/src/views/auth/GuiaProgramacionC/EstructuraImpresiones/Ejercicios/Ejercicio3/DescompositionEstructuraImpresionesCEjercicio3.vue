<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">3. Estructura de un programa e impresiones por pantalla</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que muestre la ficha de un proyecto en cinco líneas, usando exactamente seis printf en este orden, cada uno terminado en \n salvo el quinto: (1) el título ==== FICHA DEL PROYECTO ====; (2) Archivo:, una tabulación (\t) y ficha.c; (3) Carpeta:, una tabulación y la ruta C:\Proyectos\Guia, con sus barras invertidas visibles en pantalla (use \\); (4) Mensaje:, una tabulación y el texto Compilado sin errores entre comillas dobles visibles (use \"); (5) Consejo: y una tabulación, sin \n; (6) un printf con dos textos seguidos en la misma línea de código: el primero es Usa, un espacio, los caracteres \n visibles en pantalla (escritos como \\n) y otro espacio; el segundo es para saltar de linea seguido del salto de línea \n. Las líneas 5 y 6 forman juntas la última línea de la salida. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las instrucciones dentro de las llaves de main y return 0; al final. El programa no usa variables y los textos se escriben sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">==== FICHA DEL PROYECTO ====
Archivo:        ficha.c
Carpeta:        C:\Proyectos\Guia
Mensaje:        "Compilado sin errores"
Consejo:        Usa \n para saltar de linea</pre>
      <p class="texto-personalizado"><em>Entre la etiqueta y el dato hay una tabulación (\t); en la consola se ve como un espacio amplio. Aquí se muestra con espacios hasta la columna 17.</em></p>
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
      <h4 class="texto-personalizado">¿Cuál imagen muestra el printf que imprime correctamente la línea Carpeta:, una tabulación y C:\Proyectos\Guia?</h4>
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
import DragAndDrop1Checker from "@/components/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio3/DragAndDrop1CheckerEstructuraImpresionesCEjercicio3.vue";
import DragAndDrop2Checker from "@/components/GuiaProgramacionC/EstructuraImpresiones/Ejercicios/Ejercicio3/DragAndDrop2CheckerEstructuraImpresionesCEjercicio3.vue";
import { reactive, toRefs, onMounted } from 'vue';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';
import Figura1 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S1_Correcta.png';
import Figura2 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S1_Inc1.png';
import Figura3 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S1_Inc2.png';
import Figura4 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S1_Inc3.png';
import Figura5 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S2_Correcta.png';
import Figura6 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S2_Inc1.png';
import Figura7 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S2_Inc2.png';
import Figura8 from '@/assets/ImagenesEstructuraEImpresiones/Ej3_Desc_S2_Inc3.png';


// Ruta comun de los tres subejercicios. Debe coincidir EXACTAMENTE con los
// nombres de la plantilla del curso (ver server/seedCourseTemplate.js).
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '3. Estructutura de un programa e impresiones por pantalla',
  submodulo: '3.1 Estructutura de un programa e impresiones por pantalla',
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
        "¡Error! Revisa la línea Carpeta: una barra invertida sola no se muestra en pantalla",
        "¡Error! En la línea Consejo:, los caracteres \\n deben verse en pantalla, no producir un salto",
        "¡Error! En la línea Mensaje:, las comillas forman parte de lo que se muestra",
        "¡Error! Compara las cinco líneas con la salida esperada, carácter por carácter",
      ],
      
      respuestaVar: null,
      CorrectaVar: false,
      mensajeErrorVar: '',
      mensajesErrorVar: [
        "¡Error! Con una sola barra invertida, el compilador intenta formar una secuencia de escape",
        "¡Error! La tabulación se escribe con barra invertida, no con barra normal",
        "¡Error! La ruta pedida usa barras invertidas, no barras normales",
        "¡Error! Revisa qué secuencia de escape muestra una barra invertida en pantalla",
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
      router.push('/EIAlgoritmo3').then(() => {
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