<template>
  <div>
    <p>ref定义单个响应式变量</p>
    <p>{{ count }}</p>
    <p>{{ cloneCount }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    // 定义单个响应式变量
    const count = ref(0);

    // 访问ref定义的变量需要使用 .value
    const cloneCount = count.value;

    return {
      count,
      cloneCount
    };
  }
};
</script>
