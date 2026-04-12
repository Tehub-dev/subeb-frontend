import React, { useEffect, useState } from "react";
import Profile from "../../../../components/profile/Profile";
import { AxiosAuthGet, AxiosAuthPut } from "../../../../axios/axios";
import {
  DeletePopup,
  LoadingSpin,
  SuccessAlert,
} from "../../../../components/alerts/Alerts";
import useOverlay from "../../../../hooks/useOverlay";

const TeachProfile = () => {
  const url = "settings/profile/";
  const urlPass = "settings/change-password/";
  const [isLoading, setIsLoading] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);
  const [passLoad, setPassLoad] = useState(false);
  const [displayDiscard, setDisplayDiscard] = useState(false);
  const [successDisplay, setSuccessDisplay] = useState(false);
  const { displayOverlay, setDisplayOverlay } = useOverlay();
  const [profileData, setProfileData] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [fNameErr, setfNameErr] = useState("");
  const [lNameErr, setlNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [newPErr, setNewPErr] = useState("");
  const [currentPErr, setCurrentPErr] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [dataP, setDataP] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleDataChange = (e) => {
    if (e.target.id === "firstName") {
      setfNameErr("");
    }
    if (e.target.id === "lastName") {
      setlNameErr("");
    }
    if (e.target.id === "email") {
      setEmailErr("");
    }
    if (e.target.id === "phoneNumber") {
      setPhoneErr("");
    }
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(data);
  };
  const handlePChange = (e) => {
    if (e.target.id === "newPassword") {
      setNewPErr("");
    }
    if (e.target.id === "confirmPassword") {
      setCurrentPErr("");
    }
    const newData = { ...dataP };
    newData[e.target.id] = e.target.value;
    setDataP(newData);
    // console.log(dataP);
  };

  const discardClick = () => {
    setDisplayDiscard(!displayDiscard);
    setDisplayOverlay(!displayOverlay);
  };
  const discardPass = () => {
    setDisplayDiscard(!displayDiscard);
    setDisplayOverlay(!displayOverlay);
  };
  const discardBtn = () => {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
    setDataP({
      newPassword: "",
      currentPassword: "",
    });
    setDisplayOverlay(!displayOverlay);
    setDisplayDiscard(!displayDiscard);
  };
  const cancelDiscard = () => {
    setDisplayDiscard(!displayDiscard);
    setDisplayOverlay(!displayOverlay);
  };

  const dataObj = {
    firstName: data?.firstName ? data?.firstName : profileData?.firstName,
    lastName: data?.lastName ? data?.lastName : profileData?.lastName,
    email: data?.email ? data?.email : profileData?.email,
    phoneNumber: data?.phoneNumber
      ? data?.phoneNumber
      : profileData?.phoneNumber,
  };

  const saveClick = () => {
    setBtnLoad(true);
    AxiosAuthPut(url, dataObj)
      .then((res) => {
        // console.log(res);
        setBtnLoad(false);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
      })
      .catch((err) => {
        // console.log(err.response);
        setBtnLoad(false);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "firstName") {
            setfNameErr(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "lastName") {
            setlNameErr(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "email") {
            setEmailErr(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "phoneNumber") {
            setPhoneErr(err.response.data.errors[i].error);
          }
        }
      });
  };

  const savePassword = () => {
    setPassLoad(true);
    AxiosAuthPut(urlPass, dataP)
      .then((res) => {
        // console.log(res);
        setPassLoad(false);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        setDataP({
          newPassword: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        // console.log(err.response);
        setPassLoad(false);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "newPassword") {
            setNewPErr(err.response.data.errors[i].error);
          }
          if (err?.response?.data?.errors[i]?.fieldName === "confirmPassword") {
            setCurrentPErr(err.response.data.errors[i].error);
          }
        }
      });
  };

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setProfileData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div>
      <SuccessAlert
        message={successMsg}
        setDisplay={setSuccessDisplay}
        display={successDisplay}
      />
      <DeletePopup
        btnText={"discard"}
        title={"Discard Changes"}
        text={"Do you want to discard changes"}
        display={displayDiscard}
        cancelBtn={cancelDiscard}
        deleteBtn={discardBtn}
      />
      <Profile
        firstName={profileData?.firstName}
        lastName={profileData?.lastName}
        email={profileData?.email}
        phone={profileData?.phoneNumber}
        formChange={handleDataChange}
        firstNameId={"firstName"}
        firstNameError={fNameErr}
        firstNameValue={data?.firstName}
        lastNameId={"lastName"}
        lastNameError={lNameErr}
        lastNameValue={data?.lastName}
        emailId={"email"}
        emailError={emailErr}
        emailValue={data?.email}
        phoneId={"phoneNumber"}
        phoneError={phoneErr}
        phoneValue={data?.phoneNumber}
        newPId={"newPassword"}
        newPError={newPErr}
        newPValue={dataP?.newPassword}
        currentPId={"confirmPassword"}
        currentPError={currentPErr}
        currentPValue={dataP?.confirmPassword}
        formPChange={handlePChange}
        clickDiscard={discardClick}
        clickSave={saveClick}
        btnLoad={btnLoad}
        passDiscard={discardPass}
        passBtnLoad={passLoad}
        passSave={savePassword}
      />
    </div>
  );
}

export default TeachProfile