<template>
  <div>
    <p>watch监听</p>
    <p>注意：watch只能监听响应式变量</p>
    <p>问题：不知道如何监听数组</p>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup() {
    // 监听单个变量
    const text = ref('我是text');
    setTimeout(() => {
      text.value = '我是新值';
    }, 1000);
    // watch
    // 第一个参数：回调函数，返回要监听的变量
    // 第二个参数：回调函数，接收两个值（新值和旧值）
    watch(
      () => text.value,
      (curVal, oldVal) => {
        console.log('新值:' + curVal);
        console.log('旧值:' + oldVal);
      }
    );

    // 监听多个变量
    const obj = reactive({
      name: 'xyc',
      age: 25,
      sex: '男'
    });
    setTimeout(() => {
      obj.name = '我是新的name';
    }, 1000);
    setTimeout(() => {
      obj.age = '我是新的age';
    }, 1000);
    // watch
    // 第一个参数：数组形式的回调函数，返回要监听的变量
    // 第二个参数：回调函数，接收两个值（数组形式的新值和旧值）
    watch(
      [() => obj.name, () => obj.age],
      ([curName, curAge], [oldName, oldAge]) => {
        console.log(curName); // 新name
        console.log(curAge); // 新age
        console.log(oldName); // 旧name
        console.log(oldAge); // 旧age
      }
    );

    // 监听数组（没反应）
    const arr = reactive([0, 1, 2]);
    setTimeout(() => {
      arr[0] = 3;
    }, 1000);
    watch(
      () => arr,
      (curVal, oldVal) => {
        console.log(curVal);
        console.log(oldVal);
      }
    );

    // 停止监听
    const count = ref(0);
    setInterval(() => {
      count.value++;
      if (count.value === 10) {
        // 停止监听器
        stopWatch();
        console.log('监听器停止了');
      }
    }, 1000);
    // 监听器停止函数，以返回值的方式
    const stopWatch = watch(
      () => count.value,
      curVal => {
        console.log('测试监听器停止:' + curVal);
      }
    );
  }
};
</script>
