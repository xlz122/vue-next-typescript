<template>
  <div>组件scoped改全局样式</div>
</template>

<script>
export default {
  setup() {
    async function fn() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('第一个参数', '第二个参数');
        }, 3000);
      });
    }
    fn().then((a, b) => {
      console.log(a);
      console.log(b);
    });
  }
};
</script>

<style lang="less" scoped>
::v-global(#app) {
  margin-top: 20px;
}
</style>
