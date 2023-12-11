import React from 'react';

import "./census-table.css";

const PupilFlow = () => {
  return (
    <div className="primary no-of_children-table">
      <p>Pupil Flow in the Current Academic Year Primary School.</p>

      <table>
        <thead>
            <tr>
              <td className="first-table_head small-table_head" rowSpan={2}>Pupil Flow</td>
              <td colSpan={2} className="small-data_head">
                PRY1
              </td>
              <td colSpan={2} className="small-data_head">
                PRY2
              </td>
              <td colSpan={2} className="small-data_head">
                PRY3
              </td>
              <td colSpan={2} className="small-data_head">
                PRY4
              </td>
              <td colSpan={2} className="small-data_head">
                PRY5
              </td>
              <td colSpan={2} className="small-data_head">
                PRY6
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>Female</td>
              <td>Male</td>
              <td>Female</td>
              <td>Male</td>
              <td>Female</td>
              <td>Male</td>
              <td>Female</td>
              <td>Male</td>
              <td>Female</td>
              <td>Male</td>
              <td>Female</td>
            </tr>
            <tr>
              <td className="first-table_head small-table_head">
              Dropout
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
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td className="first-table_head small-table_head">Transfer In</td>
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
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td className="first-table_head small-table_head">Transfer Out</td>
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
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td className="first-table_head small-table_head">Promoted</td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
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
  )
}

export default PupilFlow