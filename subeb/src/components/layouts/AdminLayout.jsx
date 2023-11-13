import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import "./layout.css";
import AdminSidenav from '../side-navs/AdminSidenav';
import SearchComp from '../search/SearchComp';
import Overlay from '../overlay/Overlay';
import useOverlay from "../../hooks/useOverlay";
import { AxiosAuthGet, AxiosGet } from '../../axios/axios';
import useSuccessDisplay from '../../hooks/useSuccessDisplay';
import AuthContext from '../../context/AuthProvider';

const AdminLayout = () => {
  const {isOpen,} = useContext(AuthContext)

  const {displayOverlay} = useOverlay();
  const classUrl = "lookup/classes/";
  const lgaUrl = "lookup/lgas/";
  const subjectUrl = "lookup/subjects/";
  const schoolUrl = "schools/";

  const navigate = useNavigate();

    const { pathname } = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { successDisplay} = useSuccessDisplay();

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

    const clickProfile = () => {
      navigate("/admin-profile");
    }
    const clickNot = () => {
      navigate("/admin-notifications");
    }

    const getClass = () => {
        AxiosGet(classUrl).then((res) => {
            // console.log(res);
            localStorage.setItem("classes", JSON.stringify(res.data));
        })
    }
    const getSubjects = () => {
        AxiosGet(subjectUrl).then((res) => {
            // console.log(res);
            localStorage.setItem("subj", JSON.stringify(res.data));
        })
    }
    const getSchools = () => {
        AxiosAuthGet(schoolUrl).then((res) => {
            // console.log(res);
            localStorage.setItem("sch", JSON.stringify(res.data));
        })
    }
    
    const getLga = () =>{
      AxiosGet(lgaUrl)
      .then((res) => {
        localStorage.setItem("lga", JSON.stringify(res.data));
      })
    }  

    useEffect(()=> {
      getClass();
      getSubjects();
      getSchools();
      getLga();
      // eslint-disable-next-line 
    }, [successDisplay]);
  
  
  return (
    false ?
    <div style={{position: "relative"}} className='admin-layout'>
        <div style={{background: 'blue', position: 'absolute'}} className={`side-nav ${ isOpen ? '' : 'open'}`}>
            <AdminSidenav />
        </div>
        <Overlay display={displayOverlay} />
        <div className="outlet-side">
            <SearchComp clickNot={clickNot} clickProfile={clickProfile}  />
            <Outlet />
        </div>
    </div> : null
  )
}

export default AdminLayout