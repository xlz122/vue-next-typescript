<template>
  <p>单文件组件 style scoped 现在可以包含全局规则或只针对插槽内容的规则：</p>
  <p>带有scoped属性的style 不再只能作用域当前单文件组件</p>
  <p>通过深度选择器、插槽选择器、全局选择器拥有了更改其他范围样式的能力</p>
</template>

<style lang="less" scoped>
/* deep selectors */
::v-deep(.foo) {}
/* shorthand */
:deep(.foo) {}

/* targeting slot content */
::v-slotted(.foo) {}
/* shorthand */
:slotted(.foo) {}

/* one-off global rule */
::v-global(.foo) {}
/* shorthand */
:global(.foo) {}
</style>
