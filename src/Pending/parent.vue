<template>
  <div>
    <p>parent父子传值</p>
    <child :msg="msg" @emitfn="emitfn" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Child from './child.vue';

export default {
  components: {
    Child
  },
  setup() {
    const msg = ref('父传子，msg');

    function emitfn(data) {
      console.log(data);
    }

    return {
      msg,
      emitfn
    };
  }
};
</script>
