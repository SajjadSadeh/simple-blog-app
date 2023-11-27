<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold">{{ blog.title }}</h1>
    <p class="px-2">{{ blog.text }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const blog = ref({ title: "", text: "" });
const url = "http://localhost:3000/blogs/get-one/" + String(route.params.id);
fetch(url)
  .then((res) => res.json())
  .then((data) => (blog.value = data))
  .catch((err) => console.log(err));
</script>

<style lang="scss" scoped></style>
