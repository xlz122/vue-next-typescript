<template>
  <p>注意： update:modelValue 中间不能有空格</p>
  <p>modelValue为使用单个v-model的固定语法</p>
  <input type="text" :value="modelValue" @input="inputChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  // 需要和emits同名，否则控制台报警告
  // emits可以进行验证
  // https://v3.vuejs.org/guide/component-custom-events.html#validate-emitted-events
  emits: ['update:modelValue'],
  setup(props, ctx) {
    function inputChange(e: any): void {
      ctx.emit('update:modelValue', e.target.value);
    }

    return {
      inputChange
    };
  }
});
</script>
