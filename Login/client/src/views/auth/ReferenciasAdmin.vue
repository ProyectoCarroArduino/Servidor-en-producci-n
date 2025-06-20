<template>
  <div class="p-6 bg-white rounded shadow max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">📘 Glosario de Conceptos</h1>

    <!-- Formulario para agregar nuevo concepto -->
    <form @submit.prevent="crearConcepto" class="mb-6 space-y-4">
      <div>
        <label class="block text-sm font-medium">Término</label>
        <input v-model="nuevo.termino" type="text" class="w-full border rounded px-3 py-1" required />
      </div>
      <div>
        <label class="block text-sm font-medium">Definición</label>
        <textarea v-model="nuevo.definicion" class="w-full border rounded px-3 py-1" required />
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Agregar concepto</button>
    </form>

    <hr class="mb-4">

    <!-- Lista de conceptos -->
    <ul class="list-disc pl-6 space-y-2">
      <li v-for="concepto in conceptos" :key="concepto._id" class="flex justify-between items-start">
        <div>
          <strong>{{ concepto.termino }}:</strong> {{ concepto.definicion }}
        </div>
        <button
          @click="eliminarConcepto(concepto._id)"
          class="text-red-600 hover:underline text-sm ml-4"
        >Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const conceptos = ref([]);
const nuevo = ref({
  termino: '',
  definicion: ''
});

// === DEBUG ===
const log = console.log;
const logError = (label, err) => {
  console.error(label, err?.response?.data || err?.message || err);
};

// Usar variable de entorno
const baseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('token');

// Cargar conceptos al iniciar
const cargarConceptos = async () => {
  log('[Glosario] Iniciando carga de conceptos...');
  try {
    const res = await axios.get(`${baseURL}/api/glosario`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    log('[Glosario] Conceptos recibidos:', res.data);
    conceptos.value = res.data;
  } catch (err) {
    logError('[Glosario] Error al cargar conceptos:', err);
  }
};

// Crear nuevo concepto
const crearConcepto = async () => {
  log('[Glosario] Enviando nuevo concepto:', nuevo.value);
  if (!nuevo.value.termino.trim() || !nuevo.value.definicion.trim()) {
    log('[Glosario] Campos incompletos. No se enviará.');
    return;
  }

  try {
    const res = await axios.post(`${baseURL}/api/glosario`, nuevo.value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    log('[Glosario] Concepto creado con éxito:', res.data);
    await cargarConceptos();
    nuevo.value.termino = '';
    nuevo.value.definicion = '';
  } catch (err) {
    logError('[Glosario] Error al crear concepto:', err);
  }
};

// Eliminar un concepto
const eliminarConcepto = async (id) => {
  if (!confirm('¿Eliminar este concepto?')) return;

  log('[Glosario] Eliminando concepto con ID:', id);
  try {
    const res = await axios.delete(`${baseURL}/api/glosario/concepto/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    log('[Glosario] Concepto eliminado:', res.data);
    await cargarConceptos();
  } catch (err) {
    logError('[Glosario] Error al eliminar concepto:', err);
  }
};

onMounted(() => {
  log('[Glosario] Componente montado. Cargando conceptos...');
  cargarConceptos();
});
</script>