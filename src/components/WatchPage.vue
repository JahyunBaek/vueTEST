<template>
  <div>state<input type="text" v-model="state.count" /></div>
  <div>{{ count }}<textarea type="text" v-model="count"> </textarea></div>
  <div>{{ postText }}<textarea type="text" v-model="postText"> </textarea></div>
</template>

<script>
import { ref, reactive, watch } from "vue";
import { watchEffect } from "vue";
export default {
  setup() {
    const state = reactive({ count: 0 });
    const count = ref("");
    const postText = ref("");
    watch(count, (count, prevCount) => {
      console.log(count, prevCount);
    });
    watch(
      () => state.count,
      (count, prevCount) => {
        console.log(count, prevCount);
      }
    );
    watch(postText, fnCallback, {
      flush: "post",
    });
    function fnCallback() {
      console.log("post");
    }

    watchEffect(() => {});

    // ...하지만 이것은 자동으로 중지되지 않습니다.
    setTimeout(() => {
      watchEffect(() => {});
    }, 100);
    const unwatch = watchEffect(() => {});

    // ...나중에 감시자가 더 이상 필요하지 않을 때:
    unwatch();
    //watchEffect는 동기적 실행 중에만 의존성을 추적합니다. 비동기 콜백과 함께 사용할 때 첫 번째 await 틱 이전에 접근한 속성들만 추적합니다.
    //watch
    // const url = ref("https://...");
    // const data = ref(null);

    // async function fetchData() {
    //   const response = await fetch(url.value);
    //   data.value = await response.json();
    // }

    // // 즉시 데이터 가져오기
    // fetchData();
    // // ...그런다음 url 변경을 감시하도록 watch를 실행합니다.
    // watch(url, fetchData);
    // const url = ref("https://...");
    // const data = ref(null);

    // watchEffect
    // watchEffect(async () => {
    //   const response = await fetch(url.value);
    //   data.value = await response.json();
    // });
    return { state, count, postText };
  },
};
</script>

<style></style>
