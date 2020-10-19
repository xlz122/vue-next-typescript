<template>
  <div>
    <p>{{ num1 }}</p>
    <p>{{ state1 }}</p>
  </div>
</template>

<script>
import { ref, reactive, readonly } from 'vue';

export default {
  setup() {
    const num = ref(100);
    const state = reactive({
      count: 1000
    });
    const num1 = readonly(num);
    const state1 = readonly(state);

    // readonly 只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。
    // 修改无效
    num1.value = 10000;
    // 修改无效
    state1.count = 100000;

    return {
      num1,
      state1
    };
  }
};
</script>
