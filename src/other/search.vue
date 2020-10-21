<template>
  <input type="text" v-model="searchValue" @change="onSearch" />
  <ul>
    <li v-for="(item, index) in showList" :key="`index${index}`">
      {{ item.value }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import searchJs from './search.ts';

interface List {
  id: number;
  value: string;
}

export default defineComponent({
  setup() {
    const list: List[] = [
      { id: 1, value: 'vue' },
      { id: 2, value: 'react' },
      { id: 3, value: 'angular' },
      { id: 4, value: 'elementui' },
      { id: 5, value: 'ant' },
      { id: 6, value: 'javascript' },
      { id: 7, value: 'css' }
    ];

    const { searchValue, showList, onSearch } = searchJs(list);

    watch<string, false>(searchValue, () => onSearch());

    return {
      searchValue,
      showList,
      onSearch
    };
  }
});
</script>

<style lang="less" scoped>
ul li {
  list-style: none;
}
</style>
