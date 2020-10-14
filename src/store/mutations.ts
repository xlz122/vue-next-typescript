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
  }
};

export default mutations;
