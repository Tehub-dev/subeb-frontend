import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import SmsLanding from "./SmsLanding";
import "./sms-landing.css";

const SmsLogin = () => {
  const portals = [
    {
      id: "admin",
      title: "Admin",
      text: "As an admin, you have full access to the system, and can manage all schools in the Ondo LGA.",
    },
    {
      id: "school-admin",
      title: "School Admin",
      text: "As a school admin, you have access to a specific school's data.",
    },
    {
      id: "teacher",
      title: "Teacher",
      text: "As a teacher, you have full access to manage your classes, including students and attendance.",
    },
  ];

  return (
    <SmsLanding>
      <div className="sms-landing_body-head">
        <h3>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={logo} alt="logo" />
          </Link>{" "}
          School Management <br /> System
        </h3>
        <h2>Welcome to (SMS) Portal</h2>
        <p>Please select your role to log in</p>
      </div>
      <div className="portal-logins">
        {portals.map((item, idx) => {
          return (
            <Link
              key={idx}
              className="each-portal"
              to={
                item.id === "admin" || item.id === "school-admin"
                  ? "/smslogin"
                  : "/teacherportal"
              }
              style={{ textDecoration: "none" }}
            >
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </SmsLanding>
  );
};

export default SmsLogin;
