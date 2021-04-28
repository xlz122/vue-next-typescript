<template>
  <p>用于测试组件缓存</p>
  <p>APP.vue - router/index</p>
  <p>{{ count }}</p>
  <button @click="setCount">增加count</button>
  <p>切换todolist/keep-alive路由查看缓存效果</p>
  <p>
    <router-link to="/todolist">跳转todolist路由</router-link>
  </p>
</template>

<script lang="ts">
import { defineComponent, ref, onActivated, onDeactivated } from 'vue';

export default defineComponent({
  setup() {
    // 增加count，切换路由，查看count是否保持
    const count = ref<number>(0);

    function setCount(): void {
      count.value = count.value + 1;
    }

    onActivated(() => {
      console.log('activated-激活生命周期');
    });
    onDeactivated(() => {
      console.log('deactivated-失活生命周期');
    });

    return {
      count,
      setCount
    };
  }
});
</script>
