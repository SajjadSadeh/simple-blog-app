<template>
  <div>
    <div class="text-white flex justify-center gap-4 text-lg">
      <router-link :to="{ name: 'Home' }">home</router-link>
      <router-link :to="{ name: 'newBlog' }">new blog</router-link>
    </div>
  </div>
</template>

<script setup></script>
