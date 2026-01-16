<template>
  <div class="guia-page">
    <div class="layout-general">
      <main class="guia-main">
        <section class="hero">
          <div class="hero-text">
            <h1 class="hero-title">Introducción a la Programación en C</h1>
            <h2 class="hero-subtitle">
              Aprende a pensar como programador desde los fundamentos.
            </h2>
            <div class="hero-paragraphs">
              <p>
                Esta guía está diseñada para ayudarte a comprender la programación desde
                su base lógica, utilizando el lenguaje C como herramienta principal.
              </p>
              <p>
                Aquí no solo aprenderás a escribir código, sino a analizar problemas,
                estructurar soluciones y entender cómo piensa un programa. Cada etapa ha
                sido pensada para avanzar de forma progresiva, clara y práctica.
              </p>
              <p>
                A lo largo de esta guía trabajarás conceptos como variables, estructuras
                de control y operaciones, acompañados de ejercicios interactivos que
                refuerzan tu aprendizaje paso a paso.
              </p>
            </div>
          </div>
          <figure class="hero-visual">
            <img
              :src="heroImage"
              alt="Ilustración educativa de programación en C"
            />
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
                  aria-hidden="true"
                >
                  <path d="M4 18h6v-4h6v-4h4" />
                  <path d="M4 18h16" />
                </svg>
              </span>
              <h3>Aprendizaje progresivo</h3>
              <p>Desde conceptos básicos hasta estructuras más complejas.</p>
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
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                </svg>
              </span>
              <h3>Enfoque práctico</h3>
              <p>Ejercicios diseñados para aplicar lo aprendido de inmediato.</p>
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
                  aria-hidden="true"
                >
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="18" cy="7" r="2.5" />
                  <circle cx="18" cy="17" r="2.5" />
                  <path d="M8.3 11l6.8-3" />
                  <path d="M8.3 13l6.8 3" />
                </svg>
              </span>
              <h3>Pensamiento computacional</h3>
              <p>Descomposición, lógica y razonamiento antes del código.</p>
            </article>
          </div>
        </section>
      </main>
      <aside class="menu-lateral">
        <Menu />
      </aside>
    </div>
  </div>
</template>

<script setup>
import Menu from "@/components/Menu.vue";
import heroImage from "@/assets/GuiaProgramacion/GuiaProgramacionC.png";
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: card-reveal 0.8s ease both;
}

.value-card:nth-child(2) {
  animation-delay: 0.08s;
}

.value-card:nth-child(3) {
  animation-delay: 0.16s;
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

  .value-grid {
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
