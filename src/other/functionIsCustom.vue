<template>
  <p>确定一个函数是不是用户自定义的</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // 我们使用的就两种函数
    // 环境提供给我们的跟我们用户自己定义的
    // 这两种函数在转换成字符串时表现形式是不同的
    Array.isArray.toString(); // "function isArray() { [native code] }"
    function fn() {}
    fn.toString(); // "function fn(){}"

    // 环境自带函数调用toString方法后总是会返回
    // function fnName() { [native code] }格式的字符串

    function isNative(Ctor: any) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
    }
  }
});
</script>
