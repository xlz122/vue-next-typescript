<template>
  <p>keyof 与 Object.keys 略有相似，只不过 keyof 取 interface 的键。</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // keyof 与 Object.keys 略有相似，只不过 keyof 取 interface 的键。
    interface persion {
      age: number;
      text: string;
    }

    // type keys = "age" | "text"
    type keys = keyof persion;
  }
});
</script>
