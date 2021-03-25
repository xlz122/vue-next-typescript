<template>
  <p>ts中的props</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ({
    msg: String
  } as unknown) as undefined,
  setup(props: { msg: string }) {}
});
</script>
