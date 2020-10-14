<template>
  <p>不同场景：setup函数获取props、ctx</p>
</template>

<!-- 普通场景：通过setup函数获取 -->
<script>
export default {
  setup(props, ctx) {}
};
</script>

<!-- 没有setup函数 -->
<!--
<script setup="props, ctx">
console.log(props);
console.log(ctx);
</script>
-->

<!-- 没有setup函数，可以使用解构 -->
<!--
<script setup="props, { emit }">
console.log(props);
console.log(emit);
</script>
-->

<!-- ts -->
<!--
<script lang="ts" setup="props, { emit }">
console.log(props, emit);
</script>
-->
