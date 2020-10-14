<template>
  <div>
    <input type="text" v-model="searchValue" @change="onSearch" />
    <ul>
      <li v-for="(item, index) in showList" :key="`index${index}`">
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { watch } from 'vue';
import searchJs from './search.js';

export default {
  setup() {
    let list = [
      { id: 1, value: 'vue' },
      { id: 2, value: 'react' },
      { id: 3, value: 'angular' },
      { id: 4, value: 'elementui' },
      { id: 5, value: 'ant' },
      { id: 6, value: 'javascript' },
      { id: 7, value: 'css' }
    ];

    let { searchValue, showList, onSearch } = searchJs(list);

    watch(searchValue, () => onSearch());

    return {
      searchValue,
      showList,
      onSearch
    };
  }
};
</script>

<style lang="less" scoped>
ul li {
  list-style: none;
}
</style>
