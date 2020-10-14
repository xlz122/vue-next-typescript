<template>
  <div>
    <p>reactive定义多个响应式变量（对象、数组）</p>
    <p>{{ obj }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj.name }}</p>
    <p>{{ arr[0] }}</p>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const obj = reactive({
      name: 'xyc',
      age: 25,
      sex: '男'
    });

    const arr = reactive([0, 1, 2, 3]);

    return {
      obj,
      arr
    };
  }
};
</script>
