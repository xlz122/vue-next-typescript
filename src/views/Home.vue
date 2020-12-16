<template>
  <p>setup新增新特性</p>
  <p>变量不要export，可以直接使用，原先需要导出</p>
  <span>{{ test }}</span>
</template>

<script setup>
import { ref } from 'vue';

const test = ref('消息');
</script>
