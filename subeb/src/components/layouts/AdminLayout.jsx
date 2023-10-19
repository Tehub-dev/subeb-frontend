import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import "./layout.css";
import AdminSidenav from '../side-navs/AdminSidenav';
import SearchComp from '../search/SearchComp';
import Overlay from '../overlay/Overlay';
import useOverlay from "../../hooks/useOverlay";

const AdminLayout = () => {

  const {displayOverlay} = useOverlay();

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
            <AdminSidenav />
        </div>
        <Overlay display={displayOverlay} />
        <div className="outlet-side">
            <SearchComp />
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout