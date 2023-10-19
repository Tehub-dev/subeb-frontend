import React, { useEffect } from 'react'
import TeacherSidenav from '../side-navs/TeacherSidenav'
import { Outlet, useLocation } from 'react-router-dom';
import "./layout.css";

const TeachersLayout = () => {

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
            <TeacherSidenav />
        </div>
        <div className="outlet-side">
            <Outlet />
        </div>
    </div>
  )
}

export default TeachersLayout