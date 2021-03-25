<template>
  <p>获取html字符串的文本</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const html = '<span class="red">hello world</span> <span>hello xxx</span>';

    function decoder(html: string): string | null {
      const decoder = document.createElement('div') as HTMLElement;
      // 通过设置innerHTML把字符串转换成对应的HTML元素
      decoder.innerHTML = html;
      // 通过textContent属性来获取文本内容
      return decoder.textContent;
    }

    decoder(html);
  }
});
</script>
