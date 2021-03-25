<template>
  <p id="p" ref="p">dom的ts类型</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // ref定义
    const p = ref<HTMLElement | null>(null);

    return {
      p
    };
  },
  mounted() {
    // 原生js
    const p = document.getElementById('p') as HTMLElement;
    console.log(p);
    // ref
    (this.$refs.p as HTMLElement).style.color = 'red';
  }
});
</script>
