import React, { useState } from 'react';

import "./login.css";
import { Input } from '../custom-inputs/CustomInputs';
import { Eye, EyeSlash } from 'iconsax-react';
import AuthHead from '../auth-head/AuthHead';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const clickEyeShow = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div className='login'>
        <AuthHead title={"Login"} text={"Login to the Ondo School Management System"} />
        <form className="login-form">
            <Input inputLabel={"Email"} inputPlaceholder={"johndoe@example.com"} />
            <Input inputLabel={"Password"} inputPlaceholder={"password"} icon={showPassword ? <Eye onClick={clickEyeShow} style={{cursor: 'pointer'}} /> : <EyeSlash onClick={clickEyeShow} style={{cursor: 'pointer'}} />} password={showPassword ? false : true} />
            <div className="form-btn">
                <button className="btn">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login