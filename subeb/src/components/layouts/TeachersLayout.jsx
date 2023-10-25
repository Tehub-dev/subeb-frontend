import React, { useEffect, useState } from 'react'
import TeacherSidenav from '../side-navs/TeacherSidenav'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./layout.css";

const TeachersLayout = () => {

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = JSON.parse(localStorage.getItem("atk"));
    if (!userToken || userToken === "undefined" || userToken?.accountType !== "Teacher") {
      setIsLoggedIn(false);
      return navigate("/smslogin");
    }
    setIsLoggedIn(true);
  };
  
  useEffect(() => {
    checkUserToken();
    // eslint-disable-next-line 
  }, [isLoggedIn]);


  return (
    isLoggedIn ?
    <div className='admin-layout'>
        <div className="side-nav">
            <TeacherSidenav />
        </div>
        <div className="outlet-side">
            <Outlet />
        </div>
    </div> : null
  )
}

export default TeachersLayout