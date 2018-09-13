function data (state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO':
    const list = state.data.categories[1].playlist;
    const result = list.filter(
        item => item.author
                  .includes(action.payload.query)
      )
      return {
        ...state,
        search: result
      };
    default:
      return state;
  }
}

export default data;