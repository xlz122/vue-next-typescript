<template>
  <p>{{ count }}</p>
  <router-link to="/test">test</router-link>
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

    // 页面初始化触发 / 响应式变量更新触发
    // onInvalidate: 类似react的useEffect
    // 使用了响应式变量，则会重新执行watchEffect前触发
    // 使用了一个空的watchEffect，则在组件销毁前触发
    const stopWatchEffect: WatchStopHandle = watchEffect((onInvalidate) => {
      console.log(state.count);
      onInvalidate(() => {
        alert('count更新/组件卸载');
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
