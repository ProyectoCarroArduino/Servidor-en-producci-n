<template>
  <EjercicioLayout :ejercicio="ejercicio" etapa="Algoritmo">
    <AlgoritmoTarjetas :algoritmo="ejercicio.algoritmo" :ev="ev1" siguiente="/CBAbstraccion3" />
  </EjercicioLayout>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";
import EjercicioLayout from "@/components/GuiaProgramacionC/ejercicio/EjercicioLayout.vue";
import AlgoritmoTarjetas from "@/components/GuiaProgramacionC/ejercicio/AlgoritmoTarjetas.vue";
import { EJERCICIOS } from "../datosEjercicios";

const ejercicio = EJERCICIOS[3];

// Debe coincidir EXACTAMENTE con los nombres de server/cursosConfig.js.
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '1. Conceptos basicos',
  submodulo: '1.1 Introduccion a C',
  ejercicio: 'Ejercicio 3',
  categoria: 'algoritmo'
};

const ev1 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 1' }));

onMounted(() => ev1.obtenerIntentos());
</script>
