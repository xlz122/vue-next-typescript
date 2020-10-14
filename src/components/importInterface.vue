<template>
  <p>问题： .vue组件使用ts文件导出的interface用不了</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { State } from './interface.ts';

export default defineComponent({
  setup() {
    const state: State = reactive({
      msg: '',
      count: 0
    });
  }
});
</script>
