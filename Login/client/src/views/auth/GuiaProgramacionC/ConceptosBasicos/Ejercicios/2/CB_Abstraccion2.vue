<template>
  <EjercicioLayout :ejercicio="ejercicio" etapa="Abstracción">
    <AbstraccionCodigo :abstraccion="ejercicio.abstraccion" :ev="ev1" siguiente="/CBGeneralizacion2" />
  </EjercicioLayout>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";
import EjercicioLayout from "@/components/GuiaProgramacionC/ejercicio/EjercicioLayout.vue";
import AbstraccionCodigo from "@/components/GuiaProgramacionC/ejercicio/AbstraccionCodigo.vue";
import { EJERCICIOS } from "../datosEjercicios";

const ejercicio = EJERCICIOS[2];

// Debe coincidir EXACTAMENTE con los nombres de server/cursosConfig.js.
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '1. Conceptos basicos',
  submodulo: '1.1 Introduccion a C',
  ejercicio: 'Ejercicio 2',
  categoria: 'abstraccion'
};

const ev1 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 1' }));

onMounted(() => ev1.obtenerIntentos());
</script>
