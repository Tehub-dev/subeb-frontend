import React from 'react';

import "./teacher.css";
import AuthHead from '../auth-head/AuthHead';
import { Input } from '../custom-inputs/CustomInputs';
import { Link } from 'react-router-dom';

const TeacherDetails = () => {

    const inputChange = (e) => {
        // console.log(e.target.value);
    };

  return (
    <div>
        <AuthHead title={"Personal Details"} text={"Register as a teacher on ondo state school management system"} /> 
        <form className="teacher-form">
            <Input inputLabel={"First Name"} inputPlaceholder={"John"} formChange={inputChange} />
            <Input inputLabel={"Last Name"} inputPlaceholder={"Doe"}  />
            <Input inputLabel={"Phone Number"} inputPlaceholder={"08000000000"}  />
            <Input inputLabel={"Email Address(optional)"} inputPlaceholder={"johndoe@email.com"}  />
            <div className="form-btn">
                <Link to={"/schooldetails"} style={{textDecoration: "none"}}><button className="btn">Continue</button></Link>
            </div>
        </form>
    </div>
  )
}

export default TeacherDetails