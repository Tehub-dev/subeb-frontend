import React, { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const SiteLayout = () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, [pathname]);

  return (
    <div>
        <Navbar bgColor={pathname === "/" ? "#162625" : undefined} mobileBg={pathname === "/" ? "#162625" : undefined} homeMobile={pathname === "/" ? "white" : undefined} listColor={pathname === "/" ? true : false} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SiteLayout