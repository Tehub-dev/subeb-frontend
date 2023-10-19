import React from 'react'
import { Input } from '../custom-inputs/CustomInputs'
import { SearchNormal1 } from 'iconsax-react';
import { UserIcon, BellIcon } from '@heroicons/react/solid';

import "./search.css";

const SearchComp = () => {
  return (
    <div className='search'>
        <div className="search-input">
            <Input iconLeft={<SearchNormal1 />} inputPlaceholder={"Search"} />
        </div>
        <div className="profile-icons">
            <div className="icon-cont">
                <UserIcon className="user-icon" />
            </div>
            <div className="icon-cont">
                <BellIcon className='bell-icon' />
            </div>
        </div>
    </div>
  )
}

export default SearchComp