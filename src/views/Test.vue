<template>
  <p></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function fn() {
      return new Promise(resolve => {
        resolve('回调');
      });
    }
    fn().then(res => {
      console.log(res);
    });
  }
});
</script>
