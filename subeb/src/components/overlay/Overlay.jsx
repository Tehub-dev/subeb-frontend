import React from 'react';

import "./overlay.css";

const Overlay = ({display}) => {
  return (
    <div className={display ? 'overlay' : ''}></div>
  )
}

export default Overlay