<template>
  <p>一个组件支持多个v-model</p>
  <VModelComponent
    v-model:title="pageTitle"
    v-model:content="pageContent"
    @updateTitle="updateTitle"
    @updateContent="updateContent"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VModelComponent from './v-model-component.vue';

export default defineComponent({
  components: {
    VModelComponent
  },
  setup() {
    const pageTitle = ref<string>('消息1');
    const pageContent = ref<string>('消息2');

    // 子组件传递到父组件的事件
    function updateTitle(value: string): void {
      console.log(value);
    }

    function updateContent(value: string): void {
      console.log(value);
    }
    return {
      pageTitle,
      pageContent,
      updateTitle,
      updateContent
    };
  }
});
</script>
