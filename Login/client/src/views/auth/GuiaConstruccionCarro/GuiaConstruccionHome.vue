<template>
  <div class="guia-page">
    <div class="layout-general">
      <main class="guia-main">
        <section class="hero">
          <div class="hero-text">
            <h1 class="hero-title">Construcción del Carro Arduino</h1>
            <h2 class="hero-subtitle">
              Arma tu propio robot móvil y aprende a pensar como ingeniero.
            </h2>
            <div class="hero-paragraphs">
              <p>
                Esta guía te acompaña en el ensamblaje completo de un carro robótico
                controlado por una placa Arduino UNO, desde los primeros cables hasta
                el montaje final del circuito sobre el chasis.
              </p>
              <p>
                Cada paso combina una explicación teórica con imágenes y audios de
                apoyo, para que entiendas qué estás conectando y, sobre todo, por qué
                se conecta de esa forma.
              </p>
              <p>
                Al terminar cada paso resolverás ejercicios de descomposición,
                algoritmo, abstracción y generalización: las mismas habilidades de
                pensamiento computacional que usarás luego al programar en C.
              </p>
            </div>
            <div class="hero-actions">
              <button class="cta cta-primary" @click="irAMateriales">
                Ver materiales y comenzar
              </button>
              <button class="cta cta-ghost" @click="irAPrimerPaso">
                Ir al primer paso
              </button>
            </div>
          </div>
          <figure class="hero-visual">
            <img :src="heroImage" alt="Ilustración del carro robótico con Arduino UNO" />
          </figure>
        </section>

        <section class="value-section" aria-label="Beneficios de la guía">
          <div class="value-grid">
            <article class="value-card">
              <span class="card-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14.5 5.5a3.5 3.5 0 0 0 4.6 4.6l-8.6 8.6a2.2 2.2 0 0 1-3.1-3.1z" />
                  <path d="M5 19l1.5-1.5" />
                </svg>
              </span>
              <h3>Ensamblaje paso a paso</h3>
              <p>Instrucciones cortas y ordenadas, sin saltos ni supuestos.</p>
            </article>
            <article class="value-card">
              <span class="card-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M9 9h6v6H9z" />
                  <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
                </svg>
              </span>
              <h3>Hardware real</h3>
              <p>Arduino UNO, puente H L298N, motorreductores y Bluetooth HC-06.</p>
            </article>
            <article class="value-card">
              <span class="card-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="18" cy="7" r="2.5" />
                  <circle cx="18" cy="17" r="2.5" />
                  <path d="M8.3 11l6.8-3" />
                  <path d="M8.3 13l6.8 3" />
                </svg>
              </span>
              <h3>Pensamiento computacional</h3>
              <p>Cada paso se refuerza con ejercicios de las cuatro habilidades.</p>
            </article>
          </div>
        </section>

        <section class="phases-section" aria-labelledby="titulo-fases">
          <h2 id="titulo-fases" class="section-title">Ruta de construcción</h2>
          <p class="section-text">
            Cuatro fases y catorce pasos guiados. Avanza en orden, y construye el carro paso a paso.
          </p>
          <ol class="value-grid phase-grid">
            <li v-for="fase in fases" :key="fase.numero" class="value-card">
              <span class="card-icon card-number" aria-hidden="true">{{ fase.numero }}</span>
              <h3>{{ fase.titulo }}</h3>
              <p>{{ fase.descripcion }}</p>
            </li>
          </ol>
        </section>
      </main>
      <aside class="menu-lateral">
        <MenuCarro />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import MenuCarro from "@/components/MenuCarro.vue";
import heroImage from "@/assets/GuiaConstruccion/GuiaConstruccionCarro.svg";

const router = useRouter();

const fases = [
  {
    numero: 1,
    titulo: "Ensamblaje mecánico",
    descripcion:
      "Cables a los motorreductores, soportes al chasis, motorreductores a los soportes y ruedas.",
  },
  {
    numero: 2,
    titulo: "Montaje del circuito",
    descripcion:
      "Arduino UNO sobre su base, módulo Bluetooth HC-06 y puente H (L298N) conectados a la placa.",
  },
  {
    numero: 3,
    titulo: "Fuente de poder",
    descripcion:
      "Bornera macho a la fuente, preparación de la bornera hembra y conexión al puente H.",
  },
  {
    numero: 4,
    titulo: "Integración final",
    descripcion:
      "Traslado del circuito al chasis y verificación de todo el conjunto ya ensamblado.",
  },
];

function irAMateriales() {
  router.push("/GuiaConstruccion").then(() => window.scrollTo(0, 0));
}

function irAPrimerPaso() {
  router
    .push("/ConectarCablesMotorreductoresTeoria")
    .then(() => window.scrollTo(0, 0));
}
</script>

