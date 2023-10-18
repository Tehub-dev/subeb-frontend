import React from "react";

import "./custom-inputs.css";

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
