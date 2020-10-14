<template>
  <p class="test">测试setup vars {{ color }}</p>
</template>

<script setup>
export const color = 'red';
</script>

<style vars="{ color }" scoped>
.test {
  color: var(--color);
}
</style>
