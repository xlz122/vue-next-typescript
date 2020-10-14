<template>
  <p>{{ token }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore, Store } from 'vuex';

export default defineComponent({
  setup() {
    const store: Store<any> = useStore();
    const token = ref<string>(store.getters.token);

    setTimeout(() => {
      store.commit('setToken', '我是新token');
    }, 3000);

    // 目前采用监听的方式来更新视图，待优化
    watch(
      () => store.getters.token,
      curVal => {
        token.value = curVal;
      }
    );

    return {
      token
    };
  }
});
</script>
