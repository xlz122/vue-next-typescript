<template>
  <p>
    <router-link to="/keep-alive">跳转keep-alive路由</router-link>
  </p>
  <input v-model="inputVal" type="text" placeholder="请输入" />
  <button @click="addList">添加</button>
  <ul>
    <li v-for="(item, index) in list" :key="index" @click="removeList(index)">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const inputVal = ref<string>('');
    const list = ref<string[]>(['任务1', '任务2']);

    // 添加
    function addList(): void {
      if (inputVal.value) {
        list.value.push(inputVal.value);
      }
    }

    // 删除
    function removeList(index: number): void {
      if (list.value[index]) {
        list.value.splice(index, 1);
      }
    }
    return {
      inputVal,
      list,
      addList,
      removeList
    };
  }
});
</script>
