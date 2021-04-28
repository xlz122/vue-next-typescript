import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () =>
      import(/* webpackChunkName: "todolist" */ '../views/TodoList.vue')
  },
  {
    path: '/keep-alive',
    name: 'keep-alive',
    meta: {
      keepAlive: true // 需要被缓存
    },
    component: () =>
      import(/* webpackChunkName: "keep-alive" */ '../views/KeepAlive.vue')
  },
  // 未匹配的路径名称导航到该路径
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ '../views/not-found/notFound.vue'
      )
  }
];

const router = createRouter({
  // BASE_URL 和 vue.config.js 的publicPath相对应
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
