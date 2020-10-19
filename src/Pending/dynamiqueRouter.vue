<template>
  <div>
    <p>动态路由</p>
    <div class="row">
      <button @click="getAllRoutes">获取所有路由</button>
    </div>
    <div class="row">
      <p>删除之后点击单个响应变量查看效果</p>
      <button @click="rmRoute">删除单个响应变量路由</button>
    </div>
    <div class="row">
      <button @click="HasRoute">判断路由是否存在</button>
    </div>
    <div class="row">
      <button @click="AddRoute">添加动态路由</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue';

export default {
  setup() {
    const router = useRouter();

    // 获取所有的路由列表
    function getAllRoutes() {
      console.log(router.getRoutes());
    }

    // 删除单个响应变量路由
    function rmRoute() {
      // 参数为路由name
      router.removeRoute('Home');
      console.log(router.getRoutes());
    }

    // 判断路由是否存在
    function HasRoute() {
      // 参数为路由name
      console.log(router.hasRoute('Home'));
    }

    // 添加动态路由，配合删除一起使用
    const routerList = ref([
      {
        path: '/',
        name: 'Home',
        component: 'components/index.vue'
      }
    ]);
    function AddRoute() {
      routerList.value.map(item => {
        // 会重复添加，需要进行去重处理
        router.addRoute({
          path: item.path,
          name: item.name,
          component: defineAsyncComponent(() => import(`@/${item.component}`))
        });
      });
    }

    return {
      getAllRoutes,
      rmRoute,
      HasRoute,
      AddRoute
    };
  }
};
</script>

<style lang="less" scoped>
.row {
  margin: 10px;
}
</style>
