import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
];

const router = createRouter({
  // BASE_URL 和 vue.config.js 的publicPath相对应
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
