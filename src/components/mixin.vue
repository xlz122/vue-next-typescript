<template>
  <p>mixin混入</p>
  <p>{{ msg }}}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const msg = ref<string>('混入消息');
    return {
      msg
    };
  },
  data() {
    return {
      test: 'data'
    };
  }
});
</script>
