<template>
  <ul class="state-hold">
    <li
      class="item"
      v-for="(item, index) in arrData"
      :key="`index${index}`"
      :class="{ 'active-item': index === parseInt(holdIndex) }"
      @click="setIndex(index)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';

type ArrData = { title: string }[];

export default defineComponent({
  setup() {
    const arrData = reactive<ArrData>([
      { title: '首页' },
      { title: '新闻' },
      { title: '关于我们' },
      { title: '联系我们' }
    ]);

    const store = useStore();
    // 选中下标
    const holdIndex = computed<number>(() => store.getters.holdIndex);

    // 设置下标
    function setIndex(index: number): void {
      store.commit('setHoldIndex', index);
    }

    return {
      arrData,
      holdIndex,
      setIndex
    };
  }
});
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
