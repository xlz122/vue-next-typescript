<template>
  <div>
    <p>路由</p>
    <p @click="goToVuex">跳转vuex路由</p>
    <p class="deep">{{ routers }}</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // 获取路由列表
    const routers = router.getRoutes();

    // 路由跳转至vuex
    function goToVuex() {
      router.push('/vuex');
    }
    return {
      routers,
      goToVuex
    };
  }
};
</script>
