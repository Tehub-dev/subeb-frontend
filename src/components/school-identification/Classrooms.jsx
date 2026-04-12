import React from "react";

import "./sch-ident.css";
import "../census-table/census-table.css";
import { Button, CheckBox, Input } from "../custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";

const Classrooms = () => {
  const labels = [
    {
      label: "How many classrooms are there in the school?",
      input: <Input inputPlaceholder={"0 Number "} />,
    },
    {
      label:
        "Are any classes held outside (because classrooms are unusable or insufficient)?",
      check1: <CheckBox checks={true} />,
      check1text: "Yes",
      check2: <CheckBox checks={true} />,
      check2text: "No",
    },
    {
      label: "How many play rooms are there in the school for ECCD?",
      input: <Input inputPlaceholder={"0 Number "} />,
    },
  ];
  const info = [
    {
      infoLeft: "Present condition",
      infoRight: [
        "1– Good",
        "2– Needs minor repairs",
        "3– Needs major repairs",
        "4– Under construction",
        "5– Unusable",
      ],
    },
    {
      infoLeft: "Floor material",
      infoRight: ["1– Mud/Earth", "2– Concrete", "3– Wood", "4– Tile/Terrazzo"],
    },
    {
      infoLeft: "Wall material",
      infoRight: [
        "1– Mud",
        "2– Cement/Concrete",
        "3– Wood/Bamboo",
        "4– Burnt bricks",
        "5– Iron sheets",
        "6– Stone",
        "7– No walls / dwarf walls",
      ],
    },
    {
      infoLeft: "Roof material",
      infoRight: [
        "1– Mud",
        "2– Cement/Concrete",
        "3– Wood/Bamboo",
        "4– Ceramic tiles",
        "5– Iron sheets",
        "6– Asbestos",
        "7– No roof",
      ],
    },
    {
      infoLeft: "Seating",
      infoRight: [
        "Are there enough seats for the children in this classroom?",
        "1– Yes",
        "2– No",
      ],
    },
    {
      infoLeft: "Good blackboard",
      infoRight: [
        "Does the classroom have a good blackboard that children can read from?",
        "1– Yes",
        "2– No",
      ],
    },
  ];
  const newLabels = [
    {
      label: "Staff rooms",
      input: <Input inputPlaceholder={"0 Number"} />,
    },
    {
      label: "Office",
      input: <Input inputPlaceholder={"0 Number"} />,
    },
    {
      label: "Library",
      input: <Input inputPlaceholder={"0 Number"} />,
    },
    {
      label: "Laboratories",
      input: <Input inputPlaceholder={"0 Number"} />,
    },
    {
      label: "Store room",
      input: <Input inputPlaceholder={"0 Number"} />,
    },
    {
      label: "Others",
      input: <Input inputPlaceholder={"0 Number"} />,
    },
  ];

  return (
    <div className="identification">
      <h2>CLASSROOMS</h2>
      <div className="class-ident_table">
        {labels.map((item, idx) => {
          return (
            <div className="ident-table class-table">
              <div key={idx} className="left-table class-left_table">
                {
                  <p>
                    {item.label} <br />
                    <span>{item.span}</span>
                  </p>
                }
              </div>
              <div className="right-table xtics-right_table class-right_table">
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
                  </div>
                )}
                {item.input && (
                  <div className="xtics-item_inputs">
                    {item.input && item.input}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <div className="staff-info class-info">
          <p>Information on all classrooms/play rooms</p>
          <div className="info-body">
            <p>
              Record details for each individual classroom, regardless of
              whether or not they are in use.  Each row must correspond to a
              different classroom (not a block). If the number of classrooms is
              more than the space provided, photocopy this page and attach to
              the questionnaire.
            </p>
            {info.map((item, idx) => {
              return (
                <div key={idx} className="info-body_table">
                  <div className="info-body_left">
                    <p>{item.infoLeft}</p>
                  </div>
                  <div className="info-body_right">
                    {item.infoRight.map((item, idx) => {
                      return <p key={idx}>{item}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="class-table no-of_children-table">
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>Year of construction</td>
                <td>Present  condition</td>
                <td>Length in metres</td>
                <td>Width in metres</td>
                <td>Floor material</td>
                <td>Walls material</td>
                <td>Roof material</td>
                <td>Seating</td>
                <td>Writing board</td>
              </tr>
              <tr>
                <td>Ex.</td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={1976}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={1}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={7}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={5}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={3}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={3}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={3}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={1}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
                <td className="npc-input">
                  <input
                    type="text"
                    value={1}
                    style={{ caretColor: "transparent" }}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
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
                <td>2</td>
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
                <td>3</td>
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
                <td>4</td>
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
                <td>5</td>
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
                <td>6</td>
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
                <td>7</td>
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
                <td>8</td>
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
                <td>9</td>
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
                <td>10</td>
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
                <td>11</td>
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
                <td>12</td>
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
                <td>13</td>
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
                <td>14</td>
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
                <td>15</td>
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
                <td>16</td>
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
                <td>17</td>
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
                <td>18</td>
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

        <div className="rooms-class">
          <p>
            Number of rooms other than classrooms are there in the school by
            type of room
          </p>
          {newLabels.map((item, idx) => {
            return (
              <div className="ident-table">
                <div key={idx} className="left-table class-left_table">
                  <p>{item.label}</p>
                </div>
                <div className="right-table class-right_table">{item.input}</div>
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
    </div>
  );
};

export default Classrooms;
