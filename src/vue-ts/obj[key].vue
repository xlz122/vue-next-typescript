<template>
  <div>对象通过key获取value报错问题解决</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const persion = {
      age: 3,
      text: 'hello world'
    };

    // 直接获取报错
    // console.log(persion[age]);

    // 写一个方法获取对象里面的属性值时，一般人可能会这么写
    function get<T extends object, K extends keyof T>(o: T, key: K): T[K] {
      return o[key];
    }

    const age = get(persion, 'age');
    const text = get(persion, 'text');
    console.log(age);
    console.log(text);
  }
});
</script>
