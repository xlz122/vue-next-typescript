<template>
  <div>{{ token }}</div>
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const token = ref(store.getters.token);

    setTimeout(() => {
      store.commit('setToken', '我是新token');
    }, 3000);

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
};
</script>
