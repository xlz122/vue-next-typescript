<template>
  <input type="text" :value="title" @input="titleChange" />
  <input type="text" :value="content" @input="contentChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  // 需要和emits同名，否则控制台报警告
  // emits可以进行验证
  // https://v3.vuejs.org/guide/component-custom-events.html#validate-emitted-events
  emits: ['updateTitle', 'updateContent'],
  setup(props, ctx) {
    // 第一个input change事件
    function titleChange(e: any): void {
      ctx.emit('updateTitle', e.target.value);
    }

    // 第二个input change事件
    function contentChange(e: any): void {
      ctx.emit('updateContent', e.target.value);
    }

    return {
      titleChange,
      contentChange
    };
  }
});
</script>
