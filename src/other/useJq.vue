<template>
  <p class="text">jq简单实现</p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import $ from './jq.ts';

export default defineComponent({
  setup() {
    onMounted(() => {
      $('.text').click(() => {
        console.log('点击了');
      })
    });
  }
});
</script>
