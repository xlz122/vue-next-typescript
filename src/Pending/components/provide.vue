<template>
  <div>
    <inject />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import Inject from './inject.vue';

export default {
  components: {
    Inject
  },
  setup() {
    const msg = ref('provide测试');
    // provide
    // 第一参数：inject接收的变量
    // 第二参数：传递的数据
    provide('msg', msg);
  }
};
</script>
