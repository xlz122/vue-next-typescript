<template>
  <p class="text">测试css和less全局变量使用上的不同</p>
  <p>css 不需要单独引入文件</p>
  <p>less 需要单独引入文件</p>
</template>

<style lang="less" scoped>
@import '../index.less';

.text {
  width: @sidebar;
  color: var(--Color);
}
</style>
