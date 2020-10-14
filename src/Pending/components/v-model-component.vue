<template>
  <div>
    <input type="text" :value="title" @input="titleChange" />
    <input type="text" :value="content" @input="contentChange" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    function titleChange(e) {
      ctx.emit('update-title', e.target.value);
    }
    function contentChange(e) {
      ctx.emit('update-content', e.target.value);
    }
    return {
      titleChange,
      contentChange
    };
  }
};
</script>
