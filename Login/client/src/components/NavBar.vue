<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name: 'home'}">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#appNavbar" aria-controls="appNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="appNavbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :to="{name: 'home'}" class="nav-link-active" aria-current="page">Home</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item" style="margin-left: 20px;">
            <router-link :to="{name: 'user'}" class="nav-link-active" aria-current="page">Programación C</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item" style="margin-left: 20px;">
            <router-link :to="{name: 'GuiaConstruccion'}" class="nav-link-active" aria-current="page">Construcción carro Arduino</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item" style="margin-left: 20px;">
            <router-link :to="{name: 'EncuestaTAM'}" class="nav-link-active" aria-current="page">Encuesta</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item" style="margin-left: 20px;">
            <router-link :to="{name: 'ResultadosEncuesta'}" class="nav-link-active" aria-current="page">GraficasTAM</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item" style="margin-left: 20px;">
            <router-link :to="{name: 'Conceptos'}" class="nav-link-active" aria-current="page">Conceptos y Referencias</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item" style="margin-left: 20px;">
            <router-link :to="{name: 'AdminConceptos'}" class="nav-link-active" aria-current="page">Admin Conceptos</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mx-2 mb-2 mb-lg-0 ml-auto">
        <li v-if="isAuthenticated" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{user.username}}
          </a>
          <ul class="dropdown-menu">
            <li><router-link :to="{name: 'profile'}" class="dropdown-item">Profile</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><button @click="logout" class="dropdown-item btn btn-danger">Logout</button></li>
          </ul>
        </li>
          <li v-else class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link" aria-current="page">Login</router-link>
            <router-link :to="{ name: 'register' }" class="nav-link ml-2" aria-current="page">Register</router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {useAuthStore} from "../stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default{
  setup (){
    const authStore = useAuthStore();
    const router = useRouter()

    const user = computed(() =>{
        return authStore.user
    })

    const isAuthenticated = computed(() =>{
        return authStore.isAuthenticated
    })

async function logout(){
  await authStore.logout()
  .then( res =>{
    router.replace({name: "home"})
  })
  .catch( err =>{
    console.log(err.message)
  })
  }

  return { user, isAuthenticated, logout };

  }
}
</script>


