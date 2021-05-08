<template>
  <!-- 只有一个slot，可以不用template，直接写在组件上 -->
  <!-- <slot-component v-slot>
    default
  </slot-component> -->
  <!-- 多个slot(具名插槽) -->
  <slot-component>
    <template v-slot>
      <div>default: {{ count }}</div>
    </template>
    <template v-slot:header>
      <div>header</div>
    </template>
    <!-- 作用域插槽 -->
    <template v-slot:footer="{ slotMsg }">
      <div>footer: {{ slotMsg }}</div>
    </template>
  </slot-component>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import SlotComponent from './slotComponent.vue';

interface State {
  count: number;
}

export default defineComponent({
  components: {
    SlotComponent
  },
  setup() {
    const state = reactive<State>({
      count: 1
    });

    return {
      ...toRefs<State>(state)
    };
  }
});
</script>
