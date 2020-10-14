<template>
  <div>
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
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const arrData = reactive([
      { id: 1, title: '第一条数据' },
      { id: 2, title: '第二条数据' },
      { id: 3, title: '第三条数据' },
      { id: 4, title: '第四条数据' },
      { id: 5, title: '第五条数据' }
    ]);

    function getDataId(id) {
      console.log('当前被点击的id=' + id);
    }

    return {
      arrData,
      getDataId
    };
  }
};
</script>

<style>
.item {
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
</style>
