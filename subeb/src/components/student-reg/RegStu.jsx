import React, { useEffect, useState } from "react";

import "./reg-stu.css";
import "../popups/popup.css";
import { Button, Input } from "../custom-inputs/CustomInputs";
import { Add } from "iconsax-react";
import Popup from "../popups/Popup";
import useOverlay from "../../hooks/useOverlay";
import { RegPopup, SuccessAlert } from "../alerts/Alerts";
import { AxiosAuthPost } from "../../axios/axios";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";

const RegStu = ({ display, setDisplay }) => {
  const url = "students/";
  const { setDisplayOverlay } = useOverlay();
  const [errFname, setErrFname] = useState("");
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg, setSuccessMsg } = useSuccessMsg();
  const [isReg, setIsReg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopup, setIsPopup] = useState(true);
  const [errLname, setErrLname] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleDataChange = (e) => {
    if (e.target.id === "firstName") {
      setErrFname("");
    }
    if (e.target.id === "lastName") {
      setErrLname("");
    }
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data);
  };

  const clickReg = () => {
    setIsReg(true);
    setIsPopup(false);
  };
  const cancelReg = () => {
    setIsReg(false);
    setIsPopup(true);
  };

  useEffect(() => {
    setDisplayOverlay(true);
    // eslint-disable-next-line
  }, []);

  const regClick = () => {
    setIsLoading(true);
    AxiosAuthPost(url, data)
      .then((res) => {
        // console.log(res);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        setIsReg(false);
        setIsPopup(true);
        setData({
          firstName: "",
          lastName: "",
        });
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err.response);
        setIsReg(false);
        setIsPopup(true);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "firstName") {
            setErrFname(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "lastName") {
            setErrLname(err.response.data.errors[i].error);
          }
        }
        setIsLoading(false);
      });
  };

  return (
    <>
      <RegPopup
        display={isReg}
        regBtn={regClick}
        regLoad={isLoading}
        cancelBtn={cancelReg}
        title={"Register Student"}
        text={"Are you sure you want to register this student?"}
      />
      <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      />
      <Popup display={isPopup} setDisplay={setDisplay} marginTop={"80px"}>
        <div className="lesson-notes_popup">
          <div className="sch-admin_input">
            <Input
              inputLabel={"First Name"}
              inputPlaceholder={"Enter First name"}
              formChange={handleDataChange}
              formId={"firstName"}
              formValue={data.firstName}
              error={errFname}
            />
            <Input
              inputLabel={"Last Name"}
              inputPlaceholder={"Enter Last name"}
              formChange={handleDataChange}
              formId={"lastName"}
              formValue={data.lastName}
              error={errLname}
            />
          </div>
          <div className="sch-admin_btn">
            <Button
              btnText={"Add Student"}
              btnClass={"btn-small"}
              rightIcon={<Add />}
              btnClick={clickReg}
            />
          </div>
        </div>
      </Popup>
    </>
  );
};

export default RegStu;
