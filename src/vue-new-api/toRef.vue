<template>
  <p>用来作为一个reactive对象的属性,保持响应式</p>
  <p>{{ name }}</p>
  <p>{{ count }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, toRefs } from 'vue';

interface State {
  name: string;
  count: number;
}

type Count = { value: number }

export default defineComponent({
  setup() {
    const state = reactive<State>({
      name: 'xyc',
      count: 0
    });

    // 作为一个reactive对象的属性
    const aRef = toRef<State, Count>(state, 'count');
    console.log(aRef);

    aRef.value++;
    console.log(state.count); // 1

    state.count++;
    console.log(aRef.value); // 2

    return {
      ...toRefs(state)
    };
  }
});
</script>
