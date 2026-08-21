<template>
  <div class="admin-glosario">
    <h1>🛠 Administrar Glosario y Referencias</h1>

    <!-- MENSAJE -->
    <div v-if="mensaje" :class="['mensaje', tipoMensaje]">{{ mensaje }}</div>

    <!-- AGREGAR CONCEPTO -->
    <section>
      <h2>Nuevo Concepto</h2>
      <form @submit.prevent="crearConcepto">
        <input v-model="nuevoConcepto.termino" placeholder="Término" required />
        <textarea v-model="nuevoConcepto.definicion" placeholder="Definición" required></textarea>
        <input v-model="nuevoConcepto.imagen" placeholder="URL de imagen (opcional)" />
        <button type="submit">Agregar Concepto</button>
      </form>
    </section>

    <!-- AGREGAR REFERENCIA -->
    <section>
      <h2>Nueva Referencia</h2>
      <form @submit.prevent="crearReferencia">
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
          <option v-for="c in conceptos" :key="c._id" :value="c._id">
            {{ c.termino }}
          </option>
        </select>
        <button @click="eliminarConceptoSeleccionado" :disabled="!idConceptoSeleccionado">Eliminar</button>
      </div>
    </section>

    <!-- ELIMINAR REFERENCIA -->
    <section>
      <h2>Eliminar Referencia</h2>
      <div class="inline-form">
        <select v-model="idReferenciaSeleccionada">
          <option disabled value="">Seleccione una referencia</option>
          <option v-for="r in referencias" :key="r._id" :value="r._id">
            {{ r.nombre }} ({{ r.tipo }})
          </option>
        </select>
        <button @click="eliminarReferenciaSeleccionada" :disabled="!idReferenciaSeleccionada">Eliminar</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useConceptos } from '@/composables/useConceptos'

const {
  conceptos,
  referencias,
  cargarContenido,
  agregarConcepto,
  eliminarConcepto,
  agregarReferencia,
  eliminarReferencia,
  cargando,
  error
} = useConceptos()

const nuevoConcepto = ref({ termino: '', definicion: '', imagen: '' })
const nuevaReferencia = ref({ nombre: '', tipo: 'Lectura', enlace: '', descripcion: '' })

const idConceptoSeleccionado = ref('')
const idReferenciaSeleccionada = ref('')

// Mensaje de estado
const mensaje = ref('')
const tipoMensaje = ref('') // 'success' o 'error'

function mostrarMensaje(texto, tipo = 'success') {
  mensaje.value = texto
  tipoMensaje.value = tipo
  setTimeout(() => {
    mensaje.value = ''
    tipoMensaje.value = ''
  }, 3000)
}

async function crearConcepto() {
  try {
    await agregarConcepto(nuevoConcepto.value)
    nuevoConcepto.value = { termino: '', definicion: '', imagen: '' }
    mostrarMensaje('Concepto agregado con éxito')
  } catch {
    mostrarMensaje('Error al agregar el concepto', 'error')
  }
}

async function crearReferencia() {
  try {
    await agregarReferencia(nuevaReferencia.value)
    nuevaReferencia.value = { nombre: '', tipo: 'Lectura', enlace: '', descripcion: '' }
    mostrarMensaje('Referencia agregada con éxito')
  } catch {
    mostrarMensaje('Error al agregar la referencia', 'error')
  }
}

async function eliminarConceptoSeleccionado() {
  if (!idConceptoSeleccionado.value) return
  const confirmar = confirm('¿Estás seguro de eliminar este concepto?')
  if (!confirmar) return

  try {
    await eliminarConcepto(idConceptoSeleccionado.value)
    idConceptoSeleccionado.value = ''
    mostrarMensaje('Concepto eliminado con éxito')
  } catch {
    mostrarMensaje('Error al eliminar el concepto', 'error')
  }
}

async function eliminarReferenciaSeleccionada() {
  if (!idReferenciaSeleccionada.value) return
  const confirmar = confirm('¿Estás seguro de eliminar esta referencia?')
  if (!confirmar) return

  try {
    await eliminarReferencia(idReferenciaSeleccionada.value)
    idReferenciaSeleccionada.value = ''
    mostrarMensaje('Referencia eliminada con éxito')
  } catch {
    mostrarMensaje('Error al eliminar la referencia', 'error')
  }
}

onMounted(cargarContenido)
</script>


<style scoped>
.admin-glosario {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  /* Tipografia del tema (theme.css): Sora para el contenido de la vista */
  font-family: var(--ec-font);
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
  /* Los controles de formulario no heredan la fuente: hay que declararla */
  font-family: var(--ec-font-ui);
}

.admin-glosario textarea {
  min-height: 60px;
  resize: vertical;
}

.admin-glosario button {
  padding: 0.5rem 1rem;
  font-family: var(--ec-font-ui);
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
  font-family: var(--ec-font-ui);
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
