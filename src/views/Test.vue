<template>
  <p id="p" ref="p">{{ foo }}</p>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  ComponentInternalInstance,
  ref
} from 'vue';

interface Obj {
  name?: string;
}

export default defineComponent({
  setup() {
    const {
      proxy
    }: { proxy: unknown } = getCurrentInstance() as ComponentInternalInstance;
    const foo = (proxy as { foo: string }).foo;
    // const foo = (<{ foo: string }>proxy).foo;
    // const foo = (proxy as {[k: string]: unknown}).foo;

    // 动态添加对象属性
    // const obj: { [k: string]: any } = {};
    // const obj: Record<string, any> = {};
    const obj: Obj = {};
    obj.name = 'xxx';

    // ref定义
    const p = ref<HTMLElement | null>(null);

    return {
      foo,
      p
    };
  },
  mounted() {
    // 原生js
    const p = document.getElementById('p') as HTMLElement;
    console.log(p);
    // ref
    (this.$refs.p as HTMLElement).style.color = 'red';

    // 查看shims-vue.d.ts文件
    window.g = 'fdas';
  }
});
</script>
