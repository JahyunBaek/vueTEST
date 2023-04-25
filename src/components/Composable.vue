<script setup>
import { useMouse } from "@/js/mouse.js";
import { useFetch } from "@/js/fetch.js";
import { ref, computed } from "vue";

const { x, y } = useMouse();

const baseUrl = "https://jsonplaceholder.typicode.com/todos/";
const id = ref("1");
const url = computed(() => baseUrl + id.value);
const { data, error, retry } = useFetch(url);
</script>

<template>
  <div>Mouse position : {{ x }}, {{ y }}</div>
  <div>
    Load post id:
    <button v-for="i in 5" @click="id = i" :key="i">{{ i }}</button>

    <div v-if="error">
      <p>ERROR: {{ error.message }}</p>
      <button @click="retry">Retry</button>
    </div>
    <div v-else-if="data">
      Load Data :
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
