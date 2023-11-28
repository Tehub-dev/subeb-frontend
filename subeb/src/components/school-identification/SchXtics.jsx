import React from 'react';

import "./sch-ident.css";
import { Button, CheckBox, Input } from "../custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";

const SchXtics = () => {

    const labels = [
      {
        label: "Year of Establishment",
        input: <Input cal={true} dateText={"Select Year of Establishment "} />,
      },
      {
        label: "Location",
        check1: <CheckBox checks={true} />,
        check1text: "Urban",
        check2: <CheckBox checks={true} />,
        check2text: "Rural",
      },
      {
        label: "Levels of Education Offered",
        check1: <CheckBox checks={true} />,
        check1text: "Pre-primary only",
        check2: <CheckBox checks={true} />,
        check2text: "Pre-primary and Primary",
        check3: <CheckBox checks={true} />,
        check3text: "Primary only",
      },
      {
        label: "Type of School",
        span: "Tick only one to describe school",
        check1: <CheckBox checks={true} />,
        check1text: "Regular",
        check2: <CheckBox checks={true} />,
        check2text: "islamiyya integrated",
        check3: <CheckBox checks={true} />,
        check3text: "Nomadic (Migrants)",
        check4: <CheckBox checks={true} />,
        check4text: "Special needs",
      },
      {
        label: "Shifts:",
        span: "Does the school operate shift system?",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
      },
      {
        label: "Shared Facilities ",
        span: "Does the school share facilities/Teachers/premises with any other school? If Yes. How many schools are sharing facilities:",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
        input: <Input inputPlaceholder={"0"} />,
      },
      {
        label: "Multi-grade Teaching",
        span: "Does any teacher teach more than one class at the same time?",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
      },
      {
        label: "School: Average Distance from Catchment communities",
        span: "What is average distance of school from its catchment areas?",
        input: <Input inputPlaceholder={"kilometres (Enter 0 if within 1 km)"} />,
      },
      {
        label: "School: Distance from LGA",
        span: "How many kilometres is the school away from LGA HQ?",
        input: <Input inputPlaceholder={"kilometres (Enter 0 if within 1 km)"} />,
      },
      {
        label: "Pupils: Distance from School",
        span: "How many pupils live further than 3km from the school?",
        input: <Input inputPlaceholder={"0"} />,
      },
      {
        label: "Pupils: Boarding",
        span: "How many pupils board at the school premises?",
        input: <Input inputPlaceholder={"0 Male"} />,
        input2: <Input inputPlaceholder={"0 Female"} />,
      },
      {
        label: "School Development Plan (SDP)",
        span: "Did the school prepare SDP in the last school year?",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
      },
      {
        label: "School Based Management Committee (SBMC)",
        span: "Does the school have SBMC, which met at least once last year?",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
      },
      {
        label: "Parent-Teacher Association (PTA) / Parents' Forum (PF)/ Mother’s Association",
        span: "Does the school have PTA / PF / MA, which met at least once last year?",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
      },
      {
        label: "Number of inspection Visit in last academic year",
        input: <Input inputPlaceholder={"0 Federal"} />,
        input2: <Input inputPlaceholder={"0 State"} />,
        input3: <Input inputPlaceholder={"0 LGA"} />,
      },
      {
        label: "Authority of Last Inspection",
        span: "Which authority conducted the last inspection visit?",
        input: <Input inputPlaceholder={"Enter Authority of Last Inspectiom"} />,
      },
      {
        label: "Conditional Cash Transfer",
        span: "How many pupils benefitted from Conditional Cash Transfer?",
        input: <Input inputPlaceholder={"0 Number"} />,
      },
      {
        label: "School Grants",
        span: "Has your school ever received grants in the last academic year?",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
      },
      {
        label: "Security Guard",
        span: "Does the school have a security guard?",
        check1: <CheckBox checks={true} />,
        check1text: "Yes",
        check2: <CheckBox checks={true} />,
        check2text: "No",
      },
      {
        label: "Security Guard",
        span: "Does the school have a security guard?",
        check1: <CheckBox contain={"cont"} checks={"check"} />,
        check1text: "Federal",
        check2: <CheckBox checks={true} />,
        check2text: "State",
        check3: <CheckBox checks={true} />,
        check3text: "LGEA",
        check4: <CheckBox checks={true} />,
        check4text: "Community",
      },
    ];

  return (
    <div className="identification">
      <h2>SCHOOL CHARACTERISTICS</h2>
      <h3>Answer every question and tick only one box in each section.</h3>

      {labels.map((item, idx) => {
        return (
          <div className="ident-table">
            <div key={idx} className="left-table">
              {<p>{item.label} <br /><span>{item.span}</span></p>}
            </div>
            <div className="right-table xtics-right_table">
                {item.check1 && <div className="xtics-check_boxes">
                    {item.check1 && <p>{item.check1}{item.check1text}</p>}
                    {item.check2 && <p>{item.check2}{item.check2text}</p>}
                    {item.check3 && <p>{item.check3}{item.check3text}</p>}
                    {item.check4 && <p>{item.check4}{item.check4text}</p>}
                </div>}
                {item.input2 || item.input3 || item.input && <div className="xtics-item_inputs">
                    {item.input && item.input}
                    {item.input2 && item.input2}
                    {item.input3 && item.input3}
                </div>}
            </div>
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
  )
}

export default SchXtics