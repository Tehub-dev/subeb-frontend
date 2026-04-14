import React, { useState } from "react";

import "./teacher.css";
import AuthHead from "../auth-head/AuthHead";
import { Button, Input } from "../custom-inputs/CustomInputs";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "iconsax-react";

const TeacherDetails = () => {
  const [data, setData] = useState({
    emailAddress: "",
    phoneNumber: "",
    password: "",
    firstName: "",
    lastName: "",
    schoolId: "",
    classId: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [passErr, setPassErr] = useState("");
  const [btnErr, setBtnErr] = useState("");
  const navigate = useNavigate();

  const handleDataChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    if (e.target.id === "password"){
      // eslint-disable-next-line
        if((/[A-Z]/).test(e.target.value) && (/\d/).test(e.target.value) && (/[!@#$%^&*()_+[\]{};:'"<>?,./\\|`~\-]/).test(e.target.value) && e.target.value.length >= 8){
            setPassErr("")
        } else {
            setPassErr("Your password must be at least 8 characters long, have an uppercase letter, have a number and a special character")
        }
    }
    // console.log(data);
  };

  const clickEyeShow = () => {
    setShowPassword(!showPassword);
  };

  const clickCont = () => {
    if(  data.firstName && data.lastName && data.password && data.phoneNumber && !passErr){
        localStorage.setItem("data", JSON.stringify(data));
        navigate("/schooldetails");
    } else {
        setBtnErr("Please fill in all neccessary details")
    }
  };

  return (
    <div>
      <AuthHead
        title={"Personal Details"}
        text={"Complete your registration as a teacher"}
      />
      <form className="teacher-form">
        <Input
          inputLabel={"First Name"}
          inputPlaceholder={"John"}
          formChange={handleDataChange}
          formId={"firstName"}
          formValue={data.firstName}
        />
        <Input
          inputLabel={"Last Name"}
          inputPlaceholder={"Doe"}
          formChange={handleDataChange}
          formId={"lastName"}
          formValue={data.lastName}
        />
        <Input
          inputLabel={"Phone Number"}
          inputPlaceholder={"08000000000"}
          formChange={handleDataChange}
          formId={"phoneNumber"}
          phone={true}
          formValue={data.phoneNumber}
        />
        <Input
          inputLabel={"Email Address(optional)"}
          inputPlaceholder={"johndoe@email.com"}
          formChange={handleDataChange}
          formId={"emailAddress"}
          formValue={data.emailAddress}
        />
        <Input
          inputLabel={"Password"}
          inputPlaceholder={"password"}
          formChange={handleDataChange}
          formId={"password"}
          formValue={data.password}
          error={passErr}
          icon={
            showPassword ? (
              <Eye onClick={clickEyeShow} style={{ cursor: "pointer" }} />
            ) : (
              <EyeSlash onClick={clickEyeShow} style={{ cursor: "pointer" }} />
            )
          }
          password={showPassword ? false : true}
        />
        <div className="form-btn">
          <Button btnText={"Continue"} btnClick={clickCont} error={btnErr} />
        </div>
      </form>
    </div>
  );
};

export default TeacherDetails;
