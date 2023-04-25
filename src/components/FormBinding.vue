<template>
  <div>
    <p>메세지: {{ message }}</p>
    <input v-model="message" placeholder="메세지 입력하기" />
  </div>
  <div>
    <span>여러 줄 메세지:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea v-model="message" placeholder="여러 줄을 추가해보세요"></textarea>
  </div>
  <div>
    <!-- 잘못된 사례 -->
    <!-- <textarea>{{ text }}</textarea> -->

    <!-- 올바른 사례 -->
    <textarea v-model="text"></textarea>
  </div>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </div>
  <div>
    <div>체크된 이름: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="젝" v-model="checkedNames" />
    <label for="jack">젝</label>

    <input type="checkbox" id="john" value="존" v-model="checkedNames" />
    <label for="john">존</label>

    <input type="checkbox" id="mike" value="마이크" v-model="checkedNames" />
    <label for="mike">마이크</label>
  </div>
  <div>
    <div>선택한 것: {{ picked }}</div>

    <input type="radio" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>

    <input type="radio" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>
  </div>
  <div>
    <div>선택됨: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option>가</option>
      <option>나</option>
      <option>다</option>
    </select>
  </div>
  <div>
    <div>선택됨: {{ selected }}</div>

    <select v-model="selected" multiple>
      <option>가</option>
      <option>나</option>
      <option>다</option>
    </select>
  </div>
  <div>
    <select v-model="selected2">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.text"
      >
        {{ option.text }}
      </option>
    </select>

    <div>선택됨: {{ selected2 }}</div>
  </div>
  <div>
    <input type="radio" v-model="picked" value="가" />
    <!-- <input type="checkbox" v-model="toggle" /> -->
    <selcted v-model="selected">
      <options value="한글">한글</options>
    </selcted>
  </div>
  <div>
    <p>toggle: {{ toggle }}</p>
    <!-- <input
      type="checkbox"
      v-model="toggle"
      true-value="네"
      false-value="아니오"
    /> -->
    <input
      type="checkbox"
      v-model="toggle"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"
    />
  </div>
  <div>
    <p>pick: {{ pick }}</p>
    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
  </div>
  <div>
    <p>selected: {{ selected.number }}</p>
    <select v-model="selected">
      <option :value="{ number: 123 }">123</option>
    </select>
  </div>
  <div>
    <!-- "input" 대신 "change" 이벤트 후에 동기화됨 -->
    <input v-model.lazy="msg" />
    <p>age: {{ age }}</p>
    <input v-model.number="age" />
    <p>msg: {{ msg }}</p>
    <input v-model.trim="msg" />
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const message = ref("test");
    const checked = ref(false);
    const checkedNames = ref([]);
    const picked = ref("");
    const selected = ref("");
    const selected2 = ref("1");
    const toggle = ref(true);
    const options = ref([
      { text: "하나", value: "1" },
      { text: "둘", value: "2" },
      { text: "셋", value: "3" },
    ]);
    const pick = ref("test");
    const dynamicTrueValue = ref("T");
    const dynamicFalseValue = ref("F");
    const age = ref(0);
    const msg = ref("");
    return {
      message,
      checked,
      checkedNames,
      picked,
      selected,
      selected2,
      options,
      toggle,
      dynamicTrueValue,
      dynamicFalseValue,
      pick,
      age,
      msg,
    };
  },
};
</script>
