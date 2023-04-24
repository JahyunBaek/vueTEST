<script setup>
import ButtonCounter from "./SFC.vue";
import { ref } from "vue";
const posts = ref([
  { id: 1, title: "Vue와 함께한 나의 여행" },
  { id: 2, title: "Vue로 블로깅하기" },
  { id: 3, title: "Vue가 재미있는 이유" },
]);
const postFontSize = ref(1);
</script>

<template>
  <h1>아래에 자식 컴포넌트가 있습니다.</h1>
  <button-counter
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
  ></button-counter>

  <div :style="{ fontSize: postFontSize + 'em' }">
    <ButtonCounter
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>
  <global-component></global-component>
</template>
