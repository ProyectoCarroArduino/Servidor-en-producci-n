<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div id="app" class="guia-page">
    <NavBar />
    <!-- Contenedor principal para tu contenido -->
    <div class="app-content">
      <RouterView />
    </div>
  </div>
</template>

<style>

:root {
  --navbar-height: 80px;
}

.navbar {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
}

.app-content {
  padding-top: var(--navbar-height);
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}

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

body {
  margin: 0;
  padding: 0;
}

</style>