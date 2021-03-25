import { State } from '@store/state';

interface Mutation<T> {
  (state: T, payload: any): void;
}
interface Mutations<T> {
  [key: string]: Mutation<T>;
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
