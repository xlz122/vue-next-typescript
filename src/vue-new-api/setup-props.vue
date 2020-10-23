<template>
  <p>setup语法糖中，props使用</p>
  <p>{{ msg }}</p>
</template>

<script lang="ts" setup="props">
// declare props using TypeScript syntax
// this will be auto compiled into runtime equivalent!
declare const props: {
  msg: string
}
</script>
