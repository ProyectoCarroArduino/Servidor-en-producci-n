<template>
  <TeoriaLayout
    :titulo="`Ejercicio ${ejercicio.numero}: ${ejercicio.nombre}`"
    :migas="`${seccion} · ${etapa}`"
  >
    <p><strong>Enunciado:</strong> {{ ejercicio.enunciado }}</p>
    <BloqueCodigo
      v-if="ejercicio.codigo"
      :archivo="ejercicio.codigo.archivo"
      :codigo="ejercicio.codigo.texto"
    />

    <h2>{{ etapa }}</h2>
    <slot />
  </TeoriaLayout>
</template>

<script setup>
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";

// Marco comun de las cuatro etapas de un ejercicio: titulo, enunciado, codigo
// del enunciado (si lo hay) y el menu lateral de la guia.
defineProps({
  ejercicio: { type: Object, required: true },
  etapa: { type: String, required: true },
  seccion: { type: String, default: "1.1 Introducción a C" },
});
</script>
