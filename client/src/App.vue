<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="flex flex-col justify-start px-12 text-white">
    <Header />
    <router-view></router-view>
  </div>
</template>
