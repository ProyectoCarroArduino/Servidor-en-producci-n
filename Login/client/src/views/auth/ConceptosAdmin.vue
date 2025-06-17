<template>
  <div class="admin-glosario">
    <h1>🛠 Administrar Glosario y Referencias</h1>

    <!-- MENSAJE -->
    <div v-if="mensaje" :class="['mensaje', tipoMensaje]">{{ mensaje }}</div>

    <!-- AGREGAR CONCEPTO -->
    <section>
      <h2>Nuevo Concepto</h2>
      <form @submit.prevent="agregarConcepto">
        <input v-model="nuevoConcepto.termino" placeholder="Término" required />
        <textarea v-model="nuevoConcepto.definicion" placeholder="Definición" required></textarea>
        <button type="submit">Agregar Concepto</button>
      </form>
    </section>

    <!-- AGREGAR REFERENCIA -->
    <section>
      <h2>Nueva Referencia</h2>
      <form @submit.prevent="agregarReferencia">
        <input v-model="nuevaReferencia.nombre" placeholder="Nombre" required />
        <select v-model="nuevaReferencia.tipo">
          <option>Lectura</option>
          <option>Video</option>
          <option>Sitio Web</option>
          <option>Curso</option>
        </select>
        <input v-model="nuevaReferencia.enlace" placeholder="Enlace" required />
        <textarea v-model="nuevaReferencia.descripcion" placeholder="Descripción"></textarea>
        <button type="submit">Agregar Referencia</button>
      </form>
    </section>

    <!-- ELIMINAR CONCEPTO -->
    <section>
      <h2>Eliminar Concepto</h2>
      <div class="inline-form">
        <select v-model="idConceptoSeleccionado">
          <option disabled value="">Seleccione un concepto</option>
          <option v-for="c in conceptos" :value="c._id" :key="c._id">
            {{ c.termino }}
          </option>
        </select>
        <button @click="eliminarConcepto" :disabled="!idConceptoSeleccionado">Eliminar</button>
      </div>
    </section>

    <!-- ELIMINAR REFERENCIA -->
    <section>
      <h2>Eliminar Referencia</h2>
      <div class="inline-form">
        <select v-model="idReferenciaSeleccionada">
          <option disabled value="">Seleccione una referencia</option>
          <option v-for="r in referencias" :value="r._id" :key="r._id">
            {{ r.nombre }} ({{ r.tipo }})
          </option>
        </select>
        <button @click="eliminarReferencia" :disabled="!idReferenciaSeleccionada">Eliminar</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const conceptos = ref([]);
const referencias = ref([]);

const nuevoConcepto = ref({ termino: '', definicion: '' });
const nuevaReferencia = ref({ nombre: '', tipo: 'Lectura', enlace: '', descripcion: '' });

const idConceptoSeleccionado = ref('');
const idReferenciaSeleccionada = ref('');

// Mensaje de estado
const mensaje = ref('');
const tipoMensaje = ref(''); // 'success' o 'error'

const mostrarMensaje = (texto, tipo = 'success') => {
  mensaje.value = texto;
  tipoMensaje.value = tipo;
  setTimeout(() => {
    mensaje.value = '';
    tipoMensaje.value = '';
  }, 3000);
};

const cargarDatos = async () => {
  try {
    const res = await axios.get('/api/glosario');
    conceptos.value = res.data?.conceptos || [];
    referencias.value = res.data?.referencias || [];
  } catch (err) {
    mostrarMensaje('Error al cargar los datos', 'error');
  }
};

const agregarConcepto = async () => {
  if (!nuevoConcepto.value.termino || !nuevoConcepto.value.definicion) return;
  try {
    await axios.post('/api/glosario/concepto', nuevoConcepto.value);
    nuevoConcepto.value = { termino: '', definicion: '' };
    await cargarDatos();
    mostrarMensaje('Concepto agregado con éxito');
  } catch {
    mostrarMensaje('Error al agregar el concepto', 'error');
  }
};

const eliminarConcepto = async () => {
  if (!idConceptoSeleccionado.value) return;
  const confirmar = confirm('¿Estás seguro de eliminar este concepto?');
  if (!confirmar) return;
  try {
    await axios.delete(`/api/glosario/concepto/${idConceptoSeleccionado.value}`);
    idConceptoSeleccionado.value = '';
    await cargarDatos();
    mostrarMensaje('Concepto eliminado con éxito');
  } catch {
    mostrarMensaje('Error al eliminar el concepto', 'error');
  }
};

const agregarReferencia = async () => {
  if (!nuevaReferencia.value.nombre || !nuevaReferencia.value.enlace) return;
  try {
    await axios.post('/api/glosario/referencia', nuevaReferencia.value);
    nuevaReferencia.value = { nombre: '', tipo: 'Lectura', enlace: '', descripcion: '' };
    await cargarDatos();
    mostrarMensaje('Referencia agregada con éxito');
  } catch {
    mostrarMensaje('Error al agregar la referencia', 'error');
  }
};

const eliminarReferencia = async () => {
  if (!idReferenciaSeleccionada.value) return;
  const confirmar = confirm('¿Estás seguro de eliminar esta referencia?');
  if (!confirmar) return;
  try {
    await axios.delete(`/api/glosario/referencia/${idReferenciaSeleccionada.value}`);
    idReferenciaSeleccionada.value = '';
    await cargarDatos();
    mostrarMensaje('Referencia eliminada con éxito');
  } catch {
    mostrarMensaje('Error al eliminar la referencia', 'error');
  }
};

onMounted(cargarDatos);
</script>

<style scoped>
.admin-glosario {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  font-family: sans-serif;
}

.admin-glosario h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.admin-glosario section {
  margin-bottom: 2rem;
}

.admin-glosario h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.admin-glosario form,
.admin-glosario .inline-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.admin-glosario .inline-form {
  flex-direction: row;
  align-items: center;
}

.admin-glosario input,
.admin-glosario textarea,
.admin-glosario select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  flex: 1;
}

.admin-glosario textarea {
  min-height: 60px;
  resize: vertical;
}

.admin-glosario button {
  padding: 0.5rem 1rem;
  background: #2d6cdf;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;
}

.admin-glosario button:hover:not(:disabled) {
  background: #1f52b3;
}

.admin-glosario button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* Estilo mensaje */
.mensaje {
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
}

.mensaje.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
}

.mensaje.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #f87171;
}
</style>
