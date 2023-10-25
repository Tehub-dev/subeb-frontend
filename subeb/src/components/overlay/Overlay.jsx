import React from 'react';

import "./overlay.css";

const Overlay = ({display, overlayWidth, overlayMargin}) => {
  return (
    <div className={display ? 'overlay' : ''} style={{width: overlayWidth, margin: overlayMargin}}></div>
  )
}

export default Overlay