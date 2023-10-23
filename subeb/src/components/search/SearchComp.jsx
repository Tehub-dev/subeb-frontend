import React from 'react'
import { Input } from '../custom-inputs/CustomInputs'
import { SearchNormal1 } from 'iconsax-react';
import { UserIcon, BellIcon } from '@heroicons/react/solid';

import "./search.css";

const SearchComp = ({clickProfile, clickNot}) => {

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
        <div className="search-input">
            <Input iconLeft={<SearchNormal1 />} inputPlaceholder={"Search"} />
        </div>
        <div className="profile-icons">
            <div className="icon-cont" onClick={profileClick}>
                <UserIcon className="user-icon" />
            </div>
            <div className="icon-cont" onClick={notClick}>
                <BellIcon className='bell-icon' />
            </div>
        </div>
    </div>
  )
}

export default SearchComp