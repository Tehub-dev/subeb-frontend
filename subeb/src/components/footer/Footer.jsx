import React from 'react';
import logo from "../../assets/images/logo.png";

import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

  const footerLinks = [
    {
      id: "home",
      name: "Home",
      link: "",
    },
    {
      id: "contact",
      name: "Contact Us",
      link: "contactus",
    },
    {
      id: "help",
      name: "Help",
      link: "",
    },
    {
      id: "privacy",
      name: "Privacy",
      link: "",
    },
  ];

  return (
    <div className='footer-container'>
      <footer className="footer">
        <div className="logo">
          <Link to="/" style={{textDecoration: "none"}}><img src={logo} alt="logo" /></Link>
        </div>
        <div className="footer-list">
            {footerLinks.map((item, idx) => {
              return (
                <ul key={idx}>
                  <Link to={"/" + item.link} style={{ textDecoration: "none" }}>
                    <li
                      id={item.id}
                    >
                      {item.name}
                    </li>
                  </Link>
                </ul>
              );
            })}
        </div>
        <div className="footer-copy">
          <p>&copy; 2023 Ondo Subeb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer