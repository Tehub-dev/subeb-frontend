import React from 'react';
import Popup from './Popup';
import { Button, Input } from '../custom-inputs/CustomInputs';
import SearchSelect from '../custom-inputs/SearchSelect';
import { Add } from 'iconsax-react';

const AddSchAdmin = ({ display, setDisplay }) => {
  return (
    <Popup display={display} setDisplay={setDisplay}>
        <div className='lesson-notes_popup'>
            <div className="sch-admin_input">
                <Input inputLabel={"First Name"} inputPlaceholder={"Enter First name"} />
                <Input inputLabel={"Last Name"} inputPlaceholder={"Enter Last name"} />
                <Input inputLabel={"Phone Number"} inputPlaceholder={"Enter Phone Number"} />
                <SearchSelect formLabel={"LGA"} placeholder={"Select LGA"} />
                <SearchSelect formLabel={"School"} placeholder={"Select School"} />
            </div>
            <div className="sch-admin_btn">
                <Button btnText={"Add School Admin"} btnClass={"btn-small"} rightIcon={<Add />} />
            </div>
        </div>
    </Popup>
  )
}

export default AddSchAdmin