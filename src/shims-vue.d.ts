/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

// 解决.vue文件导入ts文件时，使用路径别名路径找不到问题
declare module '*.ts';
