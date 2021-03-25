<template>
  <p>type interface区别</p>
  <p>总结：</p>
  <p>一般来说，能用interface实现，就用interface，如果不能就用type</p>
  <p>项目需统一，要么用interface，要么用type</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// 相同点
// 1. 都可以描述一个对象或者函数

// 定义对象
interface A {
  msg: string;
}

type B = {
  msg: string;
};

// 定义函数
interface C {
  (msg: string): void;
}

type D = (msg: string) => void;

// 2.都允许扩展
interface E {
  msg: string;
}

interface F extends E {
  count: number;
}

type G = { msg: string };

type H = G & { state: unknown };

interface I extends G {
  count: number;
}

type J = E & { count: number };

// 3.联合类型，可以定义不确定的数据类型，可能为字符串，可能为对象
type K = string | { value: string };

interface L {
  sex: string | { value: string };
}

// 默认值
type Q<T = any> = T | ((msg: T) => void);

interface W<T> {
  sex: T | ((msg: T) => string);
}

const w: W<string> = {
  sex: ''
};

// 4.泛型
type callback<T> = (msg: T) => void;

interface callBack<T> {
  (msg: T): void;
}

function fn<T>(age: T): T {
  return age;
}
fn<number>(12);

type PO<T> = (msg: T) => void;

const i: PO<string> = (msg: string) => {};

// 不同点
// 1. type可以声明基础类型
type Name = string;
type Age = number | string;

// 2.interface 会同名合并，type不可同名
interface S {
  msg: string;
}
interface S {
  count: number;
}
// 结果： S { msg: string; count: number; }

type M = { msg: string };
// type M = { count: number; }
// 结果： 同名报错

// 数组项定义
interface R {
  [index: string]: string;
}

interface U<T = any> {
  [index: number]: T;
}

// 枚举
// 加上const 不支持 value 反向查找,例： ActiveType[1] // 查找会报错
const enum ActiveType {
  active = 1,
  unActive = 2
}

function inActive(type: ActiveType) {}
inActive(ActiveType.active);
inActive(ActiveType.active);

export default defineComponent({
  setup() {
    // 定义对象
    const a: A = {
      msg: ''
    };
    const b: B = {
      msg: ''
    };

    // 定义函数
    const c: Function = function (msg: string) {};
    const d: Function = function (msg: string) {};

    // 扩展
    const f: F = {
      msg: '',
      count: 0
    };

    // type & type
    const h: H = {
      msg: '',
      state: {}
    };

    // interface extends type
    const i: I = {
      msg: '',
      count: 0
    };

    // type & interface
    const j: J = {
      msg: '',
      count: 0
    };

    // 泛型
    const callback: callback<string> = function (msg: string): void {};

    // interface
    const s: S = {
      msg: '',
      count: 0
    };
  }
});
</script>
