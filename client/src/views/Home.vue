<template>
  <div>
    <div class="flex flex-col text-white">
      <h1 class="text-3xl font-bold capitalize">all blogs</h1>
      <div class="flex flex-col gap-8 px-5 py-6">
        <template v-for="item in blogs" :key="item._id">
          <BlogItem :data="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BlogItem from "../components/BlogItem.vue";
let blogs = ref([]);

onMounted(() => {
  fetch("http://localhost:3000/blogs")
    .then((res) => res.json())
    .then((data) => {
      blogs.value = data;
    });
});
</script>
