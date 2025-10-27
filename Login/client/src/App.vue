<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <!-- Contenedor principal para tu contenido -->
    <div class="app-content">
      <RouterView />
    </div>
  </div>
</template>

<style>

:root {
  --navbar-height: 56px;
}

.navbar {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1050;
}

.app-content {
  padding-top: var(--navbar-height);
  box-sizing: border-box;
}

.layout {
  display: flex;
}

@media (max-width: 1400px) {
  .app-content {
    margin-right: 320px;
  }
}

@media (max-width: 900px) {
  .app-content {
    margin-right: 0;
  }
}

body {
  margin: 0;
  padding: 0;
}

</style>