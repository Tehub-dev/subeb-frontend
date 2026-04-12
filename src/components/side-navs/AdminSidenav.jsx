import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import homeWhite from "../../assets/images/homeWhite.png";
import logout from "../../assets/images/logout.png";
import calendar from "../../assets/images/calendar.png";
import calendarWhite from "../../assets/images/calendarWhite.png";
import academic from "../../assets/images/academic.png";
import academicWhite from "../../assets/images/academicWhite.png";
import users from "../../assets/images/users.png";
import usersWhite from "../../assets/images/usersWhite.png";
import book from "../../assets/images/book.png";
import bookWhite from "../../assets/images/bookWhite.png";
import close from "../../assets/images/close.png";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

import "./side-nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useOverlay from "../../hooks/useOverlay";

const AdminSidenav = () => {
  const {
    // isOpen,
    setIsOpen} = useContext(AuthContext)
    
  const activeLink = {
    background: "#F26722"
  };

  const navigate = useNavigate();

  const { setDisplayOverlay} = useOverlay();

  const clickLinks = () => {
    setDisplayOverlay(false);
  };

  const logoutClick = () => {
    localStorage.clear();
    navigate("/smslogin");
  }

  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname.substring(1));
    if(pathname.includes("lesson")){
      setActive("lesson-notes")
    }
  }, [pathname]);

  const navLinks = [
    {
      id: "1",
      name: "Overview",
      icon: home,
      icon2: homeWhite,
      link: "adminoverview",
    },
    {
      id: "2",
      name: "Lesson Notes",
      icon: book,
      icon2: bookWhite,
      link: "lesson-notes",
    },
    {
      id: "3",
      name: "School Admins",
      icon: users,
      icon2: usersWhite,
      link: "school-admin",
    },
    {
      id: "4",
      name: "School Management",
      icon: academic,
      icon2: academicWhite,
      link: "school-mgt",
    },
    {
      id: "5",
      name: "Academic Calendar",
      icon: calendar,
      icon2: calendarWhite,
      link: "academic-cal",
    },
  ];

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
              <div onClick={clickLinks} className="each-link" style={item.link === active ? activeLink : undefined}>
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
};

export default AdminSidenav;
