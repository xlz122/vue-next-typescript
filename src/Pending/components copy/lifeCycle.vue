<template>
  <div>生命周期</div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
export default {
  setup() {
    // 生命周期接收一个回调函数
    onMounted(() => {
      console.log('DOM挂载完成之后执行');
    });

    onUnmounted(() => {
      console.log('组件卸载之后执行');
    });
  }
};
</script>
