<template>
  <p>数组/数组对象，ts类型断言</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// 只有一种类型的数组
interface NumberArray {
  [index: number]: number;
}

// 数组对象
interface List {
  title: string;
  count: number;
}

interface State<T> {
  title: string;
  list: T[];
}

export default defineComponent({
  setup() {
    const numArr: NumberArray = [1, 2, 3];

    const list = ref<State<List>[]>([
      {
        title: '',
        list: [
          {
            title: '',
            count: 0
          }
        ]
      }
    ]);

    return {
      numArr,
      list
    };
  }
});
</script>
