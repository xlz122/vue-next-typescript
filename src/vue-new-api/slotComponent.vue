<template>
  <slot></slot>
  <slot name="header"></slot>
  <slot name="footer" :slotMsg="slotMsg"></slot>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const slotMsg = ref<string>('插槽组件变量');

    return {
      slotMsg
    };
  }
});
</script>
