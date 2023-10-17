import React from 'react';

import { Outlet} from 'react-router-dom';
import elipse from "../../assets/images/elipsewhite.png";
import loginpic from "../../assets/images/auth-pic.png";
import "./layout.css";

const AuthLayout = () => {
  return (
    <div className='auth-layout'>
        <div className="outlet-space">
            <div className="outlet-space_div">
                <Outlet />
            </div>
        </div>
        <div className="auth-style">
            <img className='elipse' src={elipse} alt="ellipse" />
            <img className='auth-pic' src={loginpic} alt="pic" />
        </div>
    </div>
  )
}

export default AuthLayout