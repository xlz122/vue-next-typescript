<template>
  <p>inject：{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    const msg = inject<string>('msg');

    return {
      msg
    };
  }
});
</script>
