import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import "./layout.css";
import SchoolSidenav from '../side-navs/SchoolSidenav';

const SchoolLayout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);


  return (
    <div className='admin-layout'>
        <div className="side-nav">
            <SchoolSidenav />
        </div>
        <div className="outlet-side">
            <Outlet />
        </div>
    </div>
  )
}

export default SchoolLayout