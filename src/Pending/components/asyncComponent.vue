<template>
  <div>
    <p>异步组件</p>
    <vuex />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const Vuex = defineAsyncComponent(() => import('./vuex'));

// options(选项)
// const AsyncFooWithOptions = defineAsyncComponent({
//   loader: () => import("./Foo.vue"),
//   loadingComponent: LoadingComponent,
//   errorComponent: ErrorComponent,
//   delay: 100, // default: 200
//   timeout: 3000, // default: Infinity
//   suspensible: false, // default: true
//   onError(error, retry, fail, attempts) {
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
