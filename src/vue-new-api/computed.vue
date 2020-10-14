<template>
  <p>{{ countComputed }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

interface State {
  count: number
}

export default defineComponent({
  setup() {
    const state = reactive<State>({
      count: 0
    });

    // 计算属性接收一个回调函数
    const countComputed = computed<number>(() => state.count * 2);
    return {
      countComputed
    };
  }
});
</script>
