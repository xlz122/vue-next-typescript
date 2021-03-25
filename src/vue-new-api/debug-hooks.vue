<template>
  <div>
    <p>vue 调试钩子 onRenderTracked onRenderTriggered</p>
    <p>onRenderTracked 状态跟踪</p>
    <p>onRenderTriggered 状态触发</p>
    <p>测试状态：{{ renderTracked }}</p>
    <p @click="changeRenderTracked">
      <button>更新《renderTracked》</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onRenderTracked, onRenderTriggered } from 'vue';

export default defineComponent({
  setup() {
    const renderTracked = ref<number>(0);

    function changeRenderTracked(): void {
      renderTracked.value += 1;
    }

    // 状态追踪钩子，接收一个event函数
    onRenderTracked((event: any) => {
      console.log('状态追踪钩子');
      console.log(event);
    });

    onRenderTriggered((event: any) => {
      console.log('状态触发钩子');
      console.log(event);
    });
    return {
      renderTracked,
      changeRenderTracked
    };
  }
});
</script>
