import React from 'react'
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Input } from '../custom-inputs/CustomInputs'
import { SearchNormal1 } from 'iconsax-react';
import open from "../../assets/images/hamburger.png"
import { UserIcon, BellIcon } from '@heroicons/react/solid';

import "./search.css";

const SearchComp = ({clickProfile, clickNot}) => {
    const { setIsOpen} = useContext(AuthContext) //setIsNotification , isNotification

    const profileClick = () => {
        if (clickProfile){
            clickProfile();
        }
    };

    const notClick = () => {
        if (clickNot){
            clickNot();
        }
    };

  return (
    <div className='search'>
        <button onClick={()=> {
            setIsOpen(true)}}><img src={open} className='btn-open' alt='open'/></button>
        <div className="search-input">
            <Input iconLeft={<SearchNormal1 />} inputPlaceholder={"Search"} />
        </div>
        <div className="profile-icons">
            <div className="icon-cont" onClick={profileClick}>
                <UserIcon className="user-icon" />
            </div>
            <div className="icon-cont" onClick={()=>{
                notClick()
                // setIsNotification(!isNotification)
            }}>
                <BellIcon className='bell-icon' />
            </div>
        </div>
    </div>
  )
}

export default SearchComp