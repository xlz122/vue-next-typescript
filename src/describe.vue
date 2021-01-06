<!-- eslint-disable -->
<template>
  <div>
    import * as obj from './obj.ts';
    * as obj 的意思是 将obj.ts里面的所有导出组合成一个对象，赋值给obj变量上
    
    功能性描述
    shims-vue.d.ts
      解决.vue文件导入ts文件时，使用路径别名路径找不到问题
      declare module "*.ts";
  </div>
</template>