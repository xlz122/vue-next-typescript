<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ name1 }}</p>
    <p>{{ age1 }}</p>
    <p>{{ name2 }}</p>
    <p>{{ age2 }}</p>
    <button @click="stopWatch">停止监听器</button>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, reactive, toRefs, watch, watchEffect } from 'vue';
export default {
  setup() {
    // ref类型
    // 监听单个ref数据
    const name = ref('name');
    watch(
      name, (curName, oldName) => {
        console.log(curName);
        console.log(oldName);
      }
    )
    setTimeout(() => {
      name.value = '新name';
    }, 1000);
    // 监听多个ref数据
    const name1 = ref('name1');
    const age1 = ref(1);
    watch(
      [name1, age1],
      ([curName1, curAge1], [oldName1, oldAge1]) => {
        console.log(curName1); // 新name1
        console.log(curAge1); // 新age1
        console.log(oldName1); // 旧name1
        console.log(oldAge1); // 就age1
      }
    )
    setTimeout(() => {
      name1.value = '新name1';
      age1.value = 2;
    }, 1000);

    // reactive类型
    const state = reactive({
      name2: 'name2',
      age2: 3
    });
    // 监听单个reactive数据
    watch(
      () => state.name2,
      (curName2, oldName2) => {
        console.log(curName2); // 新name2
        console.log(oldName2); // 旧name2
      }
    )
    // 监听多个reactive数据
    const stop = watch(
      [() => state.name2, () => state.age2],
      ([curName2, curAge2], [oldName2, oldAge2]) => {
        console.log(curName2); // 新name2
        console.log(curAge2); // 新age2
        console.log(oldName2); // 旧name2
        console.log(oldAge2); // 就age2
      }
    )

    // 停止监听器
    const stopWatch = () =>  stop();

    setTimeout(() => {
      state.name2 = '新name2';
      state.age2 = 4;
    }, 1000);

    watchEffect(() => {
      // 这里面类似于监听响应式数据，只要在这里面使用了响应式数据，就会被触发
      // 比如 console.log(state.name2)
    })

    return {
      name,
      name1,
      age1,
      ...toRefs(state),
      stopWatch
    }
  }
}
</script>
