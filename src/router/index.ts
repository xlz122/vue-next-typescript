import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
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
