import React from 'react';

import "./auth-head.css";
import logo from "../../assets/images/logo.png";
import Back from '../custom-inputs/Back';
import { Link } from 'react-router-dom';

const AuthHead = ({title, text}) => {
  return (
    <div className='auth'>
        <Back /> 
        <div className="auth-head">
            <h3><Link to={"/"} style={{textDecoration: "none"}}><img src={logo} alt="logo" /></Link> School Management <br /> System</h3>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default AuthHead