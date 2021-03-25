<template>
  <p>windows新增属性ts爆红解决</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // 查看shims-vue.d.ts文件
    window.g = 'hello world';
  }
});
</script>
