<template>
  <div>
    <functional-comp />
  </div>
</template>

<script>
import { h } from 'vue';

export default {
  setup() {
    // 参数：props, { slots, attrs, emit }
    const FunctionalComp = () => {
      return h('div', 'Hello World!');
    };
    return FunctionalComp;
  }
};
</script>
