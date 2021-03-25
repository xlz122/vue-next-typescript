export interface State {
  msg: string;
  token: string;
  holdIndex: number;
}

const state: State = {
  msg: '消息',
  token: '旧token',
  holdIndex: 0
};

export default state;
