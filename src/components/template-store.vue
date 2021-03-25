<template>
  <p>字符串模板访问 state</p>
  <p>Vuex在use中引入后，全局属性将多出一个$store的属性，</p>
  <p>在ComponentAPI中，this并不能访问，但字符串模板可以访问。</p>
  <p>{{ $store.state.count }}</p>
  <p>{{ $store.getters.msg }}</p>
</template>
