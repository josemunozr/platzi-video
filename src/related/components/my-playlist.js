import React from 'react';
import './my-playlist.css';

const MyPlayList = props => (
  <div className="MyPlaylist">
    <p>Mi Playlist</p>
    <ul className="list">
      {
        props.myPlaylist.map(playlist => {
          return (
            <li
              className="item"
              key={playlist.get('id')}
            >
              <a> <span className="item-number">{playlist.get('id')}</span> {playlist.get('title')}</a>
            </li>
          )
        })
      }
    </ul>
  </div>
);

export default MyPlayList;