import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({bgColor, listColor}) => {

  const activeLink = {
    color: "#F26722",
    fontWeight: "700",
  };

  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const navLinks = [
    {
      id: "home",
      name: "Home",
      link: "",
    },
    {
      id: "about",
      name: "About Us",
      link: "aboutus",
    },
    {
      id: "programs",
      name: "Programs",
      link: "programs",
    },
    {
      id: "news",
      name: "News",
      link: "news",
    },
    {
      id: "gallery",
      name: "Gallery",
      link: "gallery",
    },
  ];

  return (
    <div className="nav-container" style={{background: bgColor}}>
      <nav className="desktop-nav">
        <div className="logo-list_container">
          <div className="logo">
            <Link to="/" style={{textDecoration: "none"}}><img src={logo} alt="logo" /></Link>
          </div>
          <div className="nav-list">
            {navLinks.map((item, idx) => {
              return (
                <ul key={idx}>
                  <Link to={"/" + item.link} style={{ textDecoration: "none" }}>
                    <li
                      id={item.id}
                      style={item.link === active ? activeLink : undefined}
                      className={listColor ? "list-color" : "normal-color"}
                    >
                      {item.name}
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="contact-us">
            <Link to="/contactus" style={{textDecoration: "none"}}><button className="btn">contact us</button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
