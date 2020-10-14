import { State } from '@store/state';
import { Getters } from '@store/getters';

export interface Store {
  state: State;
  getters: Getters<State>;
  // 箭头函数定义
  commit: (type: string, payload: any) => void;
  // 普通函数定义
  dispatch(type: string, payload: any): void;
}

interface Action<Store> {
  (state: Store, payload: any): void;
}
interface Actions<Store> {
  [key: string]: Action<Store>;
}

const actions: Actions<Store> = {
  setMsg({ commit }, msg: string) {
    commit('setMsg', msg);
  }
};

export default actions;
