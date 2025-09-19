<template>
  <div id="login">
    <div class="container">
      <div class="card card-body mt-8">
        <h5 class="card-title">Ingresar</h5>
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="email" class="form-label">Dirección de correo electrónico</label>
            <input v-model="loginData.email"
              type="email"
              class="form-control"
              id="email"
              autocomplete="off"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input v-model="loginData.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Ingresa tu clave"
            />
          </div>
          <button type="submit" class="btn btn-success">Ingresar</button>
        </form>
        <p v-if="errorMessage" class="error text-danger mt-3">{{ errorMessage }}</p>
        <br>
        <router-link to="/changePassword" class="btn btn-secondary">Cambiar clave</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore, type LoginData} from "../../stores/auth";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

    const authStore = useAuthStore();
    const router = useRouter();

    const loginData = reactive<LoginData>({
        email: "",
        password: "",
    })

    const errorMessage = ref<string>("")

    async function submit() {
      errorMessage.value = ""; // Limpiar mensaje de error previo

      try {
        // Intentar autenticación
        await authStore.login(loginData);
        // Redirigir si es exitoso
        router.replace({ name: "home" });
      } catch (err: any) {
        console.error("Error al intentar iniciar sesión:", err);

        // Manejo robusto del error
        if (err && err.response && err.response.data && err.response.data.message) {
          errorMessage.value = err.response.data.message; // Mensaje desde el backend
        } else if (err && err.message) {
          errorMessage.value = err.message; // Mensaje del cliente
        } else {
          errorMessage.value = "Error inesperado. Por favor, intente más tarde.";
        }
      }
    }
    
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh; /* Ajusta la altura según tus necesidades */
}

.card {
  max-width: 30vw;
  margin: auto;
}

.error {
  color: red;
  font-weight: bold;
}

</style>
