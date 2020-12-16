<template>
  <p>setup语法糖中，组件注册</p>
  <TodoList />
</template>

<script lang="ts" setup>
export { default as TodoList } from '../views/todolist.vue';
</script>
