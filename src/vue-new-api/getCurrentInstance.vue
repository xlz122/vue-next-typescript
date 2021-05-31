<template>
  <div>获取全局绑定的属性，方法 getCurrentInstance</div>
  <div>总是使用proxy来获取全局变量、方法，而不是ctx</div>
  <div>proxy打包后依然有效，ctx打包后失效</div>
  <p>{{ proxy.name }}</p>
  <p>{{ ctx.name }}</p>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const instance: unknown = getCurrentInstance();
    const ctx = (instance as { ctx: unknown }).ctx;
    const proxy = (instance as { proxy: unknown }).proxy;
    return {
      ctx,
      proxy
    };
  }
});
</script>
