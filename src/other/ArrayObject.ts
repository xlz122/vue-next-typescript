// 数组对象的类型定义
interface List {
  title: string;
  count: number;
}

interface State<T> {
  title: string;
  list: T[];
}

export const list: State<List>[] = [
  {
    title: '',
    list: [
      {
        title: '',
        count: 0
      }
    ]
  }
];
