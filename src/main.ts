import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@router/index';
import store from '@store/index';
// 图片懒加载
import imgLazy from '@/utils/imgLazy';
import '@/index.less';

// 参数：components options
// 全局传递，整个项目中，都可以通过props接收username，并使用，参考APP.vue获取
const app = createApp(App, {
  username: 'xlz'
});

// 捕获全局错误
// 错误一旦被这个方法捕获，就不会外抛到在控制台
// 可以通过 console.log(err); 来抛出错误
// 也可以通过 throw err 来向控制台抛出错误
app.config.errorHandler = (err, vm, info) => {
  console.log(err);
  console.log(vm);
  console.log(info);
  throw new Error(err as string);
};

// 全局变量，测试proxy、ctx
app.config.globalProperties.name = '哈喽，abl';

app.use(store);
app.use(router);
app.use(imgLazy);
app.mount('#app');

// createApp(App)
//   .use(store)
//   .use(router)
//   .mount('#app');
