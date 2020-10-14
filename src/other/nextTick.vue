<template>
  <p>vue 2.0 nextTick挂载在全局vue上</p>
  <p>vue 3.0 通过vue导入 nextTick</p>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';

export default defineComponent({
  setup() {
    nextTick(() => {});
  }
});
</script>
