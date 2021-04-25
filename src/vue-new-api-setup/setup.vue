<template>
  <p>setup新增新特性</p>
  <p>变量不需要export，模板中可以直接使用，原先需要导出，改版后不需要</p>
  <span>{{ test }}</span>
  <p @click="changeMsg">改变msg</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const test = ref<string>('消息');

function changeMsg(): void {
  test.value = '新消息';
}
</script>

<!-- 旧版本 -->
<!--
<template>
  <p>setup</p>
  <p>变量和方法需要导出(export)</p>
  <span>{{ test }}</span>
  <p @click="changeMsg">改变msg</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { default as Test } from './Test.vue';

export const test = ref<string>('消息');

export function changeMsg(): void {
  test.value = '新消息';
}
</script>
-->
