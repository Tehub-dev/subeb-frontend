import React from "react";

import "./sch-ident.css";
import { Button } from "../custom-inputs/CustomInputs";
import { ArrowRight } from "iconsax-react";

const PupilBook = () => {
  return (
    <div className="identification">
      <h2>PUPIL/TEACHER BOOK</h2>
      <div className="no-of_children-table">
        <p>
          Number of core subject textbooks available to pupils provided by
          government.
        </p>
        <table>
          <thead>
            <tr>
              <td rowSpan={2} style={{ color: "#242424" }}>
                Subject Area
              </td>
              <td colSpan={7}>
                Number of Pupils Book Made Available for each Subject
              </td>
            </tr>
            <tr>
              <td>Pre-Primary</td>
              <td>PRY1</td>
              <td>PRY2</td>
              <td>PRY3</td>
              <td>PRY4</td>
              <td>PRY5</td>
              <td>PRY6</td>
            </tr>
            <tr>
              <td className="first-table_head-pupil">English</td>
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
              <td className="first-table_head-pupil">Mathematics</td>
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
              <td className="first-table_head-pupil">Social Studies </td>
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
              <td className="first-table_head-pupil">
                Basic Science / Technology
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
      <div className="no-of_children-table">
        <p>
          Number of core subject Teachers’ Textbooks available in the School
          provided by government.
        </p>
        <table>
          <thead>
            <tr>
              <td rowSpan={2} style={{ color: "#242424" }}>
                Subject Area
              </td>
              <td colSpan={7}>
                Number of Teachers Book Made Available for each Subject
              </td>
            </tr>
            <tr>
              <td>Pre-Primary</td>
              <td>PRY1</td>
              <td>PRY2</td>
              <td>PRY3</td>
              <td>PRY4</td>
              <td>PRY5</td>
              <td>PRY6</td>
            </tr>
            <tr>
              <td className="first-table_head-pupil">English</td>
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
              <td className="first-table_head-pupil">Mathematics</td>
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
              <td className="first-table_head-pupil">Social Studies </td>
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
              <td className="first-table_head-pupil">
                Basic Science / Technology
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
      <div className="no-of_children-table">
        <p>Care Giver Manuals provided by the School in  the current Academic Year</p>
        <table>
            <thead>
                <tr>
                    <td>Care Giver Manuals</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Care Giver Guide/Hand Book</td>
                    <td><input type="radio" /></td>
                    <td><input type="radio" /></td>
                </tr>
                <tr>
                    <td>National Policy on ECCDE/Pre-primary School</td>
                    <td><input type="radio" /></td>
                    <td><input type="radio" /></td>
                </tr>
                <tr>
                    <td>National Curriculum</td>
                    <td><input type="radio" /></td>
                    <td><input type="radio" /></td>
                </tr>
                <tr>
                    <td>Toy Making Manuals</td>
                    <td><input type="radio" /></td>
                    <td><input type="radio" /></td>
                </tr>
            </thead>
        </table>
      </div>
        <div className="enrol-btn">
          <Button
            btnClass={"btn-small"}
            rightIcon={<ArrowRight />}
            btnText={"Next"}
            // btnClick={clickBtn}
          />
        </div>
    </div>
  );
};

export default PupilBook;
