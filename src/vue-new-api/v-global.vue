<template>
  <div>组件scoped改全局样式</div>
</template>

<style lang="less" scoped>
::v-global(#app) {
  margin-top: 20px;
}
</style>
