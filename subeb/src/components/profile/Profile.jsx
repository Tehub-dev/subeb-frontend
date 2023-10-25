import React, { useState } from "react";
import { Button, Input } from "../custom-inputs/CustomInputs";

import "./profile.css";
import { Eye, EyeSlash } from "iconsax-react";

const Profile = ({
  firstName,
  lastName,
  phone,
  email,
  formChange,
  firstNameId,
  firstNameValue,
  firstNameError,
  lastNameId,
  lastNameValue,
  lastNameError,
  phoneId,
  phoneValue,
  phoneError,
  emailId,
  emailValue,
  emailError,
  clickDiscard,
  clickSave,
  btnLoad,
  newPId,
  newPError,
  newPValue,
  currentPError,
  currentPId,
  currentPValue,
  passBtnLoad,
  passDiscard,
  passSave,
  formPChange
}) => {
    
  const [showCPassword, setShowCPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);

  const clickEyeShow = () => {
    setShowCPassword(!showCPassword);
  };
  const clickEyeShowP = () => {
    setShowNPassword(!showNPassword);
  };

  return (
    <div className="profile-cont">
      <div className="personal-head">
        <h3>Personal info</h3>
        <p>Update your personal details.</p>
      </div>
      <div className="personal-info">
        <div className="personal-info_input-cont">
          <div className="personal-input">
            <Input
              inputLabel={"First Name"}
              inputPlaceholder={firstName}
              formId={firstNameId}
              formChange={formChange}
              formValue={firstNameValue}
              error={firstNameError}
            />
          </div>
          <div className="personal-input">
            <Input
              inputLabel={"Last Name"}
              inputPlaceholder={lastName}
              formId={lastNameId}
              formChange={formChange}
              formValue={lastNameValue}
              error={lastNameError}
            />
          </div>
          <div className="personal-input">
            <Input
              inputLabel={"Phone Number"}
              inputPlaceholder={phone}
              formId={phoneId}
              formChange={formChange}
              formValue={phoneValue}
              error={phoneError}
              phone={true}
            />
          </div>
          <div className="personal-input">
            <Input
              inputLabel={"Email Address (optional)"}
              inputPlaceholder={email}
              formId={emailId}
              formChange={formChange}
              formValue={emailValue}
              error={emailError}
            />
          </div>
        </div>
        <div className="personal-btn">
          <Button
            btnClass={"btn-small-white"}
            btnColor={"red"}
            btnText={"discard"}
            btnClick={clickDiscard}
          />
          <Button
            btnClass={"btn-small"}
            btnText={"save changes"}
            btnClick={clickSave}
            loading={btnLoad}
          />
        </div>
      </div>
      <div className="line-btw"></div>
      <div className="change-password">
        <div className="personal-head">
          <h3>Password</h3>
          <p>Update your password.</p>
        </div>
        <div className="personal-info">
          <div className="personal-info_input-cont">
            <div className="personal-input">
              <Input
                inputLabel={"New Password"}
                inputPlaceholder={"Enter New Password"}
                formId={newPId}
                formChange={formPChange}
                formValue={newPValue}
                error={newPError}
                icon={
                  showNPassword ? (
                    <Eye onClick={clickEyeShowP} style={{ cursor: "pointer" }} />
                  ) : (
                    <EyeSlash onClick={clickEyeShowP} style={{ cursor: "pointer" }} />
                  )
                }
                password={showNPassword ? false : true}
              />
            </div>
            <div className="personal-input">
              <Input
                inputLabel={"Confirm Password"}
                inputPlaceholder={"Confirm New Password"}
                formId={currentPId}
                formChange={formPChange}
                formValue={currentPValue}
                error={currentPError}
                icon={
                  showCPassword ? (
                    <Eye onClick={clickEyeShow} style={{ cursor: "pointer" }} />
                  ) : (
                    <EyeSlash onClick={clickEyeShow} style={{ cursor: "pointer" }} />
                  )
                }
                password={showCPassword ? false : true}
              />
            </div>
          </div>
          <div className="personal-btn">
            <Button
              btnClass={"btn-small-white"}
              btnColor={"red"}
              btnText={"discard"}
              btnClick={passDiscard}
            />
            <Button
              btnClass={"btn-small"}
              btnText={"save changes"}
              btnClick={passSave}
              loading={passBtnLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
