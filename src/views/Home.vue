<template>
  <div ref="myRef">获取单个DOM元素</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const myRef = ref<HTMLElement>();

    onMounted(() => {
      console.dir(myRef.value);
    });
    const count = ref(0);
    return {
      count,
      myRef
    };
  },
  data() {
    return {
      // count: 2,
      count2: 2
    };
  },
  mounted() {
    console.log(this.count);
    console.log(this.count2);
  }
});
</script>
