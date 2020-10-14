<template>
  <div>
    <div>子组件</div>
    <p>{{ obj.name }}</p>
    <p>{{ obj1.name }}</p>
    <button @click="fnAfferent(1000, $event)">函数传参</button>
    <button @click="fnAfferent1">函数传参1</button>
    <button @click="fn">父组件函数</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    obj: {
      type: Object,
      default: null
    },
    obj1: {
      type: Object,
      default: null
    },
    fn: {
      type: Function,
      default: null
    }
  },
  setup(props, ctx) {
    // console.log(props);

    const count = ref(1000);

    const methods = {
      fnAfferent(number, event) {
        console.log(number);
        console.log(event);
      },
      fnAfferent1() {
        console.log(count);
        console.log(event);
        methods.fnAfferent2(props.obj);
      },
      fnAfferent2(obj) {
        // 子父通信
        ctx.emit('fn1', obj);
      }
    };

    return {
      ...methods
    };
  }
};
</script>
