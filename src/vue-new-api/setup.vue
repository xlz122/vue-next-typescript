<template>
  <p>问题：props不知道怎么定义</p>
  <ul>
    <li
      class="item"
      :class="{ 'active-item': index === activeIndex }"
      v-for="(item, index) in list"
      :key="index"
      @click="setBackground(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts" setup="props, { emit }">
import { ref } from 'vue';

type SetBackground = (index: number) => void;

export const backgroundColor = ref<string>('red');
export const activeIndex = ref<number>(0);
export const list = ref<number[]>([1, 2, 3, 4]);
export const setBackground: SetBackground = index => {
  backgroundColor.value = 'red';
  activeIndex.value = index;
};
</script>

<style lang="less" vars="{ backgroundColor }" scoped>
.item {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.active-item {
  background-color: var(--backgroundColor);
}
</style>
