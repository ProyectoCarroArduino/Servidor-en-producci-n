<template>
  <div class="layout">
    <main class="contenido">
      <slot /> <!-- Aquí se inyecta el contenido de cada vista -->
    </main>

    <aside class="menu-lateral">
      <MenuCarro />
    </aside>
  </div>
</template>

<script>
import MenuCarro from "@/components/MenuCarro.vue";

export default {
  components: { MenuCarro }
};
</script>

<style scoped>

.layout {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.contenido {
  flex: 3;
  max-width: 900px;
  text-align: justify;
}

.menu-lateral {
  flex: 1;
  background-color: #0d1b2a;
  border-radius: 10px;
  padding: 1rem;
  position: sticky;
  top: 20px;
  height: fit-content;
}
</style>

