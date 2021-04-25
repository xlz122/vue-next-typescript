import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@router/index';
import store from '@store/index';

const app = createApp(App);

// 添加可在程序内的任何组件实例中访问的全局属性。当存在键冲突时，组件属性将优先
// 替代掉Vue2.x的 Vue.prototype属性放到原型上的写法
app.config.globalProperties.foo = 'bar';

// 组件使用
// import { getCurrentInstance } from 'vue';
// 建议使用proxy,ctx打包后拿不到(亲测)
// const { proxy, ctx } = getCurrentInstance();
// proxy.foo; 全局属性

export default {
  mounted() {
    // console.log(this.foo);
  }
};

app.use(store);
app.use(router);
app.mount('#app');
