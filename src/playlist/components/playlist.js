import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist (props) {
  const { playlist, handleOpenModal } = props;
  return (
    <div className='Playlist'>
      {
        playlist.map((item) => {
          return <Media handleClick={handleOpenModal} {...item} key={item.id} />;
        })
      }
    </div>
  );
}

export default Playlist;
