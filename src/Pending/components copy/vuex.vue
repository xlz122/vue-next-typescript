<template>
  <div>
    <p>vuex</p>
    <p>{{ storeGetters.token }}</p>
    <p class="deep">v-deep深度选择器修改</p>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const storeGetters = reactive({
      token: store.getters.token
    });

    setTimeout(() => {
      store.commit('setToken', '我是新token');
    }, 2000);

    // vuex数据不更新，需要用监听处理
    // 后续完善
    watch(
      () => store.getters.token,
      curVal => {
        storeGetters.token = curVal;
      }
    );

    return {
      storeGetters
    };
  }
};
</script>
