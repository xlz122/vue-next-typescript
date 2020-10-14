<template>
  <div>
    <p>内容转移，用于第三方ui弹框</p>
    <p @click="modelShow">弹框显示</p>
    <teleport v-if="model" to="#model">
      <div>我是弹框</div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const model = ref(false);

    function modelShow() {
      model.value = !model.value;
    }
    return {
      model,
      modelShow
    };
  }
};
</script>
