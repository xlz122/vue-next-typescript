<template>
  <p>按钮权限控制</p>
  <button v-button-add>新增</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  directives: {
    'button-add': {
      // 参数 el, binding, vnode, oldVnode
      // beforeMount(el: any) {}
      // beforeMount() {}
      mounted(el: any) {
        el.parentNode.removeChild(el);
      }
      // beforeUpdate() {},
      // updated() {},
      // beforeUnmount() {},
      // unmounted() {}
    }
  }
});
</script>
