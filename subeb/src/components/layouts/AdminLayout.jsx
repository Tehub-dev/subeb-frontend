import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import "./layout.css";
import AdminSidenav from '../side-navs/AdminSidenav';
import SearchComp from '../search/SearchComp';
import Overlay from '../overlay/Overlay';
import useOverlay from "../../hooks/useOverlay";

const AdminLayout = () => {

  const {displayOverlay} = useOverlay();

  const navigate = useNavigate();

    const { pathname } = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
      const userToken = JSON.parse(localStorage.getItem("atk"));
      if (!userToken || userToken === "undefined" || userToken?.accountType !== "Super Admin") {
        setIsLoggedIn(false);
        return navigate("/smslogin");
      }
      setIsLoggedIn(true);
    };
    
    useEffect(() => {
      checkUserToken();
      // eslint-disable-next-line 
    }, [isLoggedIn]);
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, [pathname]);
  
  
  return (
    isLoggedIn ?
    <div className='admin-layout'>
        <div className="side-nav">
            <AdminSidenav />
        </div>
        <Overlay display={displayOverlay} />
        <div className="outlet-side">
            <SearchComp />
            <Outlet />
        </div>
    </div> : null
  )
}

export default AdminLayout