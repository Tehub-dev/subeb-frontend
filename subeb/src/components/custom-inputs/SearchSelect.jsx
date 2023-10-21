import React, { useState } from "react";
import "./custom-inputs.css";
import { Input } from "./CustomInputs";
import { ArrowDown2 } from "iconsax-react";

const SearchSelect = ({
  formLabel,
  placeholder,
  dataChange,
  searching,
  setSearching,
  optionsArray,
  optionClick,
  formValue,
  clickDrop,
  formId
}) => {
  const [isSelect, setIsSelect] = useState("");
  const handleOptionClick = (item) => {
      setIsSelect(item.id);
      setSearching(false);
      if (optionClick){
        optionClick(item);
      }
  };
  
  const clickDropMenu = () => {
    if (clickDrop){
        clickDrop()
    }
  };

  return (
    <div>
      <Input
        inputLabel={formLabel}
        inputPlaceholder={placeholder}
        formChange={dataChange}
        formValue={formValue}
        formId={formId}
        icon={<ArrowDown2 onClick={clickDropMenu} style={{cursor: "pointer"}} />}
      />
      <div className={searching ? "dropdown-plate" : undefined}>
        {searching && optionsArray?.length === 0 && <p>nothing to show here</p>}
        {searching &&
          optionsArray.map((item, idx) => {
            return (
              <p
                className={isSelect === item.id ? "selected-item" : undefined}
                onClick={() => handleOptionClick(item)}
                key={idx}
                id={item.id}
                style={{cursor: "pointer"}}
              >
                {item.name}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SearchSelect;