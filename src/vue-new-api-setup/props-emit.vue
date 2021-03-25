<template>
  <input :value="props.modelValue" @input="onInput" type="text" />
</template>

<script setup>
import { defineEmit, defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: String
  }
});
// 这里使用defineProps来实现Options.props的功能
// 并且这个函数的返回值props与setup(props)一样，
// 我们可以在props里访问到用户传来的数据

const emit = defineEmit(['update:modelValue']);
// 事件的定义使用的是defineEmit来实现Options.emits
// 的功能，他的返回值emit就是ctx.emit，我们可以使用
// emit这个函数发生事件

function onInput(e) {
  emit('update:modelValue', e.target.value);
}

console.log(props); // 父组件传来的值
console.log(emit); // 这个和ctx.emit一样，也是用来发事件的
</script>
