import React, { useState } from "react";

import "./custom-inputs.css";
import { ArrowDown2 } from "iconsax-react";

export const Input = ({
  inputLabel,
  inputPlaceholder,
  imgLeftAlt,
  imgleft,
  imgRight,
  imgRightAlt,
  icon,
  password,
  formChange,
  formId,
  formValue,
  iconLeft,
}) => {
  const inputChange = (e) => {
    if (formChange) {
      formChange(e);
    }
  };

  return (
    <div className="custom-input">
      <label>{inputLabel}</label>
      <div className="custom-input_input">
        {iconLeft}
        <img src={imgleft} alt={imgLeftAlt} />
        <input
          onChange={(e) => inputChange(e)}
          id={formId}
          value={formValue}
          type={password ? "password" : "text"}
          placeholder={inputPlaceholder}
        />
        <img src={imgRight} alt={imgRightAlt} />
        {icon}
      </div>
    </div>
  );
};

export const Button = ({ btnClick, leftIcon, rightIcon, btnImg, btnText, btnClass, btnColor }) => {
  return (
    <button className={!btnClass ? "btn" : btnClass} onClick={btnClick} style={{color: btnColor}}>
      {leftIcon}
      {btnText}
      {rightIcon}
      {btnImg && <img src={btnImg} alt="icon" />}
    </button>
  );
};

export const SelectInput = ({selectBg, placeholder, setPlaceholder, opsArr}) => {

  const [showOps, setShowOps] = useState(false);

  const clickShow = () => {
    setShowOps(!showOps);
  };

  const clickOptions = (item) => {
    if (setPlaceholder){
      setPlaceholder(item);
      setShowOps(false);
    }
  }

  return (
    <div className="select-cont">
      <div className="select-input" style={{background: selectBg}}>
        <div className="select-placeholder" onClick={clickShow}>
          <h2>{placeholder}</h2>
          <ArrowDown2 size={14} />
        </div>
      </div>
      <div className={opsArr && showOps ? "select-options" : "none"}>
        {opsArr &&
          opsArr.map((item, idx) => {
            return <div key={idx} className="each-option" onClick={()=> clickOptions(item)} style={{borderLeft: placeholder === item ? "4px solid #f08227" : undefined}}><p>{item}</p></div>;
          })}
      </div>
    </div>
  );
};
