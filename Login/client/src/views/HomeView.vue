<script setup lang="ts">
const stages = [
  {
    title: "Descomposición",
    text: "Dividir un problema complejo en partes más pequeñas y manejables.",
    image: new URL("@/assets/HomePage/Descomposicion.png", import.meta.url).href,
    alt: "Ilustración sobre descomposición de problemas",
  },
  {
    title: "Abstracción",
    text: "Identificar lo esencial y descartar lo irrelevante para enfocarse en lo importante.",
    image: new URL("@/assets/HomePage/Abstraccion.jpg", import.meta.url).href,
    alt: "Ilustración sobre abstracción de información",
  },
  {
    title: "Algoritmo",
    text: "Diseñar una secuencia osrdenada de pasos para resolver un problema.",
    image: new URL("@/assets/HomePage/Algoritmo.jpg", import.meta.url).href,
    alt: "Ilustración sobre diseño de algoritmos",
  },
  {
    title: "Generalización",
    text: "Aplicar soluciones aprendidas a nuevos problemas similares.",
    image: new URL("@/assets/HomePage/Generalizacion.jpg", import.meta.url).href,
    alt: "Ilustración sobre generalización de soluciones",
  },
];

const logoSrc = new URL("@/assets/HomePage/logo.png", import.meta.url).href;
</script>

<template>
  <main class="home-page">
    <div class="home-shell">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-content">
          <div class="hero-brand">
            <img :src="logoSrc" alt="Logo de la plataforma" class="hero-logo" />
            <span class="hero-tag">EDUCATECH</span>
          </div>
          <h1 id="hero-title" class="hero-title">
            Aprende a pensar como un programador
          </h1>
          <p class="hero-subtitle">
            Desarrolla habilidades de pensamiento computacional a través de ejercicios guiados,
            conceptos claros y evaluación progresiva.
          </p>
          <div class="hero-actions">
            <button class="btn-primary" type="button">Empezar aprendizaje</button>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-card">
            <p class="hero-card-title">Ruta guiada en C</p>
            <ul class="hero-card-list">
              <li>Conceptos claros y accesibles</li>
              <li>Ejercicios con retroalimentación</li>
              <li>Evaluación progresiva</li>
            </ul>
            <span class="hero-card-chip">Pensamiento computacional</span>
          </div>
          <div class="hero-glow"></div>
        </div>
      </section>

      <section class="definition" aria-labelledby="definition-title">
        <header class="section-header">
          <span class="section-eyebrow">Fundamentos</span>
          <h2 id="definition-title">¿Qué es el Pensamiento Computacional?</h2>
        </header>
        <div class="definition-grid">
          <blockquote class="definition-quote">
            <p>
              “…el proceso de pensamiento envuelto en formular un problema y sus soluciones de
              manera que las soluciones son representadas de una forma en que pueden ser llevadas
              a un agente de procesamiento de información.”
            </p>
            <cite>— Jeannette M. Wing</cite>
          </blockquote>
          <p class="definition-text">
            El pensamiento computacional no trata solo de programar, sino de analizar, estructurar
            y resolver problemas de manera lógica y sistemática. Nuestra plataforma está diseñada
            para desarrollar estas habilidades paso a paso.
          </p>
        </div>
      </section>

      <section class="stages" aria-labelledby="stages-title">
        <header class="section-header">
          <span class="section-eyebrow">Proceso</span>
          <h2 id="stages-title">Las etapas del Pensamiento Computacional</h2>
        </header>
        <div class="stages-grid">
          <article v-for="stage in stages" :key="stage.title" class="stage-card">
            <div class="stage-media">
              <img :src="stage.image" :alt="stage.alt" loading="lazy" />
            </div>
            <h3>{{ stage.title }}</h3>
            <p>{{ stage.text }}</p>
          </article>
        </div>
      </section>

      <section class="cta" aria-labelledby="cta-title">
        <div class="cta-card">
          <p id="cta-title" class="cta-text">
            Explora conceptos clave y desarrolla habilidades que te prepararán para resolver
            problemas como un experto.
          </p>
          <button class="btn-primary" type="button">Iniciar ahora</button>
        </div>
      </section>

      <footer class="home-footer">
        © 2026 EDUCATECH Todos los derechos reservados. Desarrollado
        por Julian Arcila / Jose Barrero. Contacto: proyectocarroarduino2025@gmail.com
      </footer>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  --surface: rgba(255, 255, 255, 0.92);
  --surface-strong: #ffffff;
  --border: rgba(11, 31, 51, 0.12);
  --shadow: 0 28px 60px rgba(11, 31, 51, 0.14);
  --shadow-soft: 0 18px 40px rgba(11, 31, 51, 0.12);
  --highlight: rgba(110, 198, 255, 0.3);
  padding: clamp(28px, 4vw, 64px) 0 clamp(56px, 6vw, 96px);
}

