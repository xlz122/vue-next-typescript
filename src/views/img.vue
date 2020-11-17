<template>
  <div class="body" @mousemove="getMouse">
    <img
      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3835734796,1631195054&fm=26&gp=0.jpg"
      alt=""
    />
    <div class="fd" ref="fdImg">
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3835734796,1631195054&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import bg from "@/assets/images/timg.jpg";

export default {
  setup() {
    const fdImg = ref(null);
    const top = ref(0);
    const right = ref(0);
    const getMouse = e => {
      let left = (e.offsetX * 2 - 150) * -1;
      console.log(left);
      if (left < -300) {
        left = -300;
      } else if (left > 0) {
        left = 0;
      }
      let topNum = (e.offsetY * 2 - 150) * -1;
      if (topNum < -428) {
        topNum = -422;
      } else if (topNum > 0) {
        topNum = 0;
      }
      right.value = `${left}px`;
      top.value = `${topNum}px`;
      // console.log(topNum, left);
    };
    return {
      // bg,
      getMouse,
      fdImg,
      top,
      right
    };
  }
};
</script>

<style lang="less" scoped vars="{ top, right }">
.body {
  width: 300px;
  height: 300px;
  position: relative;
  img {
    width: 100%;
    height: 188px;
    overflow: hidden;
    cursor: pointer;
  }
  .fd {
    position: absolute;
    top: 0;
    left: 300px;
    display: none;
  }
  &:hover {
    .fd {
      width: 300px;
      height: 300px;
      display: block;
      overflow: hidden;
      img {
        width: 600px;
        height: 600px;
        position: absolute;
        top: var(--top);
        left: var(--right);
      }
    }
  }
}
</style>
