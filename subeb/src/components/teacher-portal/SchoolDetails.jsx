import React, { useState } from 'react';

import "./teacher.css";
import AuthHead from '../auth-head/AuthHead';
import SearchSelect from '../custom-inputs/SearchSelect';

const SchoolDetails = () => {
    
    const [searching, setSearching] = useState(false);
    
    const optionsArr = [
        {
            id: "1",
            name: "akure"
        },
        {
            id: "2",
            name: "irele"
        },
        {
            id: "3",
            name: "ifedore"
        },
    ];
    const [array, setArray] = useState(optionsArr);
    const [item, setItem] = useState("");

    const selectChange = (e) => {
        if (e.target.value){
            setSearching(true);
            setItem("");
            setArray(optionsArr.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
        } else{
            setSearching(false);
        }
    };

    const optionClick = (item) =>{
        setItem(item);
    };
    const clickDropDown = () =>{
        setArray(optionsArr);
        setSearching(!searching)
    };


  return (
    <div>
        <AuthHead title={"School Details"} text={"Register as a teacher on ondo state school management system"} /> 
        <form className="teacher-form">
            <SearchSelect formLabel={"School LGA"} placeholder={"Search School LGA"} optionsArray={array} searching={searching} setSearching={setSearching} dataChange={selectChange} optionClick={optionClick} formValue={item.name} clickDrop={clickDropDown} />
            <SearchSelect formLabel={"School"} placeholder={"Search School"} />
            <SearchSelect formLabel={"Class"} placeholder={"Search Class"} />
            <div className="form-btn">
                <button className="btn">Register</button>
            </div>
        </form>    
    </div>
  )
}

export default SchoolDetails