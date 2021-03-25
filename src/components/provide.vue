<template>
  <p>多层子组件传递数据</p>
  <p>所有子组件都可以通过provide接收</p>
  <Inject />
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import Inject from './inject.vue';

export default defineComponent({
  components: {
    Inject
  },
  setup() {
    const msg = ref<string>('provide测试');
    // provide
    // 第一参数：inject接收的变量
    // 第二参数：传递的数据
    provide('msg', msg);
  }
});
</script>
