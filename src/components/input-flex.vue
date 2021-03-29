<template>
  <p>input 自适应</p>
  <div class="content">
    <div class="left"></div>
    <input class="input" type="text" />
    <div class="right"></div>
  </div>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  width: 500px;
  border: 1px solid red;
  .left {
    display: inline-block;
    width: 50px;
  }
  // input有默认宽度，所以需要给一个宽度0 width: 0;
  .input {
    flex: 1;
    width: 0;
  }
  .right {
    display: inline-block;
    width: 100px;
  }
}
</style>
