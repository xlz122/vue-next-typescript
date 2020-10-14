<template>
  <p>组件使用自定义指令</p>
  <p v-highlight="'red'">自定义命令</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // directive('highlight', {
  //   // beforeMount(el, binding) {
  //   //   el.style.background = binding.value;
  //   // }
  //   // mounted() {},
  //   // beforeUpdate() {},
  //   // updated() {},
  //   // beforeUnmount() {},
  //   // unmounted() {}
  // });
});
</script>
