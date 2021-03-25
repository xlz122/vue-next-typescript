<template>
  <p>await在setup中使用</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref<unknown>({});
(async () => {
  data.value = await axios.get(
    'https://api.apiopen.top/getSongPoetry?page=1&count=20'
  );
  console.log(data.value);
})();
</script>

<!--
  
  等价以下写法

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const data = ref<unknown>({});
    (async () => {
      data.value = await axios.get(
        'https://api.apiopen.top/getSongPoetry?page=1&count=20'
      );
      console.log(data.value);
    })();
    return { data };
  }
});
</script>

-->
