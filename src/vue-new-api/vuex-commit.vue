<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const msg = ref<string>(store.getters.msg);
    // 问题：store已经更新了，但是视图并没有更新
    nextTick(() => {
      store.commit('setMsg', '新消息');
      console.log(store);
    });
    return {
      msg
    };
  }
});
</script>
