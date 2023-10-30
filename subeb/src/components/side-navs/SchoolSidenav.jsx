import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import homeWhite from "../../assets/images/homeWhite.png";
import logout from "../../assets/images/logout.png";
import calendar from "../../assets/images/calendar.png";
import calendarWhite from "../../assets/images/calendarWhite.png";
import check from "../../assets/images/check.png";
import checkWhite from "../../assets/images/checkWhite.png";
import reg from "../../assets/images/reg.png";
import regWhite from "../../assets/images/regWhite.png";
import book from "../../assets/images/book.png";
import bookWhite from "../../assets/images/bookWhite.png";

import "./side-nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SchoolSidenav = () => {
    
    const activeLink = {
      background: "#F26722"
    };
  
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      setActive(pathname.substring(1));
      if(pathname.includes("lesson")){
        setActive("school-lesson-notes")
      }
    }, [pathname]);

    const logoutClick = () => {
      localStorage.clear();
      navigate("/smslogin");
    }
  
    const navLinks = [
      {
        id: "1",
        name: "Overview",
        icon: home,
        icon2: homeWhite,
        link: "school-overview",
      },
      {
        id: "2",
        name: "Lesson Notes",
        icon: book,
        icon2: bookWhite,
        link: "school-lesson-notes",
      },
      {
        id: "3",
        name: "Teachers Registration",
        icon: reg,
        icon2: regWhite,
        link: "teachers-reg",
      },
      {
        id: "4",
        name: "Teachers Attendance",
        icon: check,
        icon2: checkWhite,
        link: "teachers-att",
      },
      {
        id: "5",
        name: "Academic Calendar",
        icon: calendar,
        icon2: calendarWhite,
        link: "academic-cal-sch",
      },
    ];
  
    return (
      <div className="sidenav">
        <div className="sidenav_logo">
          <img src={logo} alt="logo" />
          <h2>
            School Management <br /> System
          </h2>
        </div>
        <div className="sidenav-links">
          {navLinks.map((item, idx) => {
            return (
              <Link
                to={item.link && "/" + item.link}
                style={{ textDecoration: "none" }}
                key={idx}
              >
                <div className="each-link" style={item.link === active ? activeLink : undefined}>
                  <img src={item.link === active ? item.icon2 : item.icon} alt="icon" />
                  <p style={{color: item.link === active && "white"}}>{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="logot-btn"> 
          <div className="logout each-link" onClick={logoutClick}>
              <img src={logout} alt="icon" />
              <p style={{color: "red"}}>Logout</p>
          </div>
        </div>
      </div>
    );
}

export default SchoolSidenav