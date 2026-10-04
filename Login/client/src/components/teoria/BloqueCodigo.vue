<template>
  <div class="bloque-codigo">
    <div class="codigo">
      <div class="codigo-barra">{{ archivo }}</div>
      <pre><code>{{ codigo }}</code></pre>
    </div>
    <div v-if="salida" class="codigo salida">
      <div class="codigo-barra">Salida en pantalla</div>
      <pre><code>{{ salida }}</code></pre>
    </div>
  </div>
</template>

<script setup>
// Recibimos como texto porque cosas como
// <stdio.h> se interpretarian como etiquetas HTML.
defineProps({
  archivo: { type: String, default: "Código" },
  codigo: { type: String, required: true },
  salida: { type: String, default: "" },
});
</script>

<style scoped>
.bloque-codigo {
  margin: 12px 0 18px;
}

.codigo {
  margin-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;
  background: #0f2238;
}

.codigo-barra {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #9cc3ea;
  background: rgba(255, 255, 255, 0.06);
}

.codigo pre {
  margin: 0;
  padding: 16px 18px;
  overflow-x: auto;
}

.codigo pre code {
  font-family: "Consolas", "Fira Code", "Courier New", monospace;
  font-size: 15px;
  line-height: 1.6;
  color: #e6f0fb;
  white-space: pre;
}

.codigo.salida {
  background: #1c1c1c;
}

.codigo.salida pre code {
  color: #a7f3a0;
}
</style>
