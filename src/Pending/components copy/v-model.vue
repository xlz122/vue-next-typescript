<template>
  <div>
    <p>一个组件支持多个v-model</p>
    <v-model-component
      v-model:title="pageTitle"
      v-model:content="pageContent"
      @update-title="updateTitle"
      @update-content="updateContent"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import VModelComponent from './v-model-component.vue';

export default {
  components: {
    VModelComponent
  },
  setup() {
    const pageTitle = ref('消息1');
    const pageContent = ref('消息2');
    // 子组件传递到父组件的事件
    function updateTitle(value) {
      console.log(value);
    }
    function updateContent(value) {
      console.log(value);
    }
    return {
      pageTitle,
      pageContent,
      updateTitle,
      updateContent
    };
  }
};
</script>
