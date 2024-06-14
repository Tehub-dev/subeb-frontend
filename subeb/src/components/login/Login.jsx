import React, { useState } from "react";

import "./login.css";
import { Button, Input } from "../custom-inputs/CustomInputs";
import { Eye, EyeSlash } from "iconsax-react";
import AuthHead from "../auth-head/AuthHead";
import { AxiosPost } from "../../axios/axios";
import { SuccessAlert } from "../alerts/Alerts";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const url = "auth/login/";
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [credErr, setCredErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const [data, setData] = useState({
    credential: "",
    password: "",
  });

  const handleDataChange = (e) => {
    if (e.target.id === "credential"){
        setCredErr("");
    }
    if (e.target.id === "password"){
        setPassErr("");
    }
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data);
  };

  const clickEyeShow = () => {
    setShowPassword(!showPassword);
  };

  const submitLogin = () => {
    setIsLoading(true);
    AxiosPost(url,data).then((res) => {
        // console.log(res);
        if(res.success){
            localStorage.setItem("atk", JSON.stringify(res.data));
            setDisplaySuccess(true);
            setSuccessMessage(res.message);
            setTimeout(function() {
              if(res.data.accountType === "Super Admin"){
                navigate("/adminoverview");
              }
              if(res.data.accountType === "Teacher"){
                navigate("/teacher-overview");
              }
              if(res.data.accountType === "Headmaster"){
                navigate("/school-overview");
              }
              window.location.reload();
            }, 2000);
        }
        setIsLoading(false);
    }).catch((err) => {
        // console.log(err.response);
        setIsLoading(false);
        if (err?.response?.status === 401){
            setErrMessage(err?.response?.data?.message);
        } else {
            for (let i = 0; i < err?.response?.data?.errors?.length; i++){
                if (err?.response?.data?.errors[i]?.fieldName === "credential"){
                    setCredErr(err?.response?.data?.errors[i]?.error)
                }
                if (err?.response?.data?.errors[i]?.fieldName === "password"){
                    setPassErr(err?.response?.data?.errors[i]?.error)
                }
            }
        }
    })
  };

  return (
    <div className="login">
        <SuccessAlert display={displaySuccess} setDisplay={setDisplaySuccess} message={successMessage} />
      <AuthHead
        title={"Login"}
        text={"Login to the Ondo School Management System"}
      />
      <form className="login-form">
        <Input
          inputLabel={"Email Address/Phone Number"}
          inputPlaceholder={"johndoe@example.com"}
          formChange={handleDataChange}
          formId={"credential"}
          formValue={data.credential}
          error={credErr}
        />
        <Input
          formChange={handleDataChange}
          formId={"password"}
          formValue={data.password}
          inputLabel={"Password"}
          inputPlaceholder={"password"}
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
          <Button btnText={"Login"} btnClick={submitLogin} error={errMessage} loading={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default Login;
