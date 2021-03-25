<template>
  <p>es11 新特性</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // menu.js
    // export default {
    //   menu: 'menu'
    // }
    // 使用
    // import('./menu.js');
    //   .then(res =>{
    //     console.log(res)
    //   });
    // ES2020新增了 export * as XX from 'module'，和 import * as XX from 'module'
    // menu.js
    // export * as ns from './info';
    // 可以理解为是将下面两条语句合并为一句：
    // import * as ns from './info';
    // export { ns };
    // 不过需要注意的是 export * as ns from './info' 并不会真的将导入模块，因此在该模块(menu.js)中，我们是获取不到 ns 的。
    // ES2020 中引入 globalThis 作为顶层对象，在任何环境下，都可以简单的通过 globalThis 拿到顶层对象。
    // ES2020 新增了一个运算符 ??。当左侧的操作数为 null 或者 undefined时，返回其右侧操作数，否则返回左侧操作数。
    // 使用 || 操作符，当左侧的操作数为 0 、 null、 undefined、 NaN、 false、 '' 时，都会使用右侧的操作数。如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。
    // const defaultValue = 100;
    // let value = someValue || defaultValue;
    // 当 someValue 的值为 0 时 ，我们其实期望 value 值为 0, 但是它却被错误的分配成了 100.
    // 当 someValue 转成 boolean 值为 false 时，value 的值都是 defaultValue
    // ?? 操作符可以规避以上问题，?? 它只有在左操作数是 null 或者是 undefined 时，才会返回右侧操作数。
    // const defaultValue = 100;
    // let value = someValue ?? defaultValue; // someValue 为 0 ，value 的值是 0
    // const tortoise = info.animal?.reptile?.tortoise;
  }
});
</script>
