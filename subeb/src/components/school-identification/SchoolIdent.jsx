import React, { useState } from "react";

import "./sch-ident.css";
import Back from "../custom-inputs/Back";
import Identification from "./Identification";
import SchXtics from "./SchXtics";
import Enrollment from "./Enrollment";
import Staff from "./Staff";
import Classrooms from "./Classrooms";
import Facilities from "./Facilities";
import PupilBook from "./PupilBook";
import TeachersQual from "./TeachersQual";
import FamilyLife from "./FamilyLife";
import Undertaking from "./Undertaking";

const SchoolIdent = () => {
  const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const [active, setActive] = useState("1");

  const clickTab = (item) => {
    setActive(item);
  };

  return (
    <div className="sch-ident">
      <Back />
      <div className="num-div">
        {numArr &&
          numArr.map((item, idx) => {
            return (
              <p
                className={active === item ? "active-num" : undefined}
                key={idx}
                onClick={() => clickTab(item)}
              >
                {item}
              </p>
            );
          })}
      </div>
      {active === "1" && <Identification />}
      {active === "2" && <SchXtics />}
      {active === "3" && <Enrollment />}
      {active === "4" && <Staff />}
      {active === "5" && <Classrooms />}
      {active === "6" && <Facilities />}
      {active === "7" && <PupilBook />}
      {active === "8" && <TeachersQual />}
      {active === "9" && <FamilyLife />}
      {active === "10" && <Undertaking />}
    </div>
  );
};

export default SchoolIdent;
