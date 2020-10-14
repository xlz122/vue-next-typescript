<template>
  <div>
    <p>toRef包裹的值可以被传递并且能够保持响应性。</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
// toRef

export default {
  setup() {
    const state = reactive({
      count: 100
    });

    // let count = toRef(state, 'count');
    // let count = state.count;

    // function setState(count) {
    //   count = 100;
    // }
    // console.log(count);
    return {
      ...toRefs(state)
    };
  }
};
</script>
