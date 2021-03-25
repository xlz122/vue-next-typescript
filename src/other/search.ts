import { reactive, toRefs } from 'vue';

interface List {
  id: number;
  value: string;
}

interface State<T> {
  list: T;
  searchValue: string;
  showList: T;
}

export default function searchList(list: List[]) {
  const state = reactive<State<List[]>>({
    list: list,
    searchValue: '',
    showList: list
  });

  const onSearch = function (): void {
    state.showList = [];
    state.list.map((item) => {
      if (item.value.includes(state.searchValue)) {
        state.showList.push(item);
      }
    });
  };

  return {
    ...toRefs(state),
    onSearch
  };
}
