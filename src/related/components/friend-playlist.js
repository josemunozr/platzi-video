import React from 'react';
import Avatar from '../../widgets/components/avatar';
import './friend-playlist.css';
const FriendPlayList = props => (
  <div className="FriendPlayList">
    <p>Playlist de amigos</p>
    <ul className="list">
      {
        props.friendPlaylist.map(user => {
          return (
            <li
              className="item"
              key={user.get('id')}
            >
            <Avatar 
              src={user.get('avatar')}
              name={user.get('name')}
            />
            </li>
          )
        })
      }
    </ul>
  </div>
);

export default FriendPlayList;