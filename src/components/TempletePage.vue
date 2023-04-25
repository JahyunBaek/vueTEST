<template>
  <div><input ref="input" /></div>
  <div>
    <ul>
      <li v-for="item in list" ref="itemRefs" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
  <div>
    <input
      :ref="
        (el) => {
          /* el을 속성이나 ref에 할당 */
        }
      "
    />
  </div>
</template>
<script setup>
import { ref, onMounted, watchEffect } from "vue";

// 엘리먼트 참조를 위해 ref를 선언하십시오.
// 이름은 템플릿 ref 값과 일치해야 합니다.
const input = ref(null);
const list = ref(["a", "b", "c"]);
const itemRefs = ref([]);

onMounted(() => {
  input.value.focus();
  console.log("mouted..");
  console.log(itemRefs.value);
});
watchEffect(() => {
  if (input.value) {
    input.value.focus();
    console.log(input.value);
  } else {
    // v-if에 의해 아직 마운트 되지 않았거나, 마운트 해제된 경우
  }
});
</script>

<style></style>
