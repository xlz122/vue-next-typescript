/*
 * @Author: your name
 * @Date: 2020-10-13 14:33:42
 * @LastEditTime: 2020-10-15 16:36:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-next-ts\src\store\getters.ts
 */
import { State } from '@store/state';

interface Getter<T> {
  (state: T): any;
}

export interface Getters<T> {
  [key: string]: Getter<T>;
}

const getters: Getters<State> = {
  msg: state => state.msg,
  token: state => state.token
};

export default getters;
