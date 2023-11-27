<template>
  <div>
    <form
      action=""
      @submit.prevent="null"
      class="flex flex-col items-center justify-center gap-4 py-10"
    >
      <label for="">
        <p>title :</p>
        <input type="text" v-model.trim="state.title" class="text-black" />
      </label>

      <label for=""
        ><p>text :</p>
        <input type="text" v-model.trim="state.text" class="text-black" />
      </label>
      <button @click="sendBlog" class="px-4 py-2 text-black bg-white rounded">
        send
      </button>
      {{ state }}
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const state = ref({
  title: "",
  text: "",
});
function sendBlog() {
  if (state.value.text && state.value.title) {
    fetch("http://localhost:3000/blogs/create", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
</script>
