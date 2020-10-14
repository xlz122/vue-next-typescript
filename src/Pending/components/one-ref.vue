<template>
  <div :ref="setRef">获取ref</div>
</template>

<script>
export default {
  setup() {
    let itemRefs = '';

    const setRef = el => {
      itemRefs = el;
    }

    setTimeout(() => {
      console.dir(itemRefs);
    }, 1000);
    return {
      setRef
    };
  }
};
</script>
