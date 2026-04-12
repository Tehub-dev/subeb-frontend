import React from "react";

import "./sch-ident.css";
import { Button, CheckBox, Input } from "../custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";

const FamilyLife = () => {
  const labels = [
    {
      label: "School Rules, Regulations and Guidelines.",
      text: "Do the rules, regulations and guidelines in your school cover the following aspects of FLHE?",
      list: [
        {
          listText: "Physical safety in school",
          listCheck1: <CheckBox checks={true} />,
          listCheck1Text: "Yes",
          listCheck2: <CheckBox checks={true} />,
          listCheck2Text: "No",
        },
        {
          listText:
            "Stigma and discrimination towards staff or pupils/living with/affected by HIV, or based on sex, race or ethnicity, religion or any other grounds, sexual harassment and abuse.",
          listCheck1: <CheckBox checks={true} />,
          listCheck1Text: "Yes",
          listCheck2: <CheckBox checks={true} />,
          listCheck2Text: "No",
        },
        {
          listText:
            "Grievance/disciplinary procedures in case of breach of the regulations described in the rules and guidelines.",
          listCheck1: <CheckBox checks={true} />,
          listCheck1Text: "Yes",
          listCheck2: <CheckBox checks={true} />,
          listCheck2Text: "No",
        },
      ],
    },
    {
      text: "Has your school communicated information about the rules, regulations and guidelines to relevant stakeholders such as pupils, parents, teachers etc?",
      check1: <CheckBox checks={true} />,
      check1text: "Yes",
      check2: <CheckBox checks={true} />,
      check2text: "No",
    },
    {
      label: "Life Skills-based Family Life HIV/AIDS Education (FLHE)",
      text: "Did students of your school receive any form of life skills-based Family Life Health Education (FLHE) in the previous academic year?",
      check1: <CheckBox checks={true} />,
      check1text: "Yes",
      check2: <CheckBox checks={true} />,
      check2text: "No",
    },
    {
      label:
        "If yes, indicate which of these topics were covered in the FLHE programme:",
      list: [
        {
          listText:
            "Teaching on generic life skills (e.g. decision-making, communication, refusal skills).",
          listCheck1: <CheckBox checks={true} />,
          listCheck1Text: "Yes",
          listCheck2: <CheckBox checks={true} />,
          listCheck2Text: "No",
        },
        {
          listText:
            "Teaching on reproductive health/FLHE (e.g. teaching on human growth and development, family life, sexual abuse and transmission of STIs)",
          listCheck1: <CheckBox checks={true} />,
          listCheck1Text: "Yes",
          listCheck2: <CheckBox checks={true} />,
          listCheck2Text: "No",
        },
        {
          listText: "Teaching on HIV transmission and prevention.",
          listCheck1: <CheckBox checks={true} />,
          listCheck1Text: "Yes",
          listCheck2: <CheckBox checks={true} />,
          listCheck2Text: "No",
        },
      ],
    },
    {
      text: "Number of students that received/participated in Life Skills-based Family Life HIV/AIDS Education (FLHE) in the previous year? ",
      input: <Input inputPlaceholder={"0 Male"} />,
      input2: <Input inputPlaceholder={"0 Female"} />,
    },
    {
      label: "Orientation Process for Parents or Guardians of Pupils",
      text: "How many times have your school organised orientation programme for parents or guardians of pupils regarding FLHE programmes in the previous academic year?",
      text2: "At what forums were the orientation programmes provided?",
      input: <Input inputPlaceholder={"0 Number"} />,
      check1: <CheckBox checks={true} />,
      check1text: "PTA",
      check2: <CheckBox checks={true} />,
      check2text: "Open Day",
      check3: <CheckBox checks={true} />,
      check3text: "Special Session(s)",
    },
    {
      label: "Date of Last Orientation",
      text: "When was the last orientation Programme on FLHE conducted?",
      input: <Input inputPlaceholder={"DD"} />,
      input2: <Input inputPlaceholder={"MM"} />,
      input3: <Input inputPlaceholder={"YYYY"} />,
    },
    {
      label: "Life skills-based FLHE: Teacher training and teaching",
      text: "How many teachers in your school received formal training on FLHE?",
      input: <Input inputPlaceholder={"0 Male"} />,
      input2: <Input inputPlaceholder={"0 Female"} />,
    },
    {
      text: "How many teachers in your school who received formal training in the previous year also taught related topics on FLHE?",
      input: <Input inputPlaceholder={"0 Male"} />,
      input2: <Input inputPlaceholder={"0 Female"} />,
    },
  ];

  return (
    <div className="identification">
      <h2>Family Life HIV/AIDS Education (FLHE)</h2>
      <div className="family-table">
      {labels.map((item, idx) => {
        return (
          <div key={idx} className="ident-table">
            <div className="family-left_table">
              <h4>{item.label}</h4>
              <p>{item.text}</p>
              {item.list &&
                item.list.map((item, idx) => {
                  return (
                    <ul key={idx}>
                      <li>{item.listText}</li>
                    </ul>
                  );
                })}
            </div>
            <div className="family-right_table">
              {
                <div className="xtics-item_inputs">
                  {item.input && item.input}
                  {item.input2 && item.input2}
                  {item.input3 && item.input3}
                </div>
              }
              {item.check1 && (
                <div className="xtics-check_boxes">
                  {item.check1 && (
                    <p>
                      {item.check1}
                      {item.check1text}
                    </p>
                  )}
                  {item.check2 && (
                    <p>
                      {item.check2}
                      {item.check2text}
                    </p>
                  )}
                  {item.check3 && (
                    <p>
                      {item.check3}
                      {item.check3text}
                    </p>
                  )}
                </div>
              )}
              {item.list && item.list.map((item, idx) => {
                return(
                  
                <div key={idx} className="xtics-check_boxes family-list_check">
                {item.listCheck1 && (
                  <p>
                    {item.listCheck1}
                    {item.listCheck1Text}
                  </p>
                )}
                {item.listCheck2 && (
                  <p>
                    {item.listCheck2}
                    {item.listCheck2Text}
                  </p>
                )}
              </div>
                )
              })}
            </div>
          </div>
        );
      })}
      </div>
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

export default FamilyLife;
