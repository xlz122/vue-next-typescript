<template>
  <p>ref</p>
  <p>{{ str }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Str {
  value: string | number;
}

type Str1 = {
  value: string | number;
};

export default defineComponent({
  setup() {
    // 定义单个响应式变量
    const str = ref<string | number>('str');
    // const str = ref('str') as Str;
    // const str: Str = ref('str');

    // const str: Str1 = ref('str');
    // const str = ref('str') as Str1;

    // 访问ref定义的变量需要使用 .value
    str.value = 1;

    return {
      str
    };
  }
});
</script>
