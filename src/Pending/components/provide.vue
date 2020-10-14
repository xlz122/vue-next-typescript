<template>
  <div>
    <inject-com />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import InjectCom from './inject.vue';
export default {
  components: {
    InjectCom
  },
  setup() {
    const msg = ref('我是一条msg消息');
    provide('msg', msg);
  }
};
</script>
