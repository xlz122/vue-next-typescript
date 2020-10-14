<template>
  <div>
    <p>{{ text }}</p>
    <button @click="changeText">改变文本内容</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const text = ref('靓仔');
    const methods = {
      changeText() {
        text.value = '厦门最靓的仔';
      }
    };
    return {
      text,
      ...methods
    };
  }
};
</script>
