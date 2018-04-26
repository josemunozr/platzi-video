import React from 'react';
import './my-playlist.css';
const MyPlayList = props => (
  <div className="MyPlaylist">
    <p>My PlayList</p>
    <ul className="list">
      {
        props.myPlaylist.map(playlist => {
          return (
            <li
              className="item"
              key={playlist.id}
            >
              <a> <span className="item-number">{playlist.id}</span> {playlist.title}</a>
            </li>
          )
        })
      }
    </ul>
  </div>
);

export default MyPlayList;