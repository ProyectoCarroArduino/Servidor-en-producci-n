<template>
  <div id="register">
    <div class="container">
      <div class="card card-body mt-4">
        <h5 class="card-title">Register</h5>
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="registerData.username" type="text" class="form-control" id="username" autocomplete="off">
          </div>
          <div class="mb-3">
            <label for="first_name" class="form-label">First Name</label>
            <input v-model="registerData.first_name" type="text" class="form-control" id="first_name" autocomplete="off">
          </div>
          <div class="mb-3">
            <label for="last_name" class="form-label">Last Name</label>
            <input v-model="registerData.last_name" type="text" class="form-control" id="last_name" autocomplete="off">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="registerData.email" @input="checkEmailExists" type="email" class="form-control" id="email" autocomplete="off">
            <span v-if="emailExists" class="text-danger">Ya existe un usuario con este correo</span>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="registerData.password" type="password" class="form-control" id="password">
            <span v-if="shouldShowPasswordError" class="text-danger">La contraseña debe tener al menos 6 caracteres</span>
          </div>
          <div class="mb-3">
            <label for="password_confirm" class="form-label">Confirm Password</label>
            <input v-model="registerData.password_confirm" type="password" class="form-control" id="password_confirm">
            <span v-if="shouldShowRepasswordError" class="text-danger">La contraseña debe tener al menos 6 caracteres</span>
          </div>
          <button type="submit" class="btn btn-success">Register</button>
          <br>
          <br>
          <br>
          <!-- mensaje de error -->
          <p v-if="errorMessage" class="error-message text-danger mb-4">{{ errorMessage }}</p>
          <!-- mensaje de éxito -->
          <p v-if="successMessage" class="text-success mb-4">{{ successMessage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, type RegisterData } from '../../stores/auth';
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const registerData = reactive<RegisterData>({
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  password_confirm: "",
})

const emailExists = ref(false)

async function checkEmailExists() {
  if (!registerData.email) {
    emailExists.value = false
    return
  }

  try {
    const response = await fetch(`/api/auth/check-email?email=${registerData.email}`)
    const data = await response.json()
    emailExists.value = data.exists
  } catch (err) {
    console.error('Error al verificar el email:', err)
    emailExists.value = false
  }
}

const errorMessage = ref<string>("")
const successMessage = ref<string>("")

const isPasswordValid = ref(false);

const shouldShowPasswordError = computed(() => {
  return registerData.password.length > 0 && registerData.password.length < 6;
});

const shouldShowRepasswordError = computed(() => {
  return registerData.password_confirm.length > 0 && registerData.password_confirm.length < 6;
});

const isFormValid = computed(() => {
  return isPasswordValid.value
});

async function submit() {
  isPasswordValid.value = registerData.password.length >= 6;
  
  if (!isPasswordValid.value) return;

  await authStore.register(registerData)
    .then(() => {
      // mostrar mensaje de éxito
      successMessage.value = "Se ha enviado un mensaje de verificación al correo proporcionado";
      errorMessage.value = "";

      // esperar 10 segundos y redirigir al login
      setTimeout(() => {
        router.replace({ name: "login" })
      }, 10000);
    })
    .catch(err => {
      errorMessage.value = err.message
      successMessage.value = ""
    })
}
</script>

<style scoped>
#register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh; /* Ajusta la altura según tus necesidades */
}

.card {
  max-width: 30vw;
  margin: auto;
}
</style>
