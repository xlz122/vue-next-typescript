<template>
  <p>window新增属性ts爆红解决</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // 直接在window添加属性，会爆红
    // 查看shims-vue.d.ts文件
    window.g = 'hello world';
  }
});
</script>
