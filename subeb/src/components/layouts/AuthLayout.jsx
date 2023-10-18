import React, { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import elipse from "../../assets/images/elipsewhite.png";
import loginpic from "../../assets/images/auth-pic.png";
import "./layout.css";

const AuthLayout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);


  return (
    <div className='auth-layout'>
        <div className="outlet-space">
            <div className="outlet-space_div" style={{margin: pathname === "/personaldetails" || pathname === "/schooldetails" ? "20px auto 0px 100px" : undefined}}>
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