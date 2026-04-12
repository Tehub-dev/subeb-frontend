import React, { useRef, useState } from "react";

import "./school-code.css";
import Back from "../custom-inputs/Back";
import SingleInputs from "../custom-inputs/SingleInputs";
import { Button } from "../custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const SchoolCd = () => {

    const navigate = useNavigate();

    const clickBtn = () => {
        navigate("/school-identification");
    }

    const [digits, setDigits] = useState(["", "", "", "", "", "", "", "", "", ""]);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const [digitsNorth, setDigitsNorth] = useState(["", "", "", "", "", "", "", "", "", ""]);
    const inputRefsNorth = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const [digitsEast, setDigitsEast] = useState(["", "", "", "", "", "", "", "", "", ""]);
    const inputRefsEast = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const [digitsElevate, setDigitsElevate] = useState(["", "", "", ""]);
    const inputRefsElevate = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  return (
    <div className="sch-code">
      <Back />
      <div className="enumerator">
        <h2>FOR ENUMERATOR ONLY: Was this school in the school list?</h2>
        <div className="enumerator-btn">
          <p className="yes">Yes</p>
          <p className="no">No</p>
        </div>
      </div>
      <div className="enum-table">
        <table>
          <tbody>
            <tr>
              <td className="enum-first_td">School Code</td>
              <SingleInputs digits={digits} setDigits={setDigits} inputRefs={inputRefs} />
            </tr>
            <tr>
              <td className="enum-first_td">School Coordinates</td>
              <tr>
                <td className="sub-td">Elevation (Meter)</td>
                <SingleInputs digits={digitsElevate} setDigits={setDigitsElevate} inputRefs={inputRefsElevate} />
              </tr>
              <tr>
                <td className="sub-td">Latitude North</td>
                <SingleInputs digits={digitsNorth} setDigits={setDigitsNorth} inputRefs={inputRefsNorth} />
              </tr>
              <tr>
                <td className="sub-td">Longitude East</td>
                <SingleInputs digits={digitsEast} setDigits={setDigitsEast} inputRefs={inputRefsEast} />
              </tr>
            </tr>
          </tbody>
        </table>
        <div className="enum-btn">
            <Button btnClass={"btn-small"} rightIcon={<ArrowRight />} btnText={"Continue"} btnClick={clickBtn} />
        </div>
      </div>
    </div>
  );
};

export default SchoolCd;
