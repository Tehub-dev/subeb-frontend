import React from 'react';
import { Button, Input } from '../custom-inputs/CustomInputs';

import "./profile.css";

const Profile = () => {
  return (
    <div className='profile-cont'>
        <div className="personal-head">
            <h3>Personal info</h3>
            <p>Update your personal details.</p>
        </div>
        <div className="personal-info">
            <div className="personal-info_input-cont">
                <div className="personal-input">
                    <Input inputLabel={"First Name"} inputPlaceholder={"John"} />
                </div>
                <div className="personal-input">
                    <Input inputLabel={"Last Name"} inputPlaceholder={"Doe"} />
                </div>
                <div className="personal-input">
                    <Input inputLabel={"Phone Number"} inputPlaceholder={"09001000000"} />
                </div>
                <div className="personal-input">
                    <Input inputLabel={"Email Address (optional)"} inputPlaceholder={"johndoe@example.com"} />
                </div>
            </div>
            <div className="personal-btn">
                <Button btnClass={"btn-small-white"} btnColor={"red"} btnText={"discard"} />
                <Button btnClass={"btn-small"} btnText={"save changes"} />
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
                    <Input inputLabel={"Current Password"} inputPlaceholder={"Enter Current Password"} />
                </div>
                <div className="personal-input">
                    <Input inputLabel={"New Password"} inputPlaceholder={"Enter New Password"} />
                </div>
            </div>
            <div className="personal-btn">
                <Button btnClass={"btn-small-white"} btnColor={"red"} btnText={"discard"} />
                <Button btnClass={"btn-small"} btnText={"save changes"} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile