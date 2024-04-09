<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-gradient-to-t from-rose-400 to-orange-200">

    <RouterView />

    <header>
    
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  </div>
</template>

<style scoped>
</style>
