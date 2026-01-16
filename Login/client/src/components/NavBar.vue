<template>
  <nav class="navbar navbar-expand-lg app-navbar">
    <div class="nav-shell">
      <router-link class="navbar-brand brand" :to="{ name: 'home' }" aria-label="Inicio">
        <img :src="logoUrl" alt="EDUCATTECH logo" class="brand-logo" />
      </router-link>

      <button
        class="navbar-toggler nav-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#appNavbar"
        aria-controls="appNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse nav-collapse" id="appNavbar">
        <ul class="navbar-nav nav-links">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">Inicio</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link :to="{ name: 'IntroGuiaC' }" class="nav-link">Programacion C</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link :to="{ name: 'GuiaConstruccion' }" class="nav-link">
              Construccion carro Arduino
            </router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link :to="{ name: 'EncuestaTAM' }" class="nav-link">Encuesta</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link :to="{ name: 'ResultadosEncuesta' }" class="nav-link">GraficasTAM</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link :to="{ name: 'Conceptos' }" class="nav-link">Conceptos y Referencias</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link :to="{ name: 'AdminConceptos' }" class="nav-link">Admin Conceptos</router-link>
          </li>
        </ul>

        <ul class="navbar-nav nav-actions">
          <li v-if="isAuthenticated" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user.username }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><router-link :to="{ name: 'profile' }" class="dropdown-item">Perfil</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><button @click="logout" class="dropdown-item logout-btn">Cerrar sesion</button></li>
            </ul>
          </li>
          <li v-else class="nav-item nav-auth">
            <router-link :to="{ name: 'login' }" class="nav-link">Ingresar</router-link>
            <router-link :to="{ name: 'register' }" class="nav-link">Registrar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";
import logoUrl from "@/assets/Login/logo.png";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const user = computed(() => {
      return authStore.user;
    });

    const isAuthenticated = computed(() => {
      return authStore.isAuthenticated;
    });

    async function logout() {
      await authStore
        .logout()
        .then(() => {
          router.replace({ name: "home" });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    return { user, isAuthenticated, logout, logoUrl };
  },
};
</script>

<style scoped>
.app-navbar {
  --accent: #2fe4d0;
  --accent-soft: rgba(46, 209, 198, 0.18);
  --text-main: #0b2434;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  padding: 10px 0;
  background: var(--bs-body-bg, transparent);
  overflow: visible;
}

.nav-shell {
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: calc(100% - clamp(16px, 3vw, 48px));
  margin-left: clamp(16px, 3vw, 48px);
  margin-right: auto;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 0;
  border: none;
  background: transparent;
  box-shadow: none;
  overflow: visible;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-main);
}

.brand-logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(46, 209, 198, 0.45));
}

.nav-toggler {
  margin-left: auto;
  border: 1px solid rgba(11, 36, 52, 0.2);
  background: transparent;
  border-radius: 10px;
  padding: 6px 8px;
}

.nav-toggler:focus {
  box-shadow: 0 0 0 2px rgba(46, 209, 198, 0.35);
}

.navbar-toggler-icon {
  width: 22px;
  height: 16px;
  background-image:
    linear-gradient(#0b2434, #0b2434),
    linear-gradient(#0b2434, #0b2434),
    linear-gradient(#0b2434, #0b2434);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: 0 0, 0 7px, 0 14px;
}

.nav-collapse {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 16px;
  flex: 1 1 auto;
  flex-wrap: wrap;
}

.nav-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-auth {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-link {
  color: var(--text-main);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.nav-link:hover,
.nav-link:focus,
.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  background: var(--accent-soft);
  color: #0b2434;
  box-shadow: 0 0 0 1px rgba(46, 209, 198, 0.35);
}

.dropdown-menu {
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid rgba(11, 36, 52, 0.15);
  border-radius: 12px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
  padding: 6px;
}

.dropdown-item {
  color: var(--text-main);
  border-radius: 8px;
  padding: 8px 10px;
  transition: background 0.2s ease, color 0.2s ease;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background: var(--accent-soft);
  color: var(--text-main);
}

.dropdown-divider {
  border-color: rgba(11, 36, 52, 0.12);
}

.logout-btn {
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  color: #c0392b;
}

.logout-btn:hover {
  background: rgba(192, 57, 43, 0.12);
  color: #a93226;
}

@media (max-width: 991.98px) {
  .nav-shell {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .nav-collapse {
    margin-top: 12px;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links,
  .nav-actions {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  }

  .nav-actions {
    margin-top: 8px;
  }
}
</style>
