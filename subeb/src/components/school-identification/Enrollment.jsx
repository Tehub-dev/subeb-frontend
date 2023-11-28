import React from "react";

import "./sch-ident.css";
import NoOfChid from "../census-table/NoOfChid";
import PrePrimary from "../census-table/PrePrimary";
import Primary from "../census-table/Primary";
import PryEnrol from "../census-table/PryEnrol";
import PupilFlow from "../census-table/PupilFlow";
import SpecialNeeds from "../census-table/SpecialNeeds";
import { ArrowRight } from "iconsax-react";
import { Button } from "../custom-inputs/CustomInputs";
import Orphans from "../census-table/Orphans";

const Enrollment = () => {
  return (
    <div className="identification">
      <h2>ENROLLMENT</h2>

      <div className="no-of_children">
        <NoOfChid />
        <PrePrimary />
        <Primary />
        <PryEnrol />
        <PupilFlow />
        <SpecialNeeds />
        <Orphans />
        <div className="enrol-btn">
          <Button
            btnClass={"btn-small"}
            rightIcon={<ArrowRight />}
            btnText={"Next"}
            // btnClick={clickBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