.home-shell {
  width: min(1200px, 100%);
  margin: 0 auto;
  display: grid;
  gap: clamp(22px, 3vw, 44px);
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: clamp(24px, 4vw, 56px);
  padding: clamp(28px, 4vw, 56px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: -140px;
  right: -120px;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, rgba(37, 100, 168, 0.2), transparent 70%);
  z-index: 0;
}

.hero-content,
.hero-visual {
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  gap: 18px;
  animation: fade-slide 0.8s ease both;
}

.hero-brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.hero-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(11, 31, 51, 0.18);
  background: #fff;
  padding: 8px;
}

.hero-tag {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--blue-700, #1a4a78);
  font-weight: 600;
}

.hero-title {
  font-size: clamp(34px, 3.4vw, 52px);
  line-height: 1.1;
  margin: 0;
  color: var(--text-main, #0b1f33);
}

.hero-subtitle {
  margin: 0;
  font-size: clamp(16px, 1.35vw, 20px);
  line-height: 1.7;
  color: var(--text-muted, #3e556c);
}

.hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 6px;
}

.btn-primary {
  background: linear-gradient(120deg, #1a4a78, #2564a8);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 18px 34px rgba(26, 74, 120, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 40px rgba(26, 74, 120, 0.35);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fade-slide 0.8s ease both;
  animation-delay: 0.1s;
}

.hero-card {
  background: var(--surface-strong);
  border-radius: 24px;
  border: 1px solid rgba(11, 31, 51, 0.08);
  padding: 28px 26px;
  width: min(100%, 320px);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 12px;
}

.hero-card-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--blue-800, #123357);
}

.hero-card-list {
  margin: 0;
  padding-left: 18px;
  color: var(--text-muted, #3e556c);
  display: grid;
  gap: 8px;
  font-size: 15px;
}

.hero-card-chip {
  justify-self: start;
  background: rgba(110, 198, 255, 0.2);
  color: var(--blue-700, #1a4a78);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.hero-glow {
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(110, 198, 255, 0.35), transparent 70%);
  z-index: -1;
  right: 16%;
  top: 12%;
  filter: blur(4px);
}

.section-header {
  display: grid;
  gap: 8px;
}

.section-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 12px;
  font-weight: 600;
  color: var(--blue-600, #2564a8);
}

.section-header h2 {
  margin: 0;
  font-size: clamp(24px, 2.4vw, 32px);
  color: var(--text-main, #0b1f33);
}

.definition {
  background: var(--surface);
  border-radius: 24px;
  padding: clamp(24px, 3.5vw, 48px);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.definition-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(18px, 3vw, 32px);
  margin-top: 24px;
  align-items: center;
}

.definition-quote {
  margin: 0;
  padding: 24px;
  border-left: 4px solid var(--blue-600, #2564a8);
  background: rgba(37, 100, 168, 0.08);
  border-radius: 16px;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-main, #0b1f33);
  display: grid;
  gap: 12px;
}

.definition-quote cite {
  font-style: normal;
  font-weight: 600;
  color: var(--blue-800, #123357);
}

.definition-text {
  margin: 0;
  font-size: 16px;
  line-height: 1.75;
  color: var(--text-muted, #3e556c);
}

.stages {
  display: grid;
  gap: 24px;
}

.stages-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(18px, 2.4vw, 28px);
}

.stage-card {
  background: var(--surface-strong);
  border-radius: 20px;
  border: 1px solid rgba(11, 31, 51, 0.08);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 12px;
  padding-bottom: 18px;
  animation: card-reveal 0.7s ease both;
}

.stage-card:nth-child(2) {
  animation-delay: 0.06s;
}

.stage-card:nth-child(3) {
  animation-delay: 0.12s;
}

.stage-card:nth-child(4) {
  animation-delay: 0.18s;
}

.stage-media {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: rgba(37, 100, 168, 0.1);
}

.stage-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.stage-card:hover .stage-media img {
  transform: scale(1.04);
}

.stage-card h3 {
  margin: 0 18px;
  font-size: 18px;
  color: var(--blue-800, #123357);
}

.stage-card p {
  margin: 0 18px 8px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted, #3e556c);
}

.cta {
  display: flex;
  justify-content: center;
}

.cta-card {
  width: min(960px, 100%);
  background: linear-gradient(120deg, rgba(26, 74, 120, 0.12), rgba(110, 198, 255, 0.3));
  border-radius: 24px;
  padding: clamp(24px, 4vw, 44px);
  border: 1px solid rgba(37, 100, 168, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  box-shadow: var(--shadow-soft);
}

.cta-text {
  margin: 0;
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1.6;
  color: var(--text-main, #0b1f33);
}

.home-footer {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted, #3e556c);
  padding-top: 8px;
}

@keyframes fade-slide {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes card-reveal {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1100px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    justify-content: flex-start;
  }

  .definition-grid {
    grid-template-columns: 1fr;
  }

  .stages-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cta-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 720px) {
  .hero {
    padding: 24px;
  }

  .hero-logo {
    width: 54px;
    height: 54px;
  }

  .stages-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .hero-visual,
  .stage-card {
    animation: none;
  }

  .btn-primary,
  .stage-media img {
    transition: none;
  }
}
</style>
