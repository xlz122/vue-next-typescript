<template>
  <div>{{ text }}</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const count = ref(1);
    const text = computed(() => count.value + 1);
    return {
      text
    };
  }
};
</script>
