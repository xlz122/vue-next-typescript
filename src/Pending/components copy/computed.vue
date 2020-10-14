<template>
  <div>
    <p>computed计算</p>
    <p>{{ computedCount }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  setup() {
    // 不是响应式变量
    let count = 0;

    // computed接收一个回调函数，以返回值的方式
    const computedCount = computed(() => count + 1);

    return {
      computedCount
    };
  }
};
</script>
