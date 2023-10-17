import React from 'react';

import "./teacher.css";
import AuthHead from '../auth-head/AuthHead';
import { Input } from '../custom-inputs/CustomInputs';

const TeacherDetails = () => {
  return (
    <div>
        <AuthHead title={"Personal Details"} text={"Register as a teacher on ondo state school management system"} /> 
        <form className="teacher-form">
            <Input inputLabel={"First Name"} inputPlaceholder={"John"} />
            <Input inputLabel={"Last Name"} inputPlaceholder={"Doe"}  />
            <div className="form-btn">
                <button className="btn">Continue</button>
            </div>
        </form>
    </div>
  )
}

export default TeacherDetails