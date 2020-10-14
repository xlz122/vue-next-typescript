<template>
  <p>vue 2.0 只能写一个 v-model，如果要写多个，需要借助 .sync 修饰符</p>
  <p>vue 3.0 通过 ：不同命名的方式，给定多个 v-model</p>
  <child v-model: title="第一个model" v-model: content="第二个model" />
</template>
