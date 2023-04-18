<template>
  <h1>Event Page</h1>
  <div>
    <button @click="count++">1 추가</button>
    <p>숫자 값은: {{ count }}</p>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    return { count };
  },
};
</script>
<style></style>
