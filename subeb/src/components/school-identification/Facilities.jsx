import React from "react";

import "./sch-ident.css";
import "../census-table/census-table.css";
import { Button, CheckBox, Input } from "../custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";
import RadioOptions from "../census-table/RadioOptions";

const Facilities = () => {
  const labels = [
    {
      label: "Source of safe drinking water",
      span: "Is there a source of water in the school that is safe to drink and in sufficient quantity to provide water every day for pupils? If there is more than one source, select only the primary source.",
      span2: "select only the primary source.",
      check1: <CheckBox checks={true} />,
      check1text: "Pipe borne Water",
      check2: <CheckBox checks={true} />,
      check2text: "Borehole",
      check3: <CheckBox checks={true} />,
      check3text: "Well",
      check4: <CheckBox checks={true} />,
      check4text: "No Source of Safe Water",
      check5: <CheckBox checks={true} />,
      check5text: "Other",
      input: <Input inputPlaceholder={"Specify "} />,
    },
  ];
  const otherLabels = [
    {
      label: "Shared Facilities",
      span: "If your school share facilities,specify the facilities shared by separate  school/levels by ticking the appropriate box.",
      check1: <CheckBox checks={true} />,
      check1text: "Toilets",
      check2: <CheckBox checks={true} />,
      check2text: "Classrooms",
      check3: <CheckBox checks={true} />,
      check3text: "Computers",
      check4: <CheckBox checks={true} />,
      check4text: "Library",
      check5: <CheckBox checks={true} />,
      check5text: "Others",
      check6: <CheckBox checks={true} />,
      check6text: "Water Source(s)",
      check7: <CheckBox checks={true} />,
      check7text: "Play Ground(s)",
      check8: <CheckBox checks={true} />,
      check8text: "Laboratories",
      check9: <CheckBox checks={true} />,
      check9text: "Wash hand facility",
    },
  ];
  const healthOptions = [
    {
      label: "Health Clinic",
      input: <input type="radio" />,
    },
    {
      label: "First Aid Kit",
      input: <input type="radio" />,
    },
    {
      label: "No Health facility ",
      input: <input type="radio" />,
    },
  ];
  const playFacilities = [
    {
      label: "Merry Go Round",
      input: <CheckBox />,
    },
    {
      label: "Swing",
      input: <CheckBox />,
    },
    {
      label: "Ladder Slide",
      input: <CheckBox />,
    },
    {
      label: "Ladder Slide",
      input: <CheckBox />,
    },
    {
      label: "Indoor Play Activity Materials",
      input: <CheckBox />,
    },
  ];
  const learningMat = [
    {
      label: "Charts",
      input: <CheckBox />,
    },
    {
      label: "Posters",
      input: <CheckBox />,
    },
    {
      label: "Toys",
      input: <CheckBox />,
    },
    {
      label: "Audio/Visual (Radio, TV, DVD)",
      input: <CheckBox />,
    },
    {
      label: "Word Puzzle Box",
      input: <CheckBox />,
    },
    {
      label: "Caregiver Guide",
      input: <CheckBox />,
    },
  ];
  const playOptions = [
    {
      label: "Yes but no rugs or sand floor",
      input: <input type="radio" />,
    },
    {
      label: "Yes with Play Rugs",
      input: <input type="radio" />,
    },
    {
      label: "Yes with Sand Floor",
      input: <input type="radio" />,
    },
    {
      label: "No Play Room",
      input: <input type="radio" />,
    },
  ];
  const fenceOptions = [
    {
      label: "In Good Condition",
      input: <input type="radio" />,
    },
    {
      label: "Needs Minor Repair",
      input: <input type="radio" />,
    },
    {
      label: "Needs Major Repair",
      input: <input type="radio" />,
    },
    {
      label: "No Fence or Wall",
      input: <input type="radio" />,
    },
  ];
  const radioOptions = [
    {
      label: "PHCN/NEPA",
      input: <input type="radio" />,
    },
    {
      label: "Generator",
      input: <input type="radio" />,
    },
    {
      label: "Solar",
      input: <input type="radio" />,
    },
    {
      label: "No source of Power",
      input: <input type="radio" />,
    },
  ];

  const facilitiesRadio = [
    {
      label: "Sources of power",
      span: "Is there a source of power for the school?",
      input: <RadioOptions radioOptions={radioOptions} />,
    },
    {
      label: "Health facility",
      span: "Does the school have a health facility?",
      input: <RadioOptions radioOptions={healthOptions} />,
    },
    {
      label: "Fence/Wall",
      span: "Does the school have a fence or wall around it?",
      input: <RadioOptions radioOptions={fenceOptions} />,
    },
    {
      label: "Play Room",
      span: "Does the school have a playroom for ECCD?",
      input: <RadioOptions radioOptions={playOptions} />,
    },
    {
      label: "Play Facilities",
      span: "Does the school have play facilities for ECCD?",
      text: "Tick all that apply",
      input: (
        <RadioOptions radioCheckbox={true} radioOptions={playFacilities} />
      ),
    },
    {
      label: "Learning Materials",
      span: "Does the school have learning materials ECCD?",
      text: "Tick all that apply",
      input: <RadioOptions radioCheckbox={true} radioOptions={learningMat} />,
    },
  ];
  return (
    <div className="identification">
      <h2>FACILITIES</h2>

      {labels.map((item, idx) => {
        return (
          <div className="fac-table">
            <p>Please tick source of drinking water available in your school</p>
            <div className="ident-table class-table">
              <div key={idx} className="left-table fac-left_table">
                {
                  <p style={{ color: "#242424" }}>
                    {item.label} <br />
                    <span>{item.span}</span>{" "}
                    <span style={{ color: "#242424" }}>{item.span2}</span>
                  </p>
                }
              </div>
              <div className="right-table xtics-right_table fac-right_table">
                {item.check1 && (
                  <div className="xtics-check_boxes fac-check">
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
                    {item.check4 && (
                      <p>
                        {item.check4}
                        {item.check4text}
                      </p>
                    )}
                    {item.check5 && (
                      <p>
                        {item.check5}
                        {item.check5text}
                      </p>
                    )}
                    {item.input && <p>{item.input && item.input}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <div className="total-fac_cont">
        <p>
          Please enter the total number of facilities available in your School
        </p>
        <div className="total-fac">
          <div className="total-fac_left">
            <p>
              Facilities available <br />{" "}
              <span>
                How many useable facilities does the school have? (If the
                facilities are not available, write zero){" "}
              </span>
            </p>
            <p>Please note only figure is required here</p>
          </div>
          <div className="total-fac_right no-of_children-table">
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>Useable</td>
                  <td>Not useable</td>
                </tr>
                <tr>
                  <td>Toilets</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Computers</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Water Source(s)</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Laboratories</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Classrooms</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Library</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Play Ground(s)</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Wash hand facility</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                  <td className="npc-input">
                    <input type="text" />
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      {otherLabels.map((item, idx) => {
        return (
          <div className="fac-table">
            <p>Please tick source of drinking water available in your school</p>
            <div className="ident-table class-table">
              <div key={idx} className="left-table fac-left_table">
                {
                  <p style={{ color: "#242424" }}>
                    {item.label} <br />
                    <span>{item.span}</span>{" "}
                    <span style={{ color: "#242424" }}>{item.span2}</span>
                  </p>
                }
              </div>
              <div className="right-table xtics-right_table fac-right_table">
                {item.check1 && (
                  <div className="xtics-check_boxes fac-check">
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
                    {item.check4 && (
                      <p>
                        {item.check4}
                        {item.check4text}
                      </p>
                    )}
                    {item.check5 && (
                      <p>
                        {item.check5}
                        {item.check5text}
                      </p>
                    )}
                    {item.check6 && (
                      <p>
                        {item.check6}
                        {item.check6text}
                      </p>
                    )}
                    {item.check7 && (
                      <p>
                        {item.check7}
                        {item.check7text}
                      </p>
                    )}
                    {item.check8 && (
                      <p>
                        {item.check8}
                        {item.check8text}
                      </p>
                    )}
                    {item.check9 && (
                      <p>
                        {item.check9}
                        {item.check9text}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <div className="useable-toilets">
        <p>
          Please enter the total number of useable toilets units by each type
          below. Count the number of toilet units, not toilet blocks.
          <br /> Number of useable toilets units by each type of toilet.
        </p>
        <div className="useable-toilets_table no-of_children-table">
          <table>
            <thead>
              <tr>
                <td
                  rowSpan={2}
                  className="useable-toilet_first-td staff-table_head"
                ></td>
                <td colSpan={3}>Used only by pupils</td>
                <td colSpan={3}>Used only by teachers</td>
                <td colSpan={3}>Used by pupils and teachers</td>
                <td></td>
              </tr>
              <tr>
                <td className="smaller-td">Male only</td>
                <td className="smaller-td">Female only</td>
                <td className="smaller-td">Mixed</td>
                <td className="smaller-td">Male only</td>
                <td className="smaller-td">Female only</td>
                <td className="smaller-td">Mixed</td>
                <td className="smaller-td">Male only</td>
                <td className="smaller-td">Female only</td>
                <td className="smaller-td">Mixed</td>
                <td className="smaller-td">Total</td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  Pit
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  Bucket system
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  Water flush
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  Others
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="facilities-radio no-of_children-table">
        <table>
          <thead>
            {facilitiesRadio.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td className="radio-left">
                    <p>
                      {item.label} <br /> <span>{item.span}</span>
                    </p>
                    <h3>{item.text}</h3>
                  </td>
                  <td className="radio-right">{item.input}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>

      <div className="useable-toilets additional-classroom">
        <p>
          Additional Classrooms Information <br /> Please indicate seating
          available by grade. Only count seats where both a seat and a writing
          desk are available. <br /> Only seats and desks owned by the school
          should be counted.
        </p>
        <div className="useable-toilets_table no-of_children-table">
          <table>
            <thead>
              <tr>
                <td
                  rowSpan={2}
                  className="useable-toilet_first-td staff-table_head"
                >
                  Class
                </td>
                <td colSpan={6}>Seating available</td>
              </tr>
              <tr>
                <td className="">1 Seater</td>
                <td className="">2 Seater</td>
                <td className="">3 Seater</td>
                <td className="">4 Seater</td>
                <td className="">5 Seater</td>
                <td className="">6 Seater</td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  ECCD
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  Pre-primary
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  PRY1
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  PRY2
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  PRY3
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  PRY4
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  PRY5
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="useable-toilet_first-td staff-table_head">
                  PRY6
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
                <td className="npc-input">
                  <input type="text" />
                </td>
              </tr>
            </thead>
          </table>
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
    </div>
  );
};

export default Facilities;
