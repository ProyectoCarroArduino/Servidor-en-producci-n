<template>
    <div id="change-password">
      <div class="container">
        <div class="card card-body mt-8">
          <h5 class="card-title">Cambio de Clave</h5>
          <form @submit.prevent="submit">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="passwordData.email" 
                type="email" 
                class="form-control" 
                id="email" 
                placeholder="Ingresa tu correo electrónico"
                required 
              />
            </div>
            <div class="mb-3">
              <label for="currentPassword" class="form-label">Clave Actual</label>
              <input v-model="passwordData.currentPassword" 
                type="password" 
                class="form-control" 
                id="currentPassword" 
                placeholder="Clave actual" 
                required 
              />
            </div>
            <div class="mb-3">
              <label for="newPassword" class="form-label">Nueva Clave</label>
              <input v-model="passwordData.NewPassword" 
                type="password" 
                class="form-control" 
                id="newPassword" 
                placeholder="Nueva clave" 
                required 
              />
            </div>
            <div class="mb-3">
              <label for="newPasswordConfirm" class="form-label">Confirmar Nueva Clave</label>
              <input v-model="passwordData.NewPasswordConfirm" 
                type="password" 
                class="form-control" 
                id="newPasswordConfirm" 
                placeholder="Confirma tu nueva clave" 
                required 
              />
            </div>
            <br>
            <button type="submit" class="btn btn-success">Cambiar Clave</button>
          </form>
          <p v-if="errorMessage" class="error text-danger mt-3">{{ errorMessage }}</p>
          <p v-if="successMessage" class="success text-success mt-3">{{ successMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from "vue";
  import { useAuthStore, type NewPassword} from "../../stores/auth";
  import { useRouter } from "vue-router";
  
  const authStore = useAuthStore();
  const router = useRouter();

  
  const passwordData = reactive<NewPassword>({
    email: "", // Email del usuario
    currentPassword: "", // Clave actual
    NewPassword: "", // Nueva clave
    NewPasswordConfirm: "" // Confirmación de la nueva clave
  });
  
  const errorMessage = ref<string>("");
  const successMessage = ref<string>("");
  
  async function submit() {
    errorMessage.value = "";
    successMessage.value = "";
  
    try {
      await authStore.changePassword(passwordData);
      successMessage.value = "Clave cambiada exitosamente.";
      router.replace({ name: "login" });
    } catch (err: any) {
      errorMessage.value = err.message || "Error inesperado. Por favor, inténtalo más tarde.";
    }
  }
  </script>
  
  <style scoped>
  #change-password {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }
  
  .card {
    max-width: 30vw;
    margin: auto;
  }
  
  .error {
    color: red;
    font-weight: bold;
  }
  
  .success {
    color: green;
    font-weight: bold;
  }
  </style>
  
   
  