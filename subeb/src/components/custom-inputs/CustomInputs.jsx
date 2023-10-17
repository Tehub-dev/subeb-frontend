import React from 'react';

import "./custom-inputs.css";

export const Input = ({inputLabel, inputPlaceholder, imgLeftAlt, imgleft, imgRight, imgRightAlt, icon, password}) => {
  return (
    <div className='custom-input'>
        <label>{inputLabel}</label>
        <div className="custom-input_input">
            <img src={imgleft} alt={imgLeftAlt} />
            <input type={password ? "password" : "text"} placeholder={inputPlaceholder} />
            <img src={imgRight} alt={imgRightAlt} />
            {icon}
        </div>
    </div>
  )
}
