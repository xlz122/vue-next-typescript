<template>
  <p>if else优化</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type GetStatus = (status: string) => string;

export default defineComponent({
  setup() {
    const status = 1;
    // 第一种方法：提前return
    if (status === 1) {
      // 代码块
    } else if (status === 2) {
      // 代码块
    } else if (status === 3) {
      // 代码块
    } else {
      // 代码块
    }

    if (status === 1) {
      // 代码块
      return false;
    }
    if (status === 2) {
      // 代码块
      return false;
    }
    if (status === 3) {
      // 代码块
      return false;
    }

    // else  代码块

    // 第二种方法：
    const statusStr = {
      '1': '待付款',
      '2': '待发货',
      '3': '已发货',
      '4': '交易完成',
      '5': '交易关闭',
      default: ''
    };
    
    const getStatus: GetStatus = status => {
      return (statusStr as any)[status] || statusStr['default'];
    };
  }
});
</script>
