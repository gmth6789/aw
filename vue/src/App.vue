<script setup>
import { onMounted } from "vue";
import { user } from "./stores/user.js";

onMounted(() => {
  user.init();
});
</script>

<template>
  <div>
    <main>Home page</main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import { user } from "./lib/stores/user.js";

const isLoginPage = window.location.pathname === "/login";

onMounted(() => {
  user.init();
});
</script>

<template>
  <div>
    <main>
      <Login v-if="isLoginPage" />
      <Home v-else />
    </main>
  </div>
</template>