<template>
  <div>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <div>
      <button @click="changeText1">改变text1内容</button>
    </div>
    <div>
      <button @click="changeText2">改变text2内容</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      text1: '最靓的仔',
      text2: 'abl'
    });
    const methods = {
      changeText1() {
        state.text1 = '厦门最靓的仔';
      },
      changeText2() {
        state.text2 += `是${state.text1}`;
      }
    };
    return {
      // 让后续被解构的时候不会失去响应性
      ...toRefs(state),
      ...methods
    };
  }
};
</script>
