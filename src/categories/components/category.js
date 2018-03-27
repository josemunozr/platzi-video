import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category (props) {
  const { description, title, playlist, handleOpenModal } = props;

  return (
    <div className='Category'>
      <p className='Category-description'>{description}</p>
      <h2 className='Category-title'>{title}</h2>
      <Playlist
        handleOpenModal={handleOpenModal}
        playlist={playlist}
      />
    </div>
  );
}

export default Category;
