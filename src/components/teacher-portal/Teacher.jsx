import React from 'react'
import AuthHead from '../auth-head/AuthHead';

import "./teacher.css";
import { Link } from 'react-router-dom';

const Teacher = () => {
  return (
    <div>
        <AuthHead title={"Teacher Login/Register"} text={"Login/Register as a teacher on ondo state school management system"} />
        <div className="teacher-login_register">
            <Link to={"/smslogin"} style={{textDecoration: "none"}}><h3 className="login">Login</h3></Link>
            <Link to={"/personaldetails"} style={{textDecoration: "none"}}><h3 className="register">Register</h3></Link>
        </div>
    </div>
  )
}

export default Teacher