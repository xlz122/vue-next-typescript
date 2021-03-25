<template>
  <p>script和setup一起使用，选项合并</p>
  <p>同时使用时，script 应放在 setup前面，否则不生效</p>
  <p>
    同时使用时，script，不能再使用setup入口函数，只能使用一些平常函数，和options
    api
  </p>
  <p>同时使用时，import共享</p>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // 无效
  // setup() {
  //   const count = ref<number>(1);
  //   return {
  //     count
  //   };
  // },
  mounted() {
    alert((this as any).msg);
    // undefined
    // alert((this as any).count);
  }
});
</script>

<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref<string>('消息');
</script>
