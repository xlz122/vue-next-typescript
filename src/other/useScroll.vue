<template>
  <Scroll
    :maxDistance="300"
    :triggerDistance="100"
    @refresh="refresh"
    @load="load"
  >
    <ul>
      <li class="item" v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </Scroll>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Scroll from './Scroll.vue';

export default defineComponent({
  components: {
    Scroll
  },
  setup() {
    const list = ref<number[]>([1, 2, 3, 4, 5]);

    let timer = 0;

    function refresh(done: any) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        console.log('refresh');
        done();
      }, 2000);
    }

    function load(done: any) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        console.log('load');
        done();
      }, 1000);
    }

    return {
      list,
      refresh,
      load
    };
  }
});
</script>

<style lang="less" scoped>
.item {
  list-style: none;
}
</style>
