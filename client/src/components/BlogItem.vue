<template>
  <div class="flex flex-col max-w-2xl">
    <router-link :to="'single-blog/' + data._id" class="text-xl font-bold">{{
      data.title
    }}</router-link>
    <p class="px-2">
      {{ data.text }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped></style>
