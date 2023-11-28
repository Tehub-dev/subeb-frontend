import React, { useState } from "react";

import "./sch-ident.css";
import Back from "../custom-inputs/Back";
import Identification from "./Identification";
import SchXtics from "./SchXtics";
import Enrollment from "./Enrollment";
import Staff from "./Staff";

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
    </div>
  );
};

export default SchoolIdent;
