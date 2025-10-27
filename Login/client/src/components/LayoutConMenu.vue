<template>
  <div id="user">
    <div class="contenedor-general">
      <!-- Zona principal de contenido -->
      <div class="tarjeta-contenido">
        <slot name="contenido"></slot>
      </div>

      <!-- Zona del menú lateral -->
      <div class="tarjeta-menu">
        <slot name="menu"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutConMenu",
};
</script>

<style scoped>
#user {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.contenedor-general {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
}

.tarjeta-contenido {
  flex: 3;
  background-color: #111;
  border-radius: 10px;
  color: white;
  padding: 25px;
  margin-top: 10px;
}

.tarjeta-menu {
  flex: 1;
  background-color: #0d1b2a;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
}

.temas {
  position: sticky;
  top: 20px;
}

/* Adaptación a pantallas pequeñas */
@media (max-width: 992px) {
  .contenedor-general {
    flex-direction: column;
    align-items: center;
  }

  .tarjeta-contenido,
  .tarjeta-menu {
    width: 100%;
  }

  .tarjeta-menu {
    margin-top: 20px;
  }
}
</style>

