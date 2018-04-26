import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';
import MyPlayList from '../components/my-playlist';
import FriendPlayList from '../components/friend-playlist';
function Related(props) {
  return (
    <div className="Related">
      <img src={logo} width={250}/>
      <MyPlayList
        myPlaylist={props.myPlaylist}
      />
      <FriendPlayList
        friendPlaylist={props.friendPlaylist}
      />
    </div>
  )
}

export default Related;