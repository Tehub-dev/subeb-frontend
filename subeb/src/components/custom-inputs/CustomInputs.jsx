import React, { useState } from "react";

import "./custom-inputs.css";
import { ArrowDown2 } from "iconsax-react";
import spin from "../../assets/images/spin.gif";

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
  error,
  phone, 
  cal
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
          type={password ? "password" : phone ? 'number' : cal ? "date" : "text"}
          placeholder={inputPlaceholder}
        />
        <img src={imgRight} alt={imgRightAlt} />
        {icon}
      </div>
      {error && <h5 style={{ color: "red" }}>{error}</h5>}
    </div>
  );
};

export const Button = ({
  btnClick,
  leftIcon,
  rightIcon,
  btnImg,
  btnText,
  btnClass,
  btnColor,
  error,
  loading,
}) => {
  const submitClick = (e) => {
    e.preventDefault();
    if (btnClick) {
      btnClick();
    }
  };

  return (
    <>
      <button
        className={!btnClass ? "btn" : btnClass}
        onClick={submitClick}
        style={{ color: btnColor }}
      >
        {loading ? (
          <div className="spinner"><img src={spin} alt="spin" /></div>
        ) : (
          <>
            {leftIcon}
            {btnText}
            {rightIcon}
            {btnImg && <img src={btnImg} alt="icon" />}
          </>
        )}
      </button>
      {error && <h5 style={{ color: "red", paddingTop: "10px" }}>{error}</h5>}
    </>
  );
};

export const SelectInput = ({
  selectBg,
  placeholder,
  setPlaceholder,
  opsArr,
  optionClick
}) => {
  const [showOps, setShowOps] = useState(false);

  const clickShow = () => {
    setShowOps(!showOps);
  };

  const clickOptions = (item) => {
    if(optionClick){
      optionClick(item)
    }
    if (setPlaceholder) {
      setPlaceholder(item.name);
      setShowOps(false);
    }
  };

  return (
    <div className="select-cont">
      <div className="select-input" style={{ background: selectBg }}>
        <div className="select-placeholder" onClick={clickShow}>
          <h2>{placeholder}</h2>
          <ArrowDown2 size={14} />
        </div>
      </div>
      <div className={opsArr && showOps ? "select-options" : "none"}>
        {opsArr &&
          opsArr.map((item, idx) => {
            return (
              <div
                key={idx}
                className="each-option"
                onClick={() => clickOptions(item)}
                style={{
                  borderLeft:
                    placeholder === item.name ? "4px solid #f08227" : undefined,
                }}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const CheckBox = ({ checkboxChange, id, checkValue, checked }) => {
  const handleCheckboxChange = (e) => {
    if (checkboxChange) {
      checkboxChange(e);
    }
  };
  return (
    <div>
      <label className="container">
        <input
          type="checkbox"
          id={id}
          value={checkValue}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
