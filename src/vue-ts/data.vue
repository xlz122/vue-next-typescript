<template>
  <p>vue2.x语法 - data的ts定义</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Book {
  title: string;
  author: string;
  year: number;
}

export default defineComponent({
  data(): Book {
    return {
      title: 'Vue 3 Guide',
      author: 'Vue Team',
      year: 2020
    };
  }
  // 第二种写法
  // data() {
  //   return {
  //     book: {
  //       title: 'Vue 3 Guide',
  //       author: 'Vue Team',
  //       year: 2020
  //     } as Book
  //   }
  // }
});
</script>
