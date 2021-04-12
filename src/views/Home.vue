<!-- 新版本 -->
<template>
  <p class="test">测试setup vars {{ color }}</p>
</template>

<script setup>
const color = 'red';
const font = {
  size: '18px'
};
</script>

<style scoped>
.test {
  /* 变量使用 */
  color: v-bind(color);
  /* 对象使用 */
  font-size: v-bind('font.size');
}
</style>
