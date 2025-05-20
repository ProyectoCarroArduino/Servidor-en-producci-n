<template>
  <div class="verify-email">
    <h2>Verificando cuenta…</h2>
    <p v-if="message">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const message = ref("");
const error = ref("");

onMounted(async () => {
  const token = route.query.token;
  if (!token) {
    error.value = "Token no proporcionado.";
    return;
  }

  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URI}/api/auth/verify-email`,
      { params: { token } }
    );
    message.value = res.data.message;
    // Opcional: redirigir al login tras 3 segundos
    setTimeout(() => router.push('/login'), 3000);
  } catch (err) {
    error.value = err.response?.data?.error || "Error al verificar.";
  }
});
</script>

<style scoped>
.verify-email { max-width: 400px; margin: 2rem auto; text-align: center; }
.error { color: red; }
</style>
