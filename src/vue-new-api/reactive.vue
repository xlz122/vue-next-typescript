<template>
  <p>reactive</p>
  <p>{{ student1 }}</p>
  <p>{{ student2 }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface Student {
  name: string;
  age: number;
  sex?: string;
}

export default defineComponent({
  setup() {
    // 第一种方式
    const student1 = reactive<Student>({
      name: '小明',
      age: 22
    });

    // 第二种方式
    const student2: Student = reactive({
      name: '小李',
      age: 30,
      sex: '男'
    });

    return {
      student1,
      student2
    };
  }
});
</script>
