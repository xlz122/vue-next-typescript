<template>
  <div class="home">
    <div class="content">
      <div>
        <img class="img" v-img-lazy="picture" alt="" />
      </div>
      <div>
        <img class="img" v-img-lazy="picture1" alt="" />
      </div>
      <div>
        <img class="img" v-img-lazy="picture2" alt="" />
      </div>
      <div>
        <img class="img" v-img-lazy="picture3" alt="" />
      </div>
      <div>
        <img class="img" v-img-lazy="picture4" alt="" />
      </div>
      <div>
        <img class="img" v-img-lazy="picture5" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const picture =
      'https://img0.baidu.com/it/u=793102324,3683174178&fm=11&fmt=auto&gp=0.jpg';
    const picture1 =
      'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3026939796,485761977&fm=26&gp=0.jpg';
    const picture2 =
      'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=11918710,2392753884&fm=26&gp=0.jpg';
    const picture3 =
      'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1376319214,2872501189&fm=26&gp=0.jpg';
    const picture4 =
      'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2859018036,4025866468&fm=26&gp=0.jpgg';
    const picture5 =
      'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3070601450,473916151&fm=26&gp=0.jpg';
    return {
      picture,
      picture1,
      picture2,
      picture3,
      picture4,
      picture5
    };
  }
});
</script>

<style lang="less" scoped>
.home {
  height: 800px;
  .content {
    .img {
      width: 150px;
      height: 150px;
      border: 1px solid red;
    }
  }
}
</style>
