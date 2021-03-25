<template>
  <p>一个组件支持多个v-model</p>
  <v-model-component v-model:title="pageTitle" v-model:content="pageContent" />
  <div>{{ pageTitle }}</div>
  <div>{{ pageContent }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import VModelComponent from './v-model-component.vue';

export default defineComponent({
  components: {
    VModelComponent
  },
  setup() {
    const pageTitle = ref<string>('消息1');
    const pageContent = ref<string>('消息2');

    watch(
      () => pageTitle.value,
      (cur, old) => {
        console.log(cur);
      }
    );

    watch(
      () => pageContent.value,
      (cur, old) => {
        console.log(cur);
      }
    );

    return {
      pageTitle,
      pageContent
    };
  }
});
</script>
