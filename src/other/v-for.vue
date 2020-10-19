<template>
  <ul>
    <li
      class="item"
      v-for="(item, index) in arrData"
      :key="index"
      @click="getDataId(item.id)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface List {
  id: number;
  title: string;
}

export default defineComponent({
  setup() {
    const arrData = reactive<List[]>([
      { id: 1, title: '第一条数据' },
      { id: 2, title: '第二条数据' },
      { id: 3, title: '第三条数据' },
      { id: 4, title: '第四条数据' },
      { id: 5, title: '第五条数据' }
    ]);

    function getDataId(id: number): void {
      console.log('当前被点击的id=' + id);
    }

    return {
      arrData,
      getDataId
    };
  }
});
</script>

<style lang="less" scoped>
.item {
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
</style>
