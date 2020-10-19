<template>
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
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from 'vue';
import { useRouter, Router } from 'vue-router';

interface RouterList {
  path: string;
  name: string;
  component: string;
}

export default defineComponent({
  setup() {
    const router: Router = useRouter();

    // 获取所有的路由列表
    function getAllRoutes(): void {
      console.log(router.getRoutes());
    }

    // 删除单个响应变量路由
    function rmRoute(): void {
      // 参数为路由name
      router.removeRoute('home');
      console.log(router.getRoutes());
    }

    // 判断路由是否存在
    function HasRoute(): void {
      // 参数为路由name
      console.log(router.hasRoute('home'));
    }

    // 添加动态路由，配合删除一起使用
    const routerList = ref<RouterList[]>([
      {
        path: '/',
        name: 'Home',
        component: 'views/Home.vue'
      }
    ]);
    function AddRoute(): void {
      routerList.value.forEach(item => {
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
});
</script>

<style lang="less" scoped>
.row {
  margin: 10px;
}
</style>
