import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown2, CloseSquare, HambergerMenu } from "iconsax-react";
import useOverlay from "../../hooks/useOverlay";

const Navbar = ({ bgColor, listColor, homeMobile, mobileBg, logoWhite }) => {
  const activeLink = {
    color: "#F26722",
    fontWeight: "700",
  };

  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const [programs, setPrograms] = useState(false);
  const [programsMob, setProgramsMob] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const { displayOverlay, setDisplayOverlay } = useOverlay();

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
      id: "census",
      name: "Census Management",
      link: "census-landing"
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
  ];

  const clickMenu = (item) => {
    if (item.id !== "programs") {
      setDisplayMenu(!displayMenu);
      setProgramsMob(false);
      setDisplayOverlay(!displayOverlay);
    }
  };

  const clickPrograms = (item) => {
    if (item.id === "programs") {
      setPrograms(!programs);
    } else {
      setPrograms(false);
    }
  };
  const clickProgramsMob = (item) => {
    if (item.id === "programs") {
      setProgramsMob(!programsMob);
    } else {
      setProgramsMob(false);
    }
  };

  return (
    <div className="nav-container" style={{ background: bgColor }}>
      <nav className="desktop-nav">
        <div className="logo-list_container">
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logoWhite ? logoWhite : logo} alt="logo" onClick={() => setPrograms(false)} />
            </Link>
          </div>
          <div className="nav-list">
            {navLinks.map((item, idx) => {
              return (
                <ul key={idx}>
                  <Link
                    to={item.link && "/" + item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <li
                      id={item.id}
                      style={
                        item.link === active && item.id !== "programs"
                          ? activeLink
                          : undefined
                      }
                      className={listColor ? "list-color" : "normal-color"}
                      onClick={() => clickPrograms(item)}
                    >
                      {item.name}{" "}
                      {item.id === "programs" && <ArrowDown2 size={16} />}
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="contact-us">
          <Link to="/smslanding" style={{ textDecoration: "none" }}>
            <button className="btn" onClick={() => setPrograms(false)}>
            School Management System
            </button>
          </Link>
        </div>
      </nav>
      <div className={programs ? "nav-programs" : "none"}>
        {navPrograms.map((item, idx) => {
          return (
            <Link
              key={idx}
              to={item.link && "/" + item.link}
              style={{ textDecoration: "none" }}
            >
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="mobile-menu_cont">
        <nav className="mobile-nav" style={{ background: mobileBg }}>
          <div className="mobile-logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logoWhite ? logoWhite : logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-bar">
            <HambergerMenu onClick={clickMenu} style={{ color: homeMobile }} />
          </div>
        </nav>
        <div className={displayMenu ? "mobile-menu" : "none"}>
          <div className="close">
            <CloseSquare onClick={clickMenu} />
          </div>
          {navLinks.map((item, idx) => {
            return (
              <ul key={idx}>
                <Link
                  to={item.link && "/" + item.link}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    id={item.id}
                    style={
                      item.link === active && item.id !== "programs"
                        ? activeLink
                        : undefined
                    }
                    className={listColor ? "list-color" : "normal-color"}
                    onClick={() => {
                      clickProgramsMob(item);
                      clickMenu(item);
                    }}
                  >
                    {item.name}{" "}
                    {item.id === "programs" && <ArrowDown2 size={16} />}
                  </li>
                </Link>
              </ul>
            );
          })}
          <div className="contact-us">
            <Link to="/smslanding" style={{ textDecoration: "none" }}>
              <button
                className="btn"
                onClick={() => {
                  setProgramsMob(false);
                  setDisplayMenu(false);
                  setDisplayOverlay(false);
                }}
              >
                School Management System
              </button>
            </Link>
          </div>
        </div>
        <div className={programsMob ? "nav-programs" : "none"}>
          {navPrograms.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={item.link && "/" + item.link}
                style={{ textDecoration: "none" }}
                onClick={()=> setDisplayOverlay(false)}
              >
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
