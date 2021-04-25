<template>
  <div>{{ obj }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const obj = ref<unknown>({
      name: 'abl',
      o: {}
    });

    // 定义unknown的属性
    // const name = (obj.value as { name: string }).name;
    // console.log(name);
    //其他两种写法
    // const name = (<{ name: string }>obj.value).name;
    // console.log(name);
    // const name = (obj.value as { [k: string]: unknown }).name;
    // console.log(name);

    // 定义unknown的对象属性
    const o = (obj.value as { [key: string]: unknown }).o;
    console.log(o);
    return {
      obj
    };
  }
});
</script>
