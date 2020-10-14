<template>
  <div>
    <p>child ctx.emit子传父</p>
    <p>{{ props.msg }}</p>
    <button @click="fnAfferent">函数传参</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '默认值'
    }
  },
  setup(props, ctx) {
    const emitToParent = '子组件传递给父组件';

    function fnAfferent() {
      // 子传父
      // 注意：传递方法名需要以 驼峰命名 方式命名
      ctx.emit('emitfn', emitToParent);
    }

    return {
      props,
      fnAfferent
    };
  }
};
</script>
