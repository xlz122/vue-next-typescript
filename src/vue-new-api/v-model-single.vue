<template>
  <p>单个v-model使用</p>
  <v-model-component-single v-model="title" />
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import VModelComponentSingle from './v-model-component-single.vue';

export default defineComponent({
  components: {
    VModelComponentSingle
  },
  setup() {
    const title = ref<string>('消息1');

    watch(
      () => title.value,
      (cur: string) => {
        console.log(cur);
      }
    );

    return {
      title
    };
  }
});
</script>
