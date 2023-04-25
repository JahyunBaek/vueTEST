<template>
  <h1>Event Page</h1>
  <div>
    <button @click="count++">1 추가</button>
    <p>숫자 값은: {{ count }}</p>
    <button @click="greet">환영하기</button>
    <button @click="say('안녕')">안녕이라고 말하기</button>
    <button @click="say('잘가')">잘가라고 말하기</button>
  </div>
  <div>
    <!-- 특수한 키워드인 $event 사용 -->
    <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
      제출하기
    </button>
    <!-- 인라인 화살표 함수 사용 -->
    <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
      제출하기
    </button>
  </div>
  <div>
    <!-- 클릭 이벤트 전파가 중지됩니다. -->
    <a @click.stop="doThis">클릭 이벤트 전파가 중지됩니다.</a>

    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
    <form @submit.prevent="onSubmit">
      submit 이벤트가 더 이상 페이지 리로드하지 않습니다.
    </form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <a @click.stop.prevent="doThat">수식어를 연결할 수 있습니다.</a>

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <form @submit.prevent>
      이벤트에 핸들러 없이 수식어만 사용할 수 있습니다.
    </form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
    <div @click.self="doThat">...</div>
  </div>
  <div>
    <!-- `key`가 `Enter`일 때만 `submit`을 호출합니다 -->
    <input @keyup.enter="submit" />
    <input @keyup.page-down="onPageDown" />
    <!-- Alt + Enter -->
    <input @keyup.alt.enter="clear" />
    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">시작하기</div>
  </div>
  <div>
    <!-- Ctrl과 함께 Alt 또는 Shift를 누른 상태에서도 클릭하면 실행됩니다. -->
    <button @click.ctrl="onClick">A</button>

    <!-- 오직 Ctrl만 누른 상태에서 클릭해야 실행됩니다. -->
    <button @click.ctrl.exact="onCtrlClick">A</button>

    <!-- 시스템 입력키를 누르지 않고 클릭해야지만 실행됩니다. -->
    <button @click.exact="onClick">A</button>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const name = ref("Vue.js");
    function warn(message, event) {
      // 이제 네이티브 이벤트 객체에 접근할 수 있습니다.
      if (event) {
        event.preventDefault();
      }
      alert(message);
    }
    function say(message) {
      alert(message);
    }
    function greet(event) {
      alert(`안녕 ${name.value}!`);
      // 'event'는 네이티브 DOM 이벤트 객체입니다.
      if (event) {
        alert(event.target.tagName);
      }
    }
    return { count, greet, say, warn };
  },
};
</script>
<style></style>
