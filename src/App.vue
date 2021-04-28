<template>
  <!-- 是否缓存组件，router.meta配置 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
  </router-view>
  <router-view v-if="!$route.meta.keepAlive"></router-view>

  <!-- 旧版本 -->
  <!-- 3.22号之前还可以用，参考存库（vue-next-test）第一次提交时间 -->
  <!-- 
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    console.dir(props);
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
