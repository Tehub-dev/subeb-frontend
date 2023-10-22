import React from 'react';
import logo from "../../assets/images/logo.png";

import "./logo-div.css";

const LogoDiv = () => {

    const mobileWindow = window.innerWidth;

    const logoImg = mobileWindow > 900 ? [logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo, logo] : [logo, logo, logo, logo, logo];



  return (
    <div className='logo-div'>
        {logoImg.map((item, idx) => {
            return (
                <img key={idx} src={item} alt="logo" />
            )
        })}
    </div>
  )
}

export default LogoDiv