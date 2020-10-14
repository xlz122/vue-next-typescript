<template>
  <div>
    <p>toRefs包裹的值可以被传递并且能够保持响应性。</p>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ sex }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const obj = reactive({
      name: 'xyc',
      age: 25,
      sex: '男'
    });

    return {
      ...toRefs(obj)
    };
  }
};
</script>
