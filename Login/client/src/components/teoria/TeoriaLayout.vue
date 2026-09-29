<template>
  <div class="teoria-page">
    <div class="teoria-layout">
      <main class="teoria-main">
        <header class="teoria-encabezado">
          <p v-if="migas" class="teoria-migas">{{ migas }}</p>
          <h1>{{ titulo }}</h1>
        </header>

        <slot />

        <div v-if="siguienteRuta" class="teoria-acciones">
          <button class="teoria-boton" @click="irASiguiente">
            {{ siguienteTexto }}
          </button>
        </div>
      </main>

      <aside class="teoria-menu">
        <Menu />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Menu from "@/components/Menu.vue";

// Plantilla 
// escribir contenido con etiquetas simples (h2, h3, p, ul, ol, table) y las
// clases .nota / .aparte; el estilo se aplica aqui.
const props = defineProps({
  titulo: { type: String, required: true },
  migas: { type: String, default: "" },
  siguienteRuta: { type: String, default: "" },
  siguienteTexto: { type: String, default: "Avanzar" },
});

const router = useRouter();

function irASiguiente() {
  router.push(props.siguienteRuta).then(() => window.scrollTo(0, 0));
}
</script>

<!-- Estilos -->
<style>
.teoria-page {
  --t-azul-800: #123357;
  --t-azul-700: #1a4a78;
  --t-azul-600: #2564a8;
  --t-azul-200: #d7e7fb;
  --t-azul-100: #eff6ff;
  --t-texto: #0b1f33;
  --t-texto-suave: #3e556c;
  font-family: "Sora", "Manrope", "Poppins", "Segoe UI", sans-serif;
  color: var(--t-texto);
  min-height: 100vh;
  background: linear-gradient(180deg, #f7fbff 0%, #eef4ff 52%, #f7fbff 100%);
}

.teoria-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: clamp(20px, 3vw, 40px);
  padding: clamp(24px, 4vw, 56px) clamp(20px, 5vw, 64px) 64px;
  align-items: start;
}

.teoria-main {
  min-width: 0;
  background: #ffffff;
  border: 1px solid rgba(17, 50, 90, 0.12);
  border-radius: 20px;
  padding: clamp(24px, 4vw, 48px);
  box-shadow: 0 20px 50px rgba(11, 31, 51, 0.1);
}

.teoria-encabezado {
  border-bottom: 1px solid var(--t-azul-200);
  padding-bottom: 20px;
  margin-bottom: 8px;
}

.teoria-migas {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--t-azul-600);
}

.teoria-encabezado h1 {
  margin: 0;
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.15;
}

.teoria-main h2 {
  margin: 36px 0 14px;
  font-size: clamp(22px, 2vw, 27px);
  color: var(--t-azul-800);
}

.teoria-main h3 {
  margin: 24px 0 10px;
  font-size: 19px;
  color: var(--t-azul-700);
}

.teoria-main p,
.teoria-main li {
  font-size: 17px;
  line-height: 1.7;
  color: var(--t-texto-suave);
}

.teoria-main p {
  margin: 0 0 14px;
}

.teoria-main ul,
.teoria-main ol {
  margin: 0 0 14px;
  padding-left: 24px;
}

.teoria-main li {
  margin-bottom: 6px;
}

.teoria-main strong {
  color: var(--t-texto);
}

.teoria-main :not(pre) > code {
  font-family: "Consolas", "Fira Code", "Courier New", monospace;
  font-size: 0.92em;
  background: var(--t-azul-100);
  color: var(--t-azul-800);
  padding: 1px 6px;
  border-radius: 6px;
}

/* Recuadro para ideas clave o resumenes */
.teoria-main .nota {
  margin: 8px 0 16px;
  padding: 16px 20px;
  border-left: 4px solid var(--t-azul-600);
  background: var(--t-azul-100);
  border-radius: 0 12px 12px 0;
}

.teoria-main .nota p:last-child,
.teoria-main .nota ul:last-child {
  margin-bottom: 0;
}

/* Texto secundario: referencias a otras secciones */
.teoria-main .aparte {
  font-size: 15px;
  font-style: italic;
}

.teoria-main table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  font-size: 15px;
}

.teoria-main th,
.teoria-main td {
  padding: 10px 12px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--t-azul-200);
  line-height: 1.55;
  color: var(--t-texto-suave);
}

.teoria-main th {
  background: var(--t-azul-100);
  color: var(--t-azul-800);
}

.teoria-acciones {
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
}

.teoria-boton {
  border: none;
  cursor: pointer;
  padding: 13px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  color: #ffffff;
  background: var(--t-azul-600);
  transition: background 0.2s ease;
}

.teoria-boton:hover {
  background: var(--t-azul-800);
}

.teoria-menu {
  position: sticky;
  top: 110px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(11, 31, 51, 0.12);
}

@media (max-width: 1200px) {
  .teoria-layout {
    grid-template-columns: minmax(0, 1fr) 240px;
  }
}

@media (max-width: 1024px) {
  .teoria-layout {
    grid-template-columns: 1fr;
  }

  .teoria-menu {
    position: relative;
    top: 0;
  }
}

@media (max-width: 720px) {
  .teoria-main {
    padding: 22px 16px;
  }

  .teoria-main table {
    display: block;
    overflow-x: auto;
  }
}
</style>
