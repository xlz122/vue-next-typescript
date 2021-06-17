<template>
  <div>is="vue:xxx"将普通元素转换为组件</div>
  <div>v-is已被弃用，取而代之的是is="vue:xxx"</div>
  <component :is="Test" :name="'hello'"></component>
  <!-- 不推荐使用HTML元素的“is”属性 -->
  <!-- <div is="vue:Test"></div> -->
  <!-- <Test /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Test from './Test.vue';

export default defineComponent({
  components: {
    Test
  },
  setup() {
    return {
      Test
    };
  }
});
</script>
