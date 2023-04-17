<template>
  <div>
    <h1>Home Page</h1>
    <div></div>
    <button @click="increment">
      {{ count }}
      <!-- .value가 필요하지 않습니다. -->
    </button>
    <p>책을 가지고 있다:</p>
    <span>{{ publishedBooksMessage }}</span>
    <div class="static" :class="classObject"></div>
    <button @click="awesome = !awesome">전환</button>
    <h1 v-if="awesome">Vue는 정말 멋지죠!</h1>
    <h1 v-else>아닌가요? 😢</h1>

    <li v-for="(item, index) in items" :key="index">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    <li v-for="{ message } in items" :key="message">
      {{ message }}
    </li>

    <!-- index 별칭도 사용 -->
    <li v-for="({ message }, index) in items" :key="index">
      {{ message }} {{ index }}
    </li>
    <ul>
      <li v-for="value in myObject" :key="value">
        {{ value }}
      </li>
      <li v-for="(value, key) in myObject" :key="key">
        {{ key }}: {{ value }}
      </li>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { reactive, computed } from "vue";
import { nextTick } from "vue";

export default {
  // `setup`은 컴포지션 API에서만 사용되는 특별한 훅입니다.
  setup() {
    const sets = ref([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ]);
    const numbers = ref([1, 2, 3, 4, 5]);
    const evenNumbers = computed(() => {
      return numbers.value.filter((n) => n % 2 === 0);
    });
    const isActive = ref(true);
    const error = ref(null);
    const count = ref(0);
    const awesome = ref(true);
    const state = reactive({ count: 0 });
    const classObject = computed(() => ({
      active: isActive.value && !error.value,
      "text-danger": error.value && error.value.type === "fatal",
    }));
    const parentMessage = ref("Parent");
    const items = ref([{ message: "Foo" }, { message: "Bar" }]);
    const myObject = reactive({
      title: "Vue에서 목록을 작성하는 방법",
      author: "홍길동",
      publishedAt: "2016-04-10",
    });
    const obj = reactive({
      nested: { count: 0 },
      arr: ["foo", "bar"],
    });
    const author = reactive({
      name: "John Doe",
      books: [
        "Vue 2 - Advanced Guide",
        "Vue 3 - Basic Guide",
        "Vue 4 - The Mystery",
      ],
    });
    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? "Yes" : "No";
    });

    const firstName = ref("John");
    const lastName = ref("Doe");

    const fullName = computed({
      // getter
      get() {
        return firstName.value + " " + lastName.value;
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [firstName.value, lastName.value] = newValue.split(" ");
      },
    });
    function even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    }
    function increment() {
      count.value++;
      state.count++;
      nextTick(() => {
        // 업데이트된 DOM에 접근 가능
      });
    }

    function mutateDeeply() {
      // 변경 사항이
      obj.nested.count++;
      obj.arr.push("baz");
    }
    // 상태를 템플릿에 노출
    // 함수를 반환하는 것을 잊지 마세요.
    return {
      classObject,
      count,
      state,
      increment,
      mutateDeeply,
      author,
      publishedBooksMessage,
      fullName,
      awesome,
      parentMessage,
      items,
      myObject,
      evenNumbers,
      sets,
      even,
    };
  },
};
</script>

<style></style>
