<template>
  <div>
    <p>新的css深度选择器, 传入组件的class类名</p>
    <vuex class="v-deep" />
    <router />
  </div>
</template>

<script>
import Vuex from './vuex';
import Router from './router';

export default {
  components: {
    Vuex,
    Router
  }
};
</script>

<style lang="less" scoped>
::v-deep(.v-deep) {
  color: pink;
  .deep {
    color: red;
  }
}
</style>
