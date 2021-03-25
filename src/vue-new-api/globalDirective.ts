import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@router/index';
import store from '@store/index';

const app = createApp(App);

// 自定义指令
app.directive('highlight', {
  beforeMount(el, binding) {
    el.style.background = binding.value;
  }
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeUnmount() {},
  // unmounted() {}
});

app.use(store);
app.use(router);
app.mount('#app');
