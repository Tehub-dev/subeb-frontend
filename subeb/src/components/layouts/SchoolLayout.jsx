import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import "./layout.css";
import SchoolSidenav from '../side-navs/SchoolSidenav';
import Overlay from '../overlay/Overlay';
import SearchComp from '../search/SearchComp';
import useOverlay from '../../hooks/useOverlay';
import AuthContext from '../../context/AuthProvider';


const SchoolLayout = () => {
  const {isOpen,} = useContext(AuthContext)

  const {displayOverlay} = useOverlay();

  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
      const userToken = JSON.parse(localStorage.getItem("atk"));
      if (!userToken || userToken === "undefined" || userToken?.accountType !== "Headmaster") {
        setIsLoggedIn(false);
        return navigate("/smslogin");
      }
      setIsLoggedIn(true);
    };
    
    useEffect(() => {
      checkUserToken();
      // eslint-disable-next-line 
    }, [isLoggedIn]);

  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  const clickProfile = () => {
    navigate("/sch-admin-profile");
  }
  const clickNot = () => {
    navigate("/sch-admin-nots");
  }


  return (
    isLoggedIn ? 
    <div className='admin-layout'>
        <div className={`side-nav ${ isOpen ? '' : 'open'}`}>
            <SchoolSidenav />
        </div>
        <Overlay display={displayOverlay} />
        <div className="outlet-side">
            <SearchComp clickNot={clickNot} clickProfile={clickProfile}  />
            <Outlet />
        </div>
    </div> : null
  )
}

export default SchoolLayout