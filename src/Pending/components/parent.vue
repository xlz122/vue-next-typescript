<template>
  <div>
    <div>父组件</div>
    <p>{{ obj.name }}</p>
    <p>{{ obj1.name }}</p>
    <child :obj="obj" :obj1="obj1" :fn="fn" @fn1="fn1" />
  </div>
</template>

<script>
import { reactive } from 'vue';
import Child from './child.vue';

export default {
  components: {
    Child
  },
  setup() {
    const obj = reactive({ name: 'xlz', age: 22 });
    const obj1 = { name: '我是普通的数据name' };
    setTimeout(() => {
      obj.name = '我是新name';
      obj1.name = '我是新的普通的数据name';
    }, 1000);

    console.log(obj);
    console.log(obj1);

    // 父组件传递给子组件的方法
    function fn() {
      console.log('父组件传递给子组件');
    }

    // 子组件传递给父组件的方法
    function fn1(obj) {
      console.log('子组件传递给父组件的方法');
      console.log(obj);
    }

    return {
      obj,
      obj1,
      fn,
      fn1
    };
  }
};
</script>
