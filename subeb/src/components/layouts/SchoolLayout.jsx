import React, { useEffect } from 'react';
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Outlet, useLocation } from 'react-router-dom';

import "./layout.css";
import SchoolSidenav from '../side-navs/SchoolSidenav';
import SearchComp from '../search/SearchComp';
import Notification from '../notification/Notification';

const SchoolLayout = () => {
  const {isOpen, isNotification} = useContext(AuthContext)

  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);


  return (
    <div className='admin-layout'>
        <div className={`side-nav ${isOpen? '' : 'open'}`}>
            <SchoolSidenav />
        </div>
        <div className="outlet-side">
          <SearchComp/>
       <div className='notification'>
        {isNotification ?   <Notification /> : null}
       </div>
            <Outlet />
        </div>
    </div>
  )
}

export default SchoolLayout