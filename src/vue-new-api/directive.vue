<template>
  <p>组件使用自定义指令</p>
  <input type="text" v-focus />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  directives: {
    focus: {
      // 参数 el, binding, vnode, oldVnode
      beforeMount(el: any) {
        el.focus();
        el.style.border = '1px solid red';
      }
      // beforeMount() {}
      // mounted() {},
      // beforeUpdate() {},
      // updated() {},
      // beforeUnmount() {},
      // unmounted() {}
    }
  }
});
</script>
