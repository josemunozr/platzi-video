import React from 'react';
import VolumenOn from '../../icons/components/volumen';
import VolumenOff from '../../icons/components/volume-off';
import './volumen.css'
const Volumen = props => (
  <button className="Volumen">
    <div onClick={props.handleToggleMute}>
      {
        props.volume > 0 ?
          <VolumenOn 
            color="white"
            size={25}
          />
        :
          <VolumenOff 
            color="white"
            size={25}
          />
      }
    </div>
    <div className="Volumen-range">
      <input
        type="range"
        min={0}
        max={1}
        step={.05}
        onChange={props.handleVolumenChange}
        value={props.volume}
      />
    </div>
  </button>
);

export default Volumen;