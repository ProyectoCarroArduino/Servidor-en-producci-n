<template>
  <div class="glosario-container">
    <h1>📘 Glosario y Referencias</h1>

    <!-- Buscador -->
    <div class="buscador">
      <input v-model="busqueda" placeholder="Buscar término..." />
    </div>

    <!-- Conceptos -->
    <section>
      <h2>Conceptos Clave</h2>
      <div class="tarjetas">
        <div v-for="concepto in conceptosFiltrados" :key="concepto._id" class="tarjeta">
          <h3>{{ concepto.termino }}</h3>
          <img v-if="concepto.imagen" :src="concepto.imagen" alt="Imagen del concepto" class="imagen-concepto" />
          <p>{{ concepto.definicion }}</p>
        </div>
      </div>
    </section>

    <!-- Referencias -->
    <section>
      <h2>Referencias</h2>
      <div class="tarjetas">
        <div v-for="ref in referencias" :key="ref._id" class="tarjeta">
          <div class="referencia-header">
            <span class="icono">{{ iconoPorTipo(ref.tipo) }}</span>
            <strong>{{ ref.nombre }}</strong>
            <span class="tipo">({{ ref.tipo }})</span>
          </div>
          <a :href="ref.enlace" target="_blank">{{ ref.enlace }}</a>
          <p>{{ ref.descripcion }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useConceptos } from '@/composables/useConceptos'

const { conceptos, referencias, cargarContenido } = useConceptos()

const busqueda = ref('')

onMounted(cargarContenido)

const conceptosFiltrados = computed(() =>
  conceptos.value.filter(c =>
    c.termino.toLowerCase().includes(busqueda.value.toLowerCase())
  )
)

const iconoPorTipo = tipo => {
  switch (tipo) {
    case 'Lectura': return '📖'
    case 'Video': return '🎥'
    case 'Sitio Web': return '🌐'
    case 'Curso': return '🎓'
    default: return '🔗'
  }
}
</script>

<style scoped>
.imagen-concepto {
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}

.glosario-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.4rem;
  margin: 1.5rem 0 0.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.3rem;
}

.buscador input {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.tarjetas {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tarjeta {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #fafafa;
  transition: box-shadow 0.2s ease;
}

.tarjeta:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.tarjeta h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}

.tarjeta a {
  display: block;
  color: #1d4ed8;
  text-decoration: none;
  margin: 0.3rem 0;
}

.tarjeta a:hover {
  text-decoration: underline;
}

.referencia-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

.icono {
  font-size: 1.2rem;
}

.tipo {
  font-size: 0.9rem;
  color: #666;
}
</style>
