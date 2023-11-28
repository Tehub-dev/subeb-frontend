import React from "react";
import SmsLanding from "../../../components/sms-landing/SmsLanding";
import logo from "../../../assets/images/coa.png"

import "../../../components/census/census.css";
import { Button } from "../../../components/custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const CensusLand = () => {

    const navigate = useNavigate();

    const clickBtn = () => {
        navigate("/census-instructions")
    }

  return (
    <SmsLanding>
      <div className="census-lp">
        <img src={logo} alt="logo" />
        <h1>FEDERAL MINISTRY OF EDUCATION</h1>
        <h2>2020/2021 SCHOOL CENSUS FORM PRE-PRIMARY AND PRIMARY EDUCATION PUBLIC SCHOOLS</h2>
        <Button rightIcon={<ArrowRight />} btnClass={"btn-small"} btnText={"Get Started"} btnClick={clickBtn} />
      </div>
    </SmsLanding>
  );
};

export default CensusLand;
