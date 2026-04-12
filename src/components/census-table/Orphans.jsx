import React from 'react';

import "./census-table.css";

const Orphans = () => {
  return (
    <div className="primary no-of_children-table">
      <p>Number of orphans By Grade</p>

      <table>
        <thead>
            <tr>
              <td className="first-table_head small-table_head" rowSpan={2}>Type</td>
              <td colSpan={2} className="small-data_head">
              ECCD (KG1-KG2)
              </td>
              <td colSpan={2} className="small-data_head">
              NURS (NR1-NR2)
              </td>
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
              <td>Male</td>
              <td>Female</td>
              <td>Male</td>
              <td>Female</td>
            </tr>
            <tr>
              <td className="first-table_head small-table_head">
              Lost Mother
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
              <td className="first-table_head small-table_head">Lost Father</td>
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
              <td className="first-table_head small-table_head">Lost Both</td>
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

export default Orphans