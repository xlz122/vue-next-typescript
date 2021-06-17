<template>
  <div>is="vue:xxx"将普通元素转换为组件</div>
  <div>v-is已被弃用，取而代之的是is="vue:xxx"</div>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // props保持响应式
    const { name } = toRefs(props);
    console.log(name.value);
    return {
    };
  }
});
</script>
