import { State } from '@store/state';

export interface Getters<T> {
  [key: string]: (state: T) => any;
}

const getters: Getters<State> = {
  msg: state => state.msg,
  token: state => state.token,
  holdIndex: state => state.holdIndex
};

export default getters;
