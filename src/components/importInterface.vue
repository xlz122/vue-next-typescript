<template>
  <p>{{ state.msg }}</p>
  <p>{{ state.count }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
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
