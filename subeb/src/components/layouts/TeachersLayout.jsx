import React, { useEffect, useState } from 'react'
import TeacherSidenav from '../side-navs/TeacherSidenav'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./layout.css";
import useOverlay from '../../hooks/useOverlay';
import SearchComp from '../search/SearchComp';
import Overlay from '../overlay/Overlay';

const TeachersLayout = () => {

  const { pathname } = useLocation();

  const navigate = useNavigate();
  const {displayOverlay} = useOverlay();

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

  const clickProfile = () => {
    navigate("/admin-profile");
  }
  const clickNot = () => {
    navigate("/admin-notifications");
  }


  return (
    isLoggedIn ?
    <div className='admin-layout'>
        <div className="side-nav">
            <TeacherSidenav />
        </div>
        <Overlay display={displayOverlay} />
        <div className="outlet-side">
            <SearchComp clickNot={clickNot} clickProfile={clickProfile}  />
            <Outlet />
        </div>
    </div> : null
  )
}

export default TeachersLayout