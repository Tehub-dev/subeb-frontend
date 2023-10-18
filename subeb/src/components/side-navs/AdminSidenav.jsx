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

import "./side-nav.css";
import { Link, useLocation } from "react-router-dom";

const AdminSidenav = () => {
    
  const activeLink = {
    background: "#F26722"
  };

  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname.substring(1));
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
            >
              <div key={idx} className="each-link" style={item.link === active ? activeLink : undefined}>
                <img src={item.link === active ? item.icon2 : item.icon} alt="icon" />
                <p style={{color: item.link === active && "white"}}>{item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="logot-btn">
        <div className="logout each-link">
            <img src={logout} alt="icon" />
            <p style={{color: "red"}}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidenav;
