import api from '../api.json';
import { normalize, schema } from 'normalizr';

const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({
    ...value,
    category: parent.id
  })
});

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
});

const myPlaylist = new schema.Entity('myPlaylist');

const friendPlaylist = new schema.Entity('friendPlaylist');

const data = {
  categories: new schema.Array(category),
  myPlaylist: new schema.Array(myPlaylist),
  friendPlaylist: new schema.Array(friendPlaylist)
}

const normalizedData = normalize(api,data); 

export default normalizedData;