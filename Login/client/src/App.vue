<script setup lang="ts">
import { RouterView } from "vue-router";
import { default as NavBar } from "./components/NavBar.vue";

</script>

<template>
    <div id="app">
        <NavBar />
        <RouterView />
    </div>
</template>
