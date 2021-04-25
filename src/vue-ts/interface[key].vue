<template>
  <p>类型接口通过接口key来查找类型，类似js对象的通过key查找</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // 查找类型
    interface Person {
      obj: {
        name: string;
        age: number;
      };
    }

    const obj: Person['obj'] = {
      name: 'xxx',
      age: 23
    };
  }
});
</script>
