<template>
  <p>readonly 只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。</p>
  <p>{{ num1 }}</p>
  <p>{{ state1 }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, readonly } from 'vue';

interface State {
  count: number;
}

export default defineComponent({
  setup() {
    const num = ref<number>(100);
    const state = reactive<State>({
      count: 1000
    });

    const num1 = readonly(num);
    const state1 = readonly(state);

    // 修改无效
    // num1.value = 10000;
    // 修改无效
    // state1.count = 100000;

    return {
      num1,
      state1
    };
  }
});
</script>
