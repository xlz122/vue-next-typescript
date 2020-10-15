<template>
  <p>{{ token }}</p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore, Store } from 'vuex';

export default defineComponent({
  setup() {
    const store: Store<any> = useStore();
    const token = computed<string>(() => store.getters.token);

    setTimeout(() => {
      store.commit('setToken', '我是新token');
    }, 3000);

    return {
      token
    };
  }
});
</script>
