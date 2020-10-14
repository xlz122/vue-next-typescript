<template>
  <p>data中的ts定义</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  setup() {},
  data() {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  }
});
</script>
