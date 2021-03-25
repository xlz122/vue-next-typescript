<template>
  <p>toRefs包裹的值，解构并且能够保持响应性。</p>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <p>{{ sex }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

interface State {
  name: string;
  age: number;
  sex?: string;
}

export default defineComponent({
  setup() {
    const state = reactive<State>({
      name: 'xyc',
      age: 25,
      sex: '男'
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>
