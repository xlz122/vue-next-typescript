<template>
  <p>vue文件，导入interface接口</p>
  <p>{{ state.msg }}</p>
  <p>{{ state.count }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
// 不可以带文件后缀（爆红）
import { State } from './interface';

export default defineComponent({
  setup() {
    const state: State = reactive({
      msg: '',
      count: 0
    });
    return {
      state
    };
  }
});
</script>
