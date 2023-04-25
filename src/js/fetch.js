import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  async function doFetch() {
    // 가져오기 전에 상태 재설정..
    data.value = null;
    error.value = null;

    // watchEffect()에 의해 종속성으로 추적되도록
    // URL 값을 동기식으로 resolve합니다.
    const urlValue = unref(url);

    try {
      // 인위적인 딜레이 / 무작위 애러
      await timeout();
      // unref()는 ref이면 ref 값을 반환합니다.
      // 그렇지 않으면 값을 있는 그대로 반환합니다.
      const res = await fetch(urlValue);
      data.value = await res.json();
    } catch (e) {
      error.value = e;
    }
  }

  if (isRef(url)) {
    // 설정하기: 입력 URL이 ref인 경우 반응적 다시 가져오기
    watchEffect(doFetch);
  } else {
    // 그렇지 않으면 한 번만 가져오기
    doFetch();
  }

  return { data, error, retry: doFetch };
}

// 인위적인 딜레이
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve();
      } else {
        reject(new Error("무작위 애러"));
      }
    }, 300);
  });
}
