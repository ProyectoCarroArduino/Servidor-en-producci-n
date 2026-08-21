<template>
  <div id="register">
    <div class="register-shell">
      <div class="register-panel">
        <div class="glass-card">
          <div class="brand-block">
            <img :src="logoUrl" alt="EDUCATTECH logo" class="logo" />
            <h1 class="brand-title">
              <span class="brand-main">EDUCA</span><span class="brand-accent">TECH</span>
            </h1>
            <p class="brand-subtitle">Crea tu cuenta y empieza a aprender.</p>
          </div>

          <form class="register-form" @submit.prevent="submit">
            <div class="field">
              <label for="username">Nombre de usuario</label>
              <div class="input-wrap">
                <img :src="userIcon" alt="" aria-hidden="true" class="field-icon" />
                <input
                  v-model="registerData.username"
                  type="text"
                  class="input"
                  id="username"
                  autocomplete="off"
                  placeholder="Tu usuario"
                  required
                />
              </div>
            </div>

            <div class="field-grid">
              <div class="field">
                <label for="first_name">Primer nombre</label>
                <div class="input-wrap">
                  <img :src="userIcon" alt="" aria-hidden="true" class="field-icon" />
                  <input
                    v-model="registerData.first_name"
                    type="text"
                    class="input"
                    id="first_name"
                    autocomplete="off"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label for="last_name">Apellido</label>
                <div class="input-wrap">
                  <img :src="userIcon" alt="" aria-hidden="true" class="field-icon" />
                  <input
                    v-model="registerData.last_name"
                    type="text"
                    class="input"
                    id="last_name"
                    autocomplete="off"
                    placeholder="Tu apellido"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="field">
              <label for="email">Correo electronico (Gmail)</label>
              <div class="input-wrap">
                <img :src="userIcon" alt="" aria-hidden="true" class="field-icon" />
                <input
                  v-model="registerData.email"
                  @input="checkEmailExists"
                  type="email"
                  class="input"
                  id="email"
                  autocomplete="off"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <span v-if="emailExists" class="field-note error">Ya existe un usuario con este correo</span>
            </div>

            <div class="field">
              <label for="password">Contrasena</label>
              <div class="input-wrap">
                <img :src="passwordIcon" alt="" aria-hidden="true" class="field-icon" />
                <input
                  v-model="registerData.password"
                  type="password"
                  class="input"
                  id="password"
                  placeholder="Minimo 6 caracteres"
                  required
                />
              </div>
              <span v-if="shouldShowPasswordError" class="field-note error">
                La contrasena debe tener al menos 6 caracteres
              </span>
            </div>

            <div class="field">
              <label for="password_confirm">Confirmar contrasena</label>
              <div class="input-wrap">
                <img :src="passwordIcon" alt="" aria-hidden="true" class="field-icon" />
                <input
                  v-model="registerData.password_confirm"
                  type="password"
                  class="input"
                  id="password_confirm"
                  placeholder="Repite tu contrasena"
                  required
                />
              </div>
              <span v-if="shouldShowRepasswordError" class="field-note error">
                La contrasena debe tener al menos 6 caracteres
              </span>
              <span v-else-if="shouldShowMismatchError" class="field-note error">
                Las contrasenas no coinciden
              </span>
            </div>

            <button type="submit" class="submit-btn" :disabled="!isFormValid || isSubmitting">
              {{ isSubmitting ? "Registrando..." : "Registrar" }}
            </button>

            <p v-if="errorMessage" class="status-message error" role="alert">{{ errorMessage }}</p>
            <p v-if="successMessage" class="status-message success">{{ successMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, type RegisterData } from "../../stores/auth";
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import logoUrl from "@/assets/Login/logo.png";
import userIcon from "@/assets/Login/user.png";
import passwordIcon from "@/assets/Login/password.png";

const authStore = useAuthStore();
const router = useRouter();

const registerData = reactive<RegisterData>({
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  password_confirm: "",
});

const emailExists = ref(false);
let emailCheckTimer: ReturnType<typeof setTimeout> | undefined;

function checkEmailExists() {
  clearTimeout(emailCheckTimer);
  emailExists.value = false;

  // sin un correo con forma valida no vale la pena consultar
  if (!registerData.email.includes("@")) return;

  // esperamos a que el usuario deje de escribir para no lanzar una peticion por tecla
  emailCheckTimer = setTimeout(async () => {
    emailExists.value = await authStore.checkEmail(registerData.email);
  }, 400);
}

const errorMessage = ref<string>("");
const successMessage = ref<string>("");
const isSubmitting = ref(false);

const shouldShowPasswordError = computed(() => {
  return registerData.password.length > 0 && registerData.password.length < 6;
});

const shouldShowRepasswordError = computed(() => {
  return registerData.password_confirm.length > 0 && registerData.password_confirm.length < 6;
});

const shouldShowMismatchError = computed(() => {
  return (
    registerData.password_confirm.length >= 6 &&
    registerData.password !== registerData.password_confirm
  );
});

const isFormValid = computed(() => {
  return (
    registerData.username.trim() !== "" &&
    registerData.first_name.trim() !== "" &&
    registerData.last_name.trim() !== "" &&
    registerData.email.trim() !== "" &&
    !emailExists.value &&
    registerData.password.length >= 6 &&
    registerData.password === registerData.password_confirm
  );
});

async function submit() {
  if (!isFormValid.value || isSubmitting.value) return;

  isSubmitting.value = true;
  errorMessage.value = "";

  try {
    await authStore.register(registerData);

    // mensaje de exito
    successMessage.value = "Se ha enviado un mensaje de verificacion al correo proporcionado";
    errorMessage.value = "";

    // esperar 10 segundos y redirigir al login
    setTimeout(() => {
      router.replace({ name: "login" });
    }, 10000);
  } catch (err: any) {
    errorMessage.value = err.message;
    successMessage.value = "";
    // solo reactivamos el boton si fallo: en el caso exitoso ya vamos al login
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
#register {
  --bg-start: #061624;
  --bg-mid: #0b2434;
  --bg-end: #0b3a40;
  --glow: rgba(42, 233, 214, 0.45);
  --text-main: #e9f6fb;
  --text-muted: rgba(233, 246, 251, 0.7);
  --card-bg: rgba(8, 26, 38, 0.62);
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 24px;
  color: var(--text-main);
  font-family: "Space Grotesk", "Sora", "Manrope", "Segoe UI", sans-serif;
}

.register-shell {
  position: relative;
  z-index: 1;
  width: min(980px, 95vw);
}

.register-panel {
  position: relative;
  width: 100%;
  min-height: min(720px, 90vh);
  padding: 56px 64px;
  border-radius: 32px;
  background: linear-gradient(135deg, var(--bg-start) 0%, var(--bg-mid) 48%, var(--bg-end) 100%);
  border: 1px solid rgba(64, 242, 220, 0.22);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.register-panel::before {
  content: "";
  position: absolute;
  inset: -12%;
  border-radius: inherit;
  background-image:
    linear-gradient(120deg, rgba(46, 209, 198, 0.12) 1px, transparent 1px),
    linear-gradient(30deg, rgba(0, 173, 233, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 18% 22%, rgba(45, 221, 226, 0.28) 0 2px, transparent 3px),
    radial-gradient(circle at 72% 30%, rgba(45, 221, 226, 0.2) 0 2px, transparent 3px),
    radial-gradient(circle at 82% 76%, rgba(45, 221, 226, 0.2) 0 2px, transparent 3px);
  background-size: 140px 140px, 180px 180px, 260px 260px, 240px 240px, 220px 220px;
  opacity: 0.35;
  animation: circuitShift 28s linear infinite;
  pointer-events: none;
}

.register-panel::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at 15% 20%, rgba(46, 209, 198, 0.16), transparent 50%),
    radial-gradient(circle at 85% 80%, rgba(21, 118, 152, 0.22), transparent 55%);
  opacity: 0.9;
  pointer-events: none;
}

.glass-card {
  position: relative;
  z-index: 1;
  width: min(560px, 100%);
  background: var(--card-bg);
  border: 1px solid rgba(64, 242, 220, 0.35);
  border-radius: 24px;
  padding: 36px 34px 30px;
  box-shadow:
    0 0 35px var(--glow),
    0 24px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  animation: floatIn 0.9s ease-out;
}

.brand-block {
  text-align: center;
  margin-bottom: 24px;
}

.logo {
  width: 108px;
  height: auto;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 18px rgba(46, 209, 198, 0.45));
}

.brand-title {
  margin: 0;
  font-size: 28px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.brand-main {
  color: #ffffff;
}

.brand-accent {
  color: #2fe4d0;
}

.brand-subtitle {
  margin: 10px auto 0;
  font-size: 14px;
  max-width: 320px;
  color: var(--text-muted);
}

.register-form {
  display: grid;
  gap: 16px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.field-icon {
  position: absolute;
  left: 16px;
  width: 22px;
  height: 22px;
  opacity: 0.92;
  filter: drop-shadow(0 0 6px rgba(46, 209, 198, 0.35));
}

.input-wrap input {
  width: 100%;
  padding: 13px 16px 13px 54px;
  border-radius: 12px;
  border: 1px solid rgba(140, 204, 214, 0.25);
  background: rgba(6, 20, 30, 0.65);
  color: var(--text-main);
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-wrap input::placeholder {
  color: rgba(233, 246, 251, 0.45);
}

.input-wrap input:focus {
  outline: none;
  border-color: rgba(46, 209, 198, 0.7);
  box-shadow: 0 0 0 2px rgba(46, 209, 198, 0.18);
}

.field-note {
  display: block;
  margin-top: 6px;
  font-size: 12px;
}

.field-note.error {
  color: #ff9fa3;
}

.submit-btn {
  margin-top: 6px;
  padding: 14px 18px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(120deg, #2fe4d0, #1bb8ff);
  color: #041119;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 16px 35px rgba(27, 184, 255, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(27, 184, 255, 0.35);
}

.submit-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
}

.status-message {
  margin: 10px 0 0;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
}

.status-message.error {
  color: #ff9fa3;
}

.status-message.success {
  color: #7bf2d1;
}

@keyframes circuitShift {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-6%, -4%, 0);
  }
}

@keyframes floatIn {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  #register {
    padding: 40px 20px;
  }

  .register-shell {
    width: min(760px, 96vw);
  }

  .register-panel {
    min-height: auto;
    padding: 36px 32px;
  }

  .glass-card {
    padding: 30px 26px 26px;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .register-panel::before,
  .glass-card {
    animation: none;
  }
}
</style>
