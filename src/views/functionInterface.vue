<template>
  <p>
    如果一个变量的类型是变化的（比如来自 JS
    程序的对象，随时都有可能多一个属性，甚至变成完全不同的类型），就用 any。
  </p>
  <p>
    如果一个变量的类型是固定的，但是目前还不能确定或不想确定，就用 unknown。
    要用这个变量的时候就断言一下吧，不能像 any 那样糊里糊涂地用。
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // let a: unknown = 1;
    // let b = {
    //   name: unknown;
    // }
    // (b as { name: string }).name = '3';
    // (b as { name: number }).name = 4;
    // console.log((a as { name: string }).name);
    // 类型收缩
    type getAnimal = () => unknown;

    function getAnimal(): string {
      return 'x';
    }

    const dog = getAnimal();

    if (typeof dog === 'string') {
      console.log(dog.toLowerCase());
    }

    // 函数参数解构类型断言
    interface User {
      firstName: string;
      lastName?: string;
    }

    const fullName = ({ firstName, lastName }: User) => {
      if (lastName === undefined) {
        return firstName;
      }

      return `${lastName}, ${firstName}`;
    };
    console.log(fullName);
  }
});
</script>
