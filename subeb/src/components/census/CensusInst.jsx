import React from "react";

import "./census.css";
import SmsLanding from "../sms-landing/SmsLanding";
import { Button } from "../custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const CensusInst = () => {

    const navigate = useNavigate();

    const clickBtn = () => {
        navigate("/school-code")
    }

  return (
    <SmsLanding>
      <div className="census-inst">
        <h2>Instructions</h2>
        <p>
          1. Please ensure that, as an ENUMERATOR, you have two copies of this
          School Census Form for every school. After you have completed all
          forms, give one copy to the school for records and return a copy to
          your SUPERVISOR.
        </p>
        <p>
          2. Please read the instruction and the examples provided. Make sure
          that each section is completed carefully and that all your figures and
          totals are correct.
        </p>
        <div className="census-btn">
          <Button
            rightIcon={<ArrowRight />}
            btnClass={"btn-small"}
            btnText={"Continue"}
            btnClick={clickBtn}
          />
        </div>
      </div>
    </SmsLanding>
  );
};

export default CensusInst;
