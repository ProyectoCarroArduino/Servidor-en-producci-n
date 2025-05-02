<template>
  <div id="user">
    <div class="container">
      <div v-if="user" class="card card-body mt-8">
        <h5 class="card-title">Username: {{ user.username }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Email: {{ user.email }}</h6>
        <h6 class="card-subtitle mb-2 text-muted">First Name: {{ user.first_name }}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Last Name: {{ user.last_name }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../stores/auth";
import { computed, onMounted } from "vue";

const authStore = useAuthStore();

const user = computed(() => {
  return authStore.userDetail;
});

const getUser = async () => {
  try {
    await authStore.getUser();
  } catch (err: unknown) {
    if (typeof err === "object" && err !== null && "response" in err) {
      const axiosError = err as { response: { status: number } };
      if (axiosError.response.status === 401) {
        console.error("No autorizado. Redirigir a la página de inicio de sesión.");
        return;
      }
    }

    if (err instanceof Error) {
      console.error("Error en la solicitud:", err.message);
    } else {
      console.error("Error desconocido:", err);
    }
  }
};

    onMounted(async () => {
    await getUser();
    });

</script>

<style scoped>
#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.card {
  max-width: 30vw;
  margin: auto;
}
</style>