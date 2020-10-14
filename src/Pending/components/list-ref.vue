<template>
  <div v-for="(item, index) in list" :key="index" :ref="setItemRef">{{ item }}</div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([1, 2, 3, 4]);
    let itemRefs = [];

    const setItemRef = el => {
      itemRefs.push(el);
    }

    setTimeout(() => {
      console.log(itemRefs);
    }, 1000);
    return {
      list,
      setItemRef
    };
  }
};
</script>
