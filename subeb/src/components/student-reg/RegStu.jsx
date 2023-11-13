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
import SearchSelect from "../custom-inputs/SearchSelect";

const RegStu = ({ display, setDisplay }) => {
  const url = "students/";
  const { setDisplayOverlay } = useOverlay();
  const [errFname, setErrFname] = useState("");
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg, setSuccessMsg } = useSuccessMsg();
  const [isReg, setIsReg] = useState(false);
  const [searching, setSearching] = useState(false);
  const [genderItem, setGenderItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPopup, setIsPopup] = useState(true);
  const [errLname, setErrLname] = useState("");
  const [errAge, setErrAge] = useState("");
  const [errGender, setErrGender] = useState("");
  const [errGuardianName, setErrGuardianName] = useState("");
  const [errGuardianPhoneNumber, setErrGuardianPhoneNumber] = useState("");
  const genderArr = [
    {
      id: "Male",
      name: "Male"
    },
    {
      id: "Female",
      name: "Female"
    },
  ]
  const [
    // genderArray,
     setGenderArray] = useState([]);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    guardianName: "",
    guardianPhoneNumber: "",
  });

  const handleDataChange = (e) => {
    if (e.target.id === "firstName") {
      setErrFname("");
    }
    if (e.target.id === "lastName") {
      setErrLname("");
    }
    if (e.target.id === "age") {
      setErrAge("");
    }
    if (e.target.id === "guardianName") {
      setErrGuardianName("");
    }
    if (e.target.id === "guardianPhoneNumber") {
      setErrGuardianPhoneNumber("");
    }
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data);
  };

  const selectChange = (e) => {
    if (e.target.id === "gender") {
      if (e.target.value) {
        setSearching(true);
        setGenderItem("");
        setGenderArray(
          genderArr.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    }
   else {
    setSearching(false);
  }
}

const optionClick = (item) => {
  setGenderItem(item);
};
const clickDropDown = () => {
  setGenderArray(genderArr);
  setSearching(!searching);
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

  const dataObj = {
    ...data,
    gender: genderItem?.name
  }

  const regClick = () => {
    setIsLoading(true);
    AxiosAuthPost(url, dataObj)
      .then((res) => {
        // console.log(res);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        setIsReg(false);
        setIsPopup(true);
        setData({
          firstName: "",
          lastName: "",
          age: "",
          guardianName: "",
          guardianPhoneNumber: "",
        });
        setGenderItem("");
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
          if (err?.response?.data?.errors[i]?.fieldName === "age") {
            setErrAge(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "guardianName") {
            setErrGuardianName(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "guardianPhoneNumber") {
            setErrGuardianPhoneNumber(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "gender") {
            setErrGender(err.response.data.errors[i].error);
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
      <Popup display={isPopup} setDisplay={setDisplay}>
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
            <SearchSelect
              formLabel={"Gender"}
              placeholder={"Select Gender"}
              dataChange={selectChange}
              formId={"gender"}
              optionsArray={genderArr}
              searching={searching}
              setSearching={setSearching}
              optionClick={optionClick}
              formValue={genderItem?.name || ""}
              clickDrop={clickDropDown}
              error={errGender}
            />
            <Input
              inputLabel={"Age"}
              inputPlaceholder={"Enter Age"}
              formChange={handleDataChange}
              formId={"age"}
              formValue={data.age}
              error={errAge}
              phone={true}
            />
            <Input
              inputLabel={"Guardian's Name"}
              inputPlaceholder={"Enter Guardian's name"}
              formChange={handleDataChange}
              formId={"guardianName"}
              formValue={data.guardianName}
              error={errGuardianName}
            />
            <Input
              inputLabel={"Guardian's Phone Number"}
              inputPlaceholder={"Enter Guardian's Phone Number"}
              formChange={handleDataChange}
              formId={"guardianPhoneNumber"}
              formValue={data.guardianPhoneNumber}
              error={errGuardianPhoneNumber}
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
