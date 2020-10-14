<template>
  <ul class="state-hold">
    <li
      class="item"
      v-for="(item, index) in arrData"
      :key="`index${index}`"
      :class="{ 'active-item': index === parseInt(stateHoldIndex) }"
      @click="setIndex(index)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const arrData = reactive([
      { title: '首页' },
      { title: '新闻' },
      { title: '关于我们' },
      { title: '联系我们' }
    ]);

    // 选中下标
    const store = useStore();
    let stateHoldIndex = ref(store.getters.stateHoldIndex);

    // 设置下标
    function setIndex(index) {
      store.commit('setStateHoldIndex', index);
    }

    watch(
      () => store.getters.stateHoldIndex,
      cur => {
        stateHoldIndex.value = cur;
      }
    );

    return {
      arrData,
      stateHoldIndex,
      setIndex
    };
  }
};
</script>

<style lang="less" scoped>
.state-hold {
  .item {
    display: inline-block;
    margin: 0 10px;
  }
  .active-item {
    color: yellowgreen;
  }
}
</style>
