import React, { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import useOverlay from "../../hooks/useOverlay";
import Overlay from "../overlay/Overlay";
import logoWhite from "../../assets/images/logo-white.png";

const SiteLayout = () => {
  const { pathname } = useLocation();
  const {displayOverlay } = useOverlay();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <Overlay display={displayOverlay} overlayWidth={"100%"} overlayMargin={"0"} />
      <Navbar
        bgColor={pathname === "/" ? "#162625" : undefined}
        mobileBg={pathname === "/" ? "#162625" : undefined}
        homeMobile={pathname === "/" ? "white" : undefined}
        listColor={pathname === "/" ? true : false}
        logoWhite={pathname === "/" && logoWhite }
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SiteLayout;
