<template>
  <p>内容转移，用于第三方ui弹框</p>
  <p @click="modelShow">弹框显示</p>
  <p>teleport.disabled控制teleport是否显示</p>
  <teleport v-if="model" to="#model" disabled>
    <div>我是弹框内容</div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const model = ref<boolean>(false);

    function modelShow(): void {
      model.value = !model.value;
    }
    return {
      model,
      modelShow
    };
  }
});
</script>
