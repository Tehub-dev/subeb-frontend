import React from "react";
import Popup from "./Popup";
import "./popup.css";
import { Button, Input } from "../custom-inputs/CustomInputs";
import { Add } from "iconsax-react";
import SearchSelect from "../custom-inputs/SearchSelect";

const AddSch = ({ display, setDisplay }) => {
  return (
    <Popup display={display} setDisplay={setDisplay}>
      <div className="lesson-notes_popup">
        <div className="add-sch_inputs">
          <Input
            inputLabel={"School Name"}
            inputPlaceholder={"Enter School name"}
            // formChange={handleDataChange}
            // formId={"firstName"}
            // formValue={data.firstName}
            // error={errFname}
          />
          <SearchSelect
            formLabel={"LGA"}
            placeholder={"Select LGA"}
            // formId={"school"}
            // optionsArray={schArr}
            // searching={schSearch}
            // setSearching={setSchSearch}
            // dataChange={selectChange}
            // optionClick={schOptClick}
            // formValue={schItem?.name || ""}
            // clickDrop={schDd}
            // error={errSch}
          />
          <Input
            inputLabel={"Address"}
            inputPlaceholder={"Enter Address"}
            // formChange={handleDataChange}
            // formId={"firstName"}
            // formValue={data.firstName}
            // error={errFname}
          />
        </div>
        <div className="add-sch_btn">
          <Button
            btnText={"Add School"}
            btnClass={"btn-small"}
            rightIcon={<Add />}
            // btnClick={isEdit ? editAdmin : addAdmin}
            // loading={isLoading}
          />
        </div>
      </div>
    </Popup>
  );
};

export default AddSch;
