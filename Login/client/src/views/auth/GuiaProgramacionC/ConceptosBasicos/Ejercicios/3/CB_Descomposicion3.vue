<template>
  <EjercicioLayout :ejercicio="ejercicio" etapa="Descomposición">
    <DescomposicionPreguntas
      :preguntas="ejercicio.descomposicion"
      :evaluaciones="[ev1, ev2, ev3, ev4]"
      siguiente="/CBAlgoritmo3"
    />
  </EjercicioLayout>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";
import EjercicioLayout from "@/components/GuiaProgramacionC/ejercicio/EjercicioLayout.vue";
import DescomposicionPreguntas from "@/components/GuiaProgramacionC/ejercicio/DescomposicionPreguntas.vue";
import { EJERCICIOS } from "../datosEjercicios";

const ejercicio = EJERCICIOS[3];

// Debe coincidir EXACTAMENTE con los nombres de server/cursosConfig.js.
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '1. Conceptos basicos',
  submodulo: '1.1 Introduccion a C',
  ejercicio: 'Ejercicio 3',
  categoria: 'descomposicion'
};

const ev1 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 1' }));
const ev2 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 2' }));
const ev3 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 3' }));
const ev4 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 4' }));

onMounted(() => [ev1, ev2, ev3, ev4].forEach((ev) => ev.obtenerIntentos()));
</script>
