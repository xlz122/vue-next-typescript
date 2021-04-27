<template>
  <p>异步组件</p>
  <Suspense>
    <template v-slot:default>
      <vuex />
    </template>
    <template v-slot:fallback>
      <h1>loading...</h1>
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const Vuex = defineAsyncComponent(() => import('./vuex'));

// options(选项)
// const AsyncFooWithOptions = defineAsyncComponent({
//   loader: () => import("./Foo.vue"), // 加载路径
//   loadingComponent: LoadingComponent, // loading组件
//   errorComponent: ErrorComponent, // 错误组件
//   delay: 100, // default: 200 // 加载时间
//   timeout: 3000, // default: Infinity // 超时时间
//   suspensible: false, // default: true
//   onError(error, retry, fail, attempts) { // 加载错误函数
//     if (error.message.match(/fetch/) && attempts <= 3) {
//       retry()
//     } else {
//       fail()
//     }
//   }
// })

export default {
  components: {
    Vuex
  }
};
</script>
