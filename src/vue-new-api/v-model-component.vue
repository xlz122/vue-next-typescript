<template>
  <p>注意： update:title 中间不能有空格</p>
  <!-- 写在html上 -->
  <!-- <input type="text" :value="title"  @input="$emit('update:title', $event.target.value)" />
  <input type="text" :value="content"  @input="$emit('update:content', $event.target.value)" /> -->

  <!-- 写在事件上 -->
  <input type="text" :value="title" @input="titleChange" />
  <input type="text" :value="content" @input="contentChange" />

  <!-- 写在click上 -->
  <!-- <button @click="$emit('update:title', '消息2');">点我</button>
  <button @click="$emit('update:content', '消息3');">点我</button> -->
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
  emits: ['update:title', 'update:content'],
  setup(props, ctx) {
    // 第一个input change事件
    function titleChange(e: any): void {
      ctx.emit('update:title', e.target.value);
    }

    // 第二个input change事件
    function contentChange(e: any): void {
      ctx.emit('update:content', e.target.value);
    }

    return {
      titleChange,
      contentChange
    };
  }
});
</script>
