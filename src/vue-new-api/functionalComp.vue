<template>
  <p>函数组件</p>
  <FunctionalComp />
</template>

<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup() {
    // 参数：props, { slots, attrs, emit }
    const FunctionalComp: () => any = () => {
      return h('div', 'Hello World!');
    };
    return FunctionalComp;
  }
});
</script>
