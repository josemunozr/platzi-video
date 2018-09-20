import schema from '../schemas/index';
import { fromJS } from 'immutable';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  myPlaylist: schema.result.myPlaylist,
  friendPlaylist: schema.result.friendPlaylist,
  search: '',
})

const data = (state=initialState, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO':
    // let results = []
    // if (action.payload.query) {
    //   const list = state.data.categories[1].playlist;
    //   results = list.filter(
    //       item => String(item.author).toLowerCase()
    //                 .includes(String(action.payload.query).toLowerCase())
    //     )
    // }
    //   return {
    //     ...state,
    //     search: results
    //   };
    return state.set('search', action.payload.query)
    default:
      return state;
  }
}

export default data;