function data (state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO':
    let results = []
    if (action.payload.query) {
      const list = state.data.categories[1].playlist;
      results = list.filter(
          item => String(item.author).toLowerCase()
                    .includes(String(action.payload.query).toLowerCase())
        )
    }
      return {
        ...state,
        search: results
      };
    default:
      return state;
  }
}

export default data;