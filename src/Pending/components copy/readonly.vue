<template>
  <div>
    <p>只读</p>
    <!-- <p>{{ readonlyText }}</p>
    <p>{{ readonlyText2.text }}</p> -->
  </div>
</template>

<script>
// import { ref, reactive, readonly } from 'vue';

export default {
  setup() {
    // const text = ref('旧text');
    // const readonlyText = readonly(text.value);
    // // 修改无效
    // readonlyText = '新text';
    // const text2 = reactive({
    //   text: '旧text2'
    // });
    // const readonlyText2 = readonly(text2.text);
    // readonlyText2.text = '新text2';
    // return {
    //   readonlyText,
    //   readonlyText2
    // };
  }
};
</script>
