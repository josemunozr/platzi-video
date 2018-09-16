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
              key={user.id}
            >
            <Avatar 
              src={user.avatar}
              name={user.name}
            />
            </li>
          )
        })
      }
    </ul>
  </div>
);

export default FriendPlayList;