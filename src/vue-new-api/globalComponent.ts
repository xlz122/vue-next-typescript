import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@router/index';
import store from '@store/index';

const app = createApp(App);

// 注册全局组件
app.component('my-component', {
  /* ... */
});

app.use(store);
app.use(router);
app.mount('#app');
