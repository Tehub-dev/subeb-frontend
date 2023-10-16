import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown2 } from "iconsax-react";

const Navbar = ({bgColor, listColor}) => {

  const activeLink = {
    color: "#F26722",
    fontWeight: "700",
  };

  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const [programs, setPrograms] = useState(false);

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

  const navPrograms = [
    {
      id: "sms",
      name: "School Management System",
    },
    {
      id: "library",
      name: "E-Library",
    },
    {
      id: "infrastructures",
      name: "Infrastructures",
    },
    {
      id: "recruitment",
      name: "Recruitment",
    },
    {
      id: "training",
      name: "Training",
    },
  ]

  const clickPrograms = (item) => {
    if (item.id === "programs"){
      setPrograms(!programs);
    } else {
      setPrograms(false);
    }
  }

  return (
    <div className="nav-container" style={{background: bgColor}}>
      <nav className="desktop-nav">
        <div className="logo-list_container">
          <div className="logo">
            <Link to="/" style={{textDecoration: "none"}}><img src={logo} alt="logo" onClick={()=> setPrograms(false)} /></Link>
          </div>
          <div className="nav-list">
            {navLinks.map((item, idx) => {
              return (
                <ul key={idx}>
                  <Link to={item.link && "/" + item.link} style={{ textDecoration: "none" }}>
                    <li
                      id={item.id}
                      style={item.link === active && item.id !== "programs" ? activeLink : undefined}
                      className={listColor ? "list-color" : "normal-color"}
                      onClick={() => clickPrograms(item)}
                    >
                      {item.name} {item.id === "programs" && <ArrowDown2 size={16} />}
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
      <div className={programs ? "nav-programs" : "none"}>
          {navPrograms.map((item,idx) => {
            return (
              <p key={idx}>{item.name}</p>
            )
          })}
      </div>
    </div>
  );
};

export default Navbar;
