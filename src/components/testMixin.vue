<template>
  <p>混入(适用2.x options API) 3.0暂时不知道怎么使用</p>
  <p>只混入了options API，setup的return无效</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Minix from './mixin.vue';

// 组件和混入同名 组件高于混入
// data属性：是对象，组件对象直接覆盖混入的同名对象
// methods方法同上
// 生命周期：同名钩子函数将合并为一个数组，因此都将被调用。混入对象的钩子将在组件自身钩子之前调用
export default defineComponent({
  mixins: [Minix],
  mounted() {
    console.log(this.$data);
  }
});
</script>
