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
      },
      {
        immediate: true, // 初始化监听
        deep: true // 深度监听
      }
    );

    // 页面初始化触发
    // 响应式变量更新触发
    const stopWatchEffect: WatchStopHandle = watchEffect((onInvalidate) => {
      console.log(state.count);
      onInvalidate(() => {
        console.log('count更新/组件卸载');
      });
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
