<template>
  <EjercicioLayout :ejercicio="ejercicio" etapa="Generalización">
    <GeneralizacionAudios
      :generalizacion="ejercicio.generalizacion"
      :ev="ev1"
      siguiente="/CBDescomposicion3"
      texto-siguiente="Ir al Ejercicio 3"
    />
  </EjercicioLayout>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";
import EjercicioLayout from "@/components/GuiaProgramacionC/ejercicio/EjercicioLayout.vue";
import GeneralizacionAudios from "@/components/GuiaProgramacionC/ejercicio/GeneralizacionAudios.vue";
import { EJERCICIOS } from "../datosEjercicios";

const ejercicio = EJERCICIOS[2];

// Debe coincidir EXACTAMENTE con los nombres de server/cursosConfig.js.
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '1. Conceptos basicos',
  submodulo: '1.1 Introduccion a C',
  ejercicio: 'Ejercicio 2',
  categoria: 'generalizacion'
};

const ev1 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 1' }));

onMounted(() => ev1.obtenerIntentos());
</script>
