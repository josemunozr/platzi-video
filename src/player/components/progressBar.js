import React from 'react';
import './progressBar.css'
const ProgressBar = (props) => (
  <div className="ProgressBar">
    <input 
      type="range"
      min={0}
      max={props.max}
      value={props.value}
      onChange={props.handleProgressBar}
    />
  </div>
);

export default ProgressBar;