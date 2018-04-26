import React from 'react';
import './avatar.css';
const Avatar = props => (
  <div className="Avatar">
    <img className="Avatar-image" src={props.src}/>
    <span>{props.name}</span>
  </div>
);

export default Avatar;