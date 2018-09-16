import React from 'react';
// import Media from './media';
import MediaContainers from '../containers/media';

import './playlist.css';

function Playlist (props) {
  const { playlist, handleOpenModal } = props;
  return (
    <div className='Playlist'>
      {
        playlist.map((mediaId) => {
          return <MediaContainers openModal={handleOpenModal} id={mediaId} key={mediaId} />;
        })
      }
    </div>
  );
}

export default Playlist;
