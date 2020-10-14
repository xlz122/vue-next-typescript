import { State } from '@store/state';

interface Getter<T> {
  (state: T): any;
}

export interface Getters<T> {
  [key: string]: Getter<T>;
}

const getters: Getters<State> = {
  msg: state => state.msg
};

export default getters;
