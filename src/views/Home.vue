<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <div class="title">
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div>
    <button
      v-for="(item, index) in girls"
      :key="index"
      @click="selectGirl(index)"
    >
      {{ index }} : {{ item }}
    </button>
  </div>
  <div>你选择了【{{ selectGirlVal }}】为你服务</div>
</template>

<script lang="ts">
// import { defineComponent, reactive, ref, Ref } from 'vue';
import { defineComponent, reactive, toRefs } from 'vue';

interface State {
  girls: string[];
  selectGirlVal: string;
}

export default defineComponent({
  name: 'Home',
  setup() {
    const marginBottom = '15px';

    // const girls: Ref<string[]> = ref<string[]>(['大脚', '刘英', '晓红']);
    // const selectGirlVal: Ref<string> = ref<string>(girls.value[0]);
    // const selectGirl = (index: number): void => {
    //   selectGirlVal.value = girls.value[index];
    // };
    // return {
    //   marginBottom,
    //   girls,
    //   selectGirlVal,
    //   selectGirl
    // };
    const state = reactive<State>({
      girls: ['大脚', '刘英', '晓红'],
      selectGirlVal: ''
    });

    const selectGirl = (index: number): void => {
      state.selectGirlVal = state.girls[index];
    };
    return {
      marginBottom,
      ...toRefs<State>(state),
      selectGirl
    };
  }
});
</script>

<style lang="less" vars="{ marginBottom }" scoped>
.title {
  margin-bottom: var(--marginBottom);
}
</style>
