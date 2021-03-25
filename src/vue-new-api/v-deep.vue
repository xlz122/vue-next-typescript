<template>
  <p>新的css深度选择器, 传入组件的class类名</p>
  <Components class="v-deep" />
</template>

<style lang="less" scoped>
::v-deep(.v-deep) {
  color: pink;
  .deep {
    color: red;
  }
}
// 简写方式
// :deep(.foo) {}
// :slotted(.foo) {}
// :global(.foo) {}
</style>
