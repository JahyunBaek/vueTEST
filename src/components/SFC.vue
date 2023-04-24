<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
defineProps(["title"]);
const count = ref(0);
</script>

<template>
  <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button>
  <h4>{{ title }}</h4>

  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">텍스트 확대</button>
  </div>
</template>
