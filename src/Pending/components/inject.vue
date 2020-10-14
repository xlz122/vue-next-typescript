<template>
  <div>{{ msg }}</div>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const msg = inject('msg');
    return {
      msg
    };
  }
};
</script>