<style scoped>
.guia-page {
  --blue-950: #0b1f33;
  --blue-800: #123357;
  --blue-700: #1a4a78;
  --blue-600: #2564a8;
  --blue-200: #d7e7fb;
  --blue-100: #eff6ff;
  --accent: #6ec6ff;
  --accent-soft: rgba(110, 198, 255, 0.28);
  --text-main: #0b1f33;
  --text-muted: #3e556c;
  font-family: "Sora", "Manrope", "Poppins", "Segoe UI", sans-serif;
  color: var(--text-main);
  min-height: 100vh;
  background:
    radial-gradient(900px 460px at 10% 10%, rgba(102, 169, 255, 0.26), transparent 60%),
    radial-gradient(600px 360px at 80% 5%, rgba(86, 175, 230, 0.22), transparent 60%),
    linear-gradient(180deg, #f7fbff 0%, #eef4ff 52%, #f7fbff 100%);
}

.layout-general {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: clamp(20px, 3vw, 40px);
  padding: clamp(24px, 4vw, 56px) clamp(20px, 5vw, 64px) 64px;
  align-items: start;
}

.guia-main {
  position: relative;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 50, 90, 0.12);
  border-radius: 28px;
  padding: clamp(28px, 4vw, 52px);
  box-shadow: 0 32px 70px rgba(11, 31, 51, 0.16);
  backdrop-filter: blur(6px);
  overflow: hidden;
}

.guia-main::before {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  top: -140px;
  right: -120px;
  background: radial-gradient(circle, rgba(110, 198, 255, 0.35), transparent 70%);
  z-index: 0;
}

.guia-main > * {
  position: relative;
  z-index: 1;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
}

.hero-text {
  animation: fade-slide 0.8s ease both;
}

.hero-title {
  font-size: clamp(34px, 3.4vw, 50px);
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin: 0;
}

.hero-subtitle {
  font-size: clamp(18px, 1.7vw, 22px);
  color: var(--blue-700);
  font-weight: 600;
  margin: 14px 0 0;
}

.hero-paragraphs {
  margin-top: 18px;
  display: grid;
  gap: 14px;
}

.hero-paragraphs p {
  margin: 0;
  font-size: clamp(15px, 1.15vw, 17px);
  line-height: 1.7;
  color: var(--text-muted);
}

.hero-actions {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.cta {
  border: none;
  cursor: pointer;
  padding: 13px 24px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.cta-primary {
  background: linear-gradient(135deg, var(--blue-600), var(--blue-800));
  color: #ffffff;
  box-shadow: 0 16px 30px rgba(37, 100, 168, 0.32);
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 38px rgba(37, 100, 168, 0.38);
}

.cta-ghost {
  background: #ffffff;
  color: var(--blue-700);
  box-shadow: inset 0 0 0 1.5px rgba(37, 100, 168, 0.28);
}

.cta-ghost:hover {
  transform: translateY(-3px);
  background: var(--blue-100);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 260px;
  animation: fade-slide 0.8s ease both;
  animation-delay: 0.1s;
}

.hero-visual::before {
  content: "";
  position: absolute;
  width: min(100%, 360px);
  height: min(100%, 360px);
  border-radius: 32px;
  background: linear-gradient(140deg, rgba(110, 198, 255, 0.32), rgba(37, 100, 168, 0.15));
  transform: rotate(-4deg);
  z-index: 0;
}

.hero-visual img {
  position: relative;
  z-index: 1;
  width: min(100%, 420px);
  height: auto;
  border-radius: 20px;
  box-shadow: 0 28px 60px rgba(11, 31, 51, 0.25);
  animation: float 6s ease-in-out infinite;
}

.value-section {
  margin-top: clamp(32px, 4vw, 56px);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 24px);
}

.value-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid rgba(11, 31, 51, 0.08);
  padding: 24px;
  box-shadow: 0 16px 34px rgba(11, 31, 51, 0.1);
  display: grid;
  gap: 10px;
  align-content: start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: card-reveal 0.8s ease both;
}

.value-card:nth-child(2) {
  animation-delay: 0.08s;
}

.value-card:nth-child(3) {
  animation-delay: 0.16s;
}

.value-card:nth-child(4) {
  animation-delay: 0.24s;
}

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 44px rgba(11, 31, 51, 0.16);
}

.card-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--blue-700);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px rgba(110, 198, 255, 0.45);
}

.card-icon svg {
  width: 24px;
  height: 24px;
}

.card-number {
  font-size: 19px;
  font-weight: 700;
}

.value-card h3 {
  margin: 0;
  font-size: 18px;
  color: var(--blue-800);
}

.value-card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
}

.phases-section {
  margin-top: clamp(36px, 4.5vw, 60px);
}

.section-title {
  margin: 0;
  font-size: clamp(18px, 1.7vw, 22px);
  color: var(--blue-700);
  font-weight: 600;
}

.section-text {
  margin: 10px 0 clamp(18px, 2.4vw, 26px);
  font-size: clamp(15px, 1.15vw, 17px);
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 68ch;
}

.phase-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.menu-lateral {
  position: sticky;
  top: 110px;
  align-self: start;
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(11, 31, 51, 0.12);
  box-shadow: 0 18px 34px rgba(11, 31, 51, 0.1);
}

@keyframes fade-slide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes card-reveal {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 1200px) {
  .layout-general {
    grid-template-columns: minmax(0, 1fr) 240px;
  }
}

@media (max-width: 1024px) {
  .layout-general {
    grid-template-columns: 1fr;
  }

  .menu-lateral {
    position: relative;
    top: 0;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    order: -1;
  }

  .value-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .guia-main {
    padding: 24px;
  }

  .value-grid,
  .phase-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-text,
  .hero-visual,
  .value-card,
  .hero-visual img {
    animation: none;
  }

  .cta,
  .value-card {
    transition: none;
  }
}
</style>
