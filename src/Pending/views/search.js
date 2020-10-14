import { reactive, toRefs } from 'vue';

export default function searchList(list) {
  const state = reactive({
    list: list,
    searchValue: '',
    showList: list
  });

  const onSearch = function() {
    state.showList = [];
    state.list.map(item => {
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
