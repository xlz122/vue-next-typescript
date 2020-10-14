<template>
  <div></div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
export default {
  setup() {
    onMounted(() => {
      console.log('组件挂载完成执行');
    });
    onBeforeUnmount(() => {
      console.log('组件卸载之前执行');
    });
  }
};
</script>
