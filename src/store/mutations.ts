import { State } from '@store/state';

interface Mutations<T> {
  [key: string]: (state: T, ...rest: any[]) => void;
}

const mutations: Mutations<State> = {
  setMsg(state, msg: string) {
    state.msg = msg;
  },
  setToken(state, token: string) {
    state.token = token;
  },
  setHoldIndex(state, index: number) {
    state.holdIndex = index;
  }
};

export default mutations;
