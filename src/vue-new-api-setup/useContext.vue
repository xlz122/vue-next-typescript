<template>
  <p>setup语法糖中，获取props, emit, slots, attrs</p>
</template>

<script lang="ts" setup>
import { useContext } from 'vue';

// const ctx = useContext();
// console.log(ctx);

const { props, emit, slots, attrs } = useContext();
console.log(props);
console.log(emit);
console.log(slots);
console.log(attrs);
</script>
