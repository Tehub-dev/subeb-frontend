import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import "./layout.css";
import AdminSidenav from '../side-navs/AdminSidenav';

const AdminLayout = () => {

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
        <div className="outlet-side">
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout