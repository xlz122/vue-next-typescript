<!-- vue 2.0 -->
<!--
<template>
  <template v-for="(item, index) in list">
    <div :key="index">{{ item }}</div>
  </template>
</template>
-->

<!-- vue 3.0 -->
<template>
  <p>vue 2.0 template上不可写key</p>
  <p>vue 3.0 key需要写在tempalte</p>
  <template v-for="(item, index) in list" :key="index">
    <div>{{ item }}</div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const list = [1, 2, 3];
    return {
      list
    };
  }
});
</script>
