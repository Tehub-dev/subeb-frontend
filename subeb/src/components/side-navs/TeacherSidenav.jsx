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
import close from "../../assets/images/close.png";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

import "./side-nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useOverlay from "../../hooks/useOverlay";


const TeacherSidenav = () => {
  const {isOpen, setIsOpen} = useContext(AuthContext)

    const activeLink = {
      background: "#F26722"
    };
  
    const { pathname } = useLocation();
    const [active, setActive] = useState("");

    const navigate = useNavigate();

    const { setDisplayOverlay} = useOverlay();
  
    useEffect(() => {
      setActive(pathname.substring(1));
      if(pathname.includes("lesson")){
        setActive("teacher-lesson-notes")
      }
    }, [pathname]);
  
    const navLinks = [
      {
        id: "1",
        name: "Overview",
        icon: home,
        icon2: homeWhite,
        link: "teacher-overview",
      },
      {
        id: "2",
        name: "Lesson Notes",
        icon: book,
        icon2: bookWhite,
        link: "teacher-lesson-notes",
      },
      {
        id: "3",
        name: "Student Registration",
        icon: reg,
        icon2: regWhite,
        link: "student-reg",
      },
      {
        id: "4",
        name: "Student Attendance",
        icon: check,
        icon2: checkWhite,
        link: "student-att",
      },
      {
        id: "5",
        name: "Academic Calendar",
        icon: calendar,
        icon2: calendarWhite,
        link: "academic-cal-tch",
      },
    ];

    const clickLinks = () => {
      setDisplayOverlay(false);
    };

    const logoutClick = () => {
      localStorage.clear();
      navigate("/smslogin");
    }
  
  return (
    <div className="sidenav">
        <div className="sidenav_logo">  
        <div style={{display: "flex"}}>
        <img src={logo} alt="logo" />
          <h2>
            School Management <br /> System
          </h2>
        </div>
        <div>
        <button onClick={()=> setIsOpen(false)}><img src={close} className="btn-close" alt="close"/></button>
        </div>
        </div>
      <div className="sidenav-links">
        {navLinks.map((item, idx) => {
          return (
            <Link
            onClick={()=> setIsOpen(false)}
              to={item.link && "/" + item.link}
              style={{ textDecoration: "none" }}
              key={idx}
            >
              <div className="each-link" onClick={clickLinks} style={item.link === active ? activeLink : undefined}>
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
  )
}

export default TeacherSidenav