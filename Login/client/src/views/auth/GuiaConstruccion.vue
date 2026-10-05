<template>
  <div class="layout-general">
    <main class="contenido">
      <h1>Guía construcción carro Arduino</h1>
      <h2>Materiales:</h2>
      <ul>
        <li>
          <p class="texto-personalizado"><strong>Placa Arduino UNO</strong></p>
        </li>
        <li>
          <p class="texto-personalizado texto-rojo">
            <strong>Chasis carro Arduino</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado texto-rojo">
            <strong>Base en 3D para placa Arduino UNO</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado texto-rojo">
            <strong>Base en 3D para módulo L298N</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado texto-rojo">
            <strong>Cuatro soportes para motorredcutor en 3D</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado texto-rojo"><strong>Carcasa en 3D</strong></p>
        </li>
        <li>
          <p class="texto-personalizado texto-rojo">
            <strong>Tapa en acrílico transparente</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Cuatro ruedas para motorredcutor</strong></p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Cuatro motorredcutores TT de doble eje</strong></p>
        </li>
        <li>
          <p class="texto-personalizado">
            <strong>Módulo controlador de motores L298N o Puente H</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Módulo Bluetooth HC-05</strong></p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Interruptor ON/OFF de cuatro pines</strong></p>
        </li>
        <li>
          <p class="texto-personalizado">
            <strong>Porta pilas para la alimentación de la placa de Arduino</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Tres pilas de 3.7V</strong></p>
        </li>
        <li>
          <p class="texto-personalizado">
            <strong>Cables de teléfono, tuercas y tornillos</strong>
          </p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Una bornera macho</strong></p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Una bornera hembra</strong></p>
        </li>
        <li>
          <p class="texto-personalizado"><strong>Cables jumper macho hembra</strong></p>
        </li>
      </ul>
      <div class="notas-materiales">
        <p class="texto-personalizado">
          Algunos otros materiales de uso general como destornilladores, alicates, pinzas, bisturí,
          corta frios, cautín tipo lápiz, etc también son necesarios. Al principio de cada paso se
          menciona qué materiales son necesarios para el desarrollo de este.
        </p>
        <p>
          <span style="font-weight: bold">Nota:</span> Los materiales que están de color
          <strong class="texto-rojo">rojo</strong> se adquieren en una tienda electrónica de
          confianza, y algunos otros también se pueden adquirir en internet. Es necesario contar con
          los materiales correctos para poder seguir la guía detalladamente, de no ser así el
          proceso puede ser difícil y en algunos pasos podría obstruir el avance.
        </p>
        <p class="texto-personalizado">
          Nombre y número de contacto de la tienda especializada en electrónica en donde se
          adquirieron los materiales necesarios señalados en rojo:
          <strong>Milton Ojeda 3005527396</strong>.
        </p>
      </div>
      <div class="acciones">
        <button class="bt-validate" @click="finish">Avanzar</button>
      </div>
    </main>
    <div class="menu-lateral">
      <div>
        <MenuCarro />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import MenuCarro from '@/components/MenuCarro.vue'

const router = useRouter()

function finish() {
  router.push('/ConectarCablesMotorreductoresTeoria').then(() => {
    window.scrollTo(0, 0)
  })
}
</script>

<style scoped>
.layout-general {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: clamp(20px, 3vw, 40px);
  padding: clamp(24px, 4vw, 56px) clamp(20px, 5vw, 64px) 64px;
  align-items: start;
  color: var(--ec-text);
  font-family: var(--ec-font);
}

.contenido {
  min-width: 0;
  padding: clamp(24px, 4vw, 48px);
  background: var(--ec-surface-glass);
  border: 1px solid var(--ec-border);
  border-radius: var(--ec-radius-lg);
  box-shadow: var(--ec-shadow-sm);
}

h1 {
  margin: 0 0 36px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--ec-blue-200);
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2 {
  margin: 0 0 20px;
  color: var(--ec-blue-800);
  font-size: clamp(22px, 2vw, 27px);
  line-height: 1.35;
}

ul {
  margin: 0 0 32px;
  padding-left: 24px;
  column-count: 2;
  column-width: 260px;
  column-gap: clamp(28px, 4vw, 48px);
}

li {
  margin-bottom: 14px;
  break-inside: avoid;
}

li::marker {
  color: var(--ec-blue-600);
}

p {
  margin: 0 0 18px;
  font-family: var(--ec-font-ui);
  font-size: 18px;
  line-height: 1.7;
  color: var(--ec-text-muted);
}

li p {
  margin: 0;
}

strong {
  font-weight: 600;
}

.texto-rojo {
  color: var(--viz-div-neg-2);
}

.notas-materiales {
  display: grid;
  gap: 24px;
  padding: clamp(20px, 2.5vw, 28px);
  background: var(--ec-blue-100);
  border-left: 4px solid var(--ec-blue-600);
  border-radius: 0 var(--ec-radius-sm) var(--ec-radius-sm) 0;
}

.notas-materiales p {
  margin: 0;
  font-size: 16px;
  line-height: 1.75;
}

.notas-materiales p:last-child {
  padding-top: 24px;
  border-top: 1px solid var(--ec-blue-200);
}

.acciones {
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--ec-blue-200);
}

.bt-validate {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  border: none;
  border-radius: var(--ec-radius-sm);
  font: 600 15px/1.5 var(--ec-font-ui);
  color: #ffffff;
  background: linear-gradient(135deg, var(--ec-blue-600), var(--ec-blue-800));
  cursor: pointer;
  transition: background 0.2s ease;
}

.bt-validate:hover {
  background: var(--ec-blue-800);
}

.bt-validate:focus-visible {
  outline: 2px solid var(--ec-blue-600);
  outline-offset: 4px;
}

@media (max-width: 1024px) {
  .layout-general {
    grid-template-columns: minmax(0, 1fr);
  }

  ul {
    column-count: 1;
  }
}

@media (max-width: 720px) {
  .layout-general {
    padding: 8px 0 32px;
  }

  .contenido {
    padding: 24px 18px;
    border-radius: var(--ec-radius-md);
  }

  .notas-materiales {
    padding: 18px;
  }

  .bt-validate {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bt-validate {
    transition: none;
  }
}
</style>
