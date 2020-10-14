<template>
  <button @click="goHome">跳转到首页</button>
  <router-link :to="{ name: 'home' }">跳转到首页</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter, Router } from 'vue-router';

export default defineComponent({
  setup() {
    const router: Router = useRouter();

    function goHome(): void {
      router.push({ name: 'home' });
    }
    
    return {
      goHome
    };
  }
});
</script>
