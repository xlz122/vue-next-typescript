<template>
  <p>{{ count }}</p>
  <button @click="addCount">count++</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  watchEffect,
  WatchStopHandle
} from 'vue';

interface State {
  count: number;
}

export default defineComponent({
  setup() {
    const state = reactive<State>({
      count: 1
    });

    const stopWatch: WatchStopHandle = watch(
      () => state.count,
      (curVal, oldVal) => {
        console.log(curVal);
        console.log(oldVal);
      }
    );

    const stopWatchEffect: WatchStopHandle = watchEffect(() => {
      console.log(state.count);
    });

    function addCount(): void {
      state.count++;
      if (state.count >= 5) {
        // 停止watch监听
        stopWatch();
        // 停止watchEffect监听
        stopWatchEffect();
      }
    }
    return {
      ...toRefs<State>(state),
      addCount
    };
  }
});
</script>
