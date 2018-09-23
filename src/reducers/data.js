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
    case 'SEARCH_ENTITIES':
    return state.set('search', action.payload.query)
    default:
      return state;
  }
}

export default data;