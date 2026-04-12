import React from "react";

import "./sch-ident.css";
import { Button, Input } from "../custom-inputs/CustomInputs";
import SearchSelect from "../custom-inputs/SearchSelect";
import { ArrowRight } from "iconsax-react";

const Identification = () => {
  const labels = [
    {
      label: "School Name",
      input: <Input inputPlaceholder={"Enter School Name"} />,
    },
    {
      label: "Number and Street Name",
      input: <Input inputPlaceholder={"Enter Number and Street Name"} />,
    },
    {
      label: "Village or Town",
      input: <Input inputPlaceholder={"Enter Village or Town"} />,
    },
    {
      label: "Ward",
      input: <SearchSelect placeholder={"Select Ward"} />,
    },
    {
      label: "LGA",
      input: <SearchSelect placeholder={"Select LGA"} />,
    },
    {
      label: "State",
      input: <SearchSelect placeholder={"Select State"} />,
    },
    {
      label: "Telephone",
      input: <Input inputPlaceholder={"Enter Telephone"} />,
    },
    {
      label: "E-mail Address",
      input: <Input inputPlaceholder={"Enter E-mail Address"} />,
    },
  ];

  return (
    <div className="identification">
      <h2>SCHOOL IDENTIFICATION</h2>
      <h3>DO NOT USE ABBREVIATIONS.</h3>

      {labels.map((item, idx) => {
        return (
          <div className="ident-table">
            <div key={idx} className="left-table">
              <p>{item.label}</p>
            </div>
            <div className="right-table">{item.input}</div>
          </div>
        );
      })}
      <div className="ident-btn">
        <Button
          btnClass={"btn-small"}
          rightIcon={<ArrowRight />}
          btnText={"Next"}
        //   btnClick={clickBtn}
        />
      </div>
    </div>
  );
};

export default Identification;
