<template>
  <div id="login">
    <div class="login-shell">
      <div class="login-panel">
        <div class="glass-card">
          <div class="brand-block">
            <img :src="logoUrl" alt="EDUCATTECH logo" class="logo" />
            <h1 class="brand-title">
              <span class="brand-main">EDUCA</span><span class="brand-accent">TECH</span>
            </h1>
            <p class="brand-subtitle">Aprendizaje inteligente para mentes curiosas.</p>
          </div>

          <form class="login-form" @submit.prevent="submit">
            <div class="field">
              <label for="email">Correo electronico</label>
              <div class="input-wrap">
                <img :src="userIcon" alt="" aria-hidden="true" class="field-icon" />
                <input
                  v-model="loginData.email"
                  type="email"
                  id="email"
                  autocomplete="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label for="password">Contrasena</label>
              <div class="input-wrap with-toggle">
                <img :src="passwordIcon" alt="" aria-hidden="true" class="field-icon" />
                <input
                  v-model="loginData.password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  autocomplete="current-password"
                  placeholder="Ingresa tu clave"
                  required
                />
                <button type="button" class="toggle-btn" @click="showPassword = !showPassword">
                  {{ showPassword ? "Ocultar" : "Mostrar" }}
                </button>
              </div>
            </div>

            <button type="submit" class="submit-btn">Iniciar sesion</button>
          </form>

          <p v-if="errorMessage" class="error-message" role="alert">{{ errorMessage }}</p>
          <router-link to="/changePassword" class="forgot-link">
            Olvidaste tu contrasena?
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, type LoginData } from "../../stores/auth";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import logoUrl from "@/assets/Login/logo.png";
import userIcon from "@/assets/Login/user.png";
import passwordIcon from "@/assets/Login/password.png";

const authStore = useAuthStore();
const router = useRouter();

const loginData = reactive<LoginData>({
  email: "",
  password: "",
});

const errorMessage = ref<string>("");
const showPassword = ref(false);

async function submit() {
  errorMessage.value = ""; // Limpiar mensaje de error previo

  try {
    // Intentar autenticacion
    await authStore.login(loginData);
    // Redirigir si es exitoso
    router.replace({ name: "home" });
  } catch (err: any) {
    console.error("Error al intentar iniciar sesion:", err);

    // Manejo robusto del error
    if (err && err.response && err.response.data && err.response.data.message) {
      errorMessage.value = err.response.data.message; // Mensaje desde el backend
    } else if (err && err.message) {
      errorMessage.value = err.message; // Mensaje del cliente
    } else {
      errorMessage.value = "Error inesperado. Por favor, intente mas tarde.";
    }
  }
}
</script>

<style scoped>
#login {
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

.login-shell {
  position: relative;
  z-index: 1;
  width: min(920px, 95vw);
}

.login-panel {
  position: relative;
  width: 100%;
  min-height: min(640px, 88vh);
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

.login-panel::before {
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

.login-panel::after {
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
  background: var(--card-bg);
  border: 1px solid rgba(64, 242, 220, 0.35);
  border-radius: 24px;
  padding: 40px 36px 32px;
  box-shadow:
    0 0 35px var(--glow),
    0 24px 60px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  animation: floatIn 0.9s ease-out;
}

.brand-block {
  text-align: center;
  margin-bottom: 28px;
}

.logo {
  width: 108px;
  height: auto;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 18px rgba(46, 209, 198, 0.45));
}

.brand-title {
  margin: 0;
  font-size: 30px;
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
  margin: 12px auto 0;
  font-size: 14px;
  max-width: 320px;
  color: var(--text-muted);
}

.login-form {
  display: grid;
  gap: 18px;
}

.field label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
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
  padding: 14px 16px 14px 54px;
  border-radius: 12px;
  border: 1px solid rgba(140, 204, 214, 0.25);
  background: rgba(6, 20, 30, 0.65);
  color: var(--text-main);
  font-size: 15px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-wrap.with-toggle input {
  padding-right: 92px;
}

.input-wrap input::placeholder {
  color: rgba(233, 246, 251, 0.45);
}

.input-wrap input:focus {
  outline: none;
  border-color: rgba(46, 209, 198, 0.7);
  box-shadow: 0 0 0 2px rgba(46, 209, 198, 0.18);
}

.toggle-btn {
  position: absolute;
  right: 12px;
  border: 0;
  background: rgba(46, 209, 198, 0.15);
  color: #b7f6ed;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.toggle-btn:hover {
  background: rgba(46, 209, 198, 0.3);
  color: #ffffff;
}

.submit-btn {
  margin-top: 8px;
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

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(27, 184, 255, 0.35);
}

.error-message {
  margin: 18px 0 8px;
  color: #ff9fa3;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}

.forgot-link {
  display: block;
  text-align: center;
  color: #9cefe5;
  text-decoration: none;
  font-size: 13px;
  margin-top: 6px;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  color: #ffffff;
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
  #login {
    padding: 40px 20px;
  }

  .login-shell {
    width: min(760px, 96vw);
  }

  .login-panel {
    min-height: auto;
    padding: 36px 32px;
  }

  .glass-card {
    padding: 32px 26px 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .login-panel::before,
  .glass-card {
    animation: none;
  }
}
</style>
