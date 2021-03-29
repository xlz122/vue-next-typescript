import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@router/index';
import store from '@store/index';
import '@/index.less';

const app = createApp(App);

// 捕获全局错误
// app.config.errorHandler = (err, vm, info) => {
//   console.log(err);
//   console.log(vm);
//   console.log(info);
// }

app.use(store);
app.use(router);
app.mount('#app');

// createApp(App)
//   .use(store)
//   .use(router)
//   .mount('#app');
