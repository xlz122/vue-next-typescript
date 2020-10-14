<template>
  <div>
    <button @click="goToVuex">跳转到vuex页面</button>
    <router-link :to="{ name: 'vuex' }">跳转到vuex页面</router-link>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();

    function goToVuex() {
      router.push({ name: 'vuex' });
    }

    return {
      goToVuex
    };
  }
};
</script>
