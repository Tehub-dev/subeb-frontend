import React from 'react';

import "./census-table.css";

const NoOfChid = () => {
  return (
            
    <div className="no-of_children-table">
    <p>
      Number of Children with Birth Certificates in Pre-primary & Primary 1.
    </p>
      <table>
        <thead>
          <th>
            <tr>
              <td className="first-table_head remove-border" rowSpan={3}>
                How many children were enrolled with Birth certificates
              </td>
              <td className="second-table_head" colSpan={10}>
                Pre-primary
              </td>
              <td className="third-table_head" colSpan={2} rowSpan={2}>
                Primary 1
              </td>
            </tr>
            <tr>
              {/* <td className="first-table_head-border"></td> */}
              <td colSpan={2} className="small-data_head">
                Kindergarten 1/ECCD
              </td>
              <td colSpan={2} className="small-data_head">
                Kindergarten 2/ECCD
              </td>
              <td colSpan={2} className="small-data_head">
                Nursery 1
              </td>
              <td colSpan={2} className="small-data_head">
                Nursery 2
              </td>
              <td colSpan={2} className="small-data_head">
                Nursery 3 / One Year pre-primary
              </td>
            </tr>
            <tr>
              {/* <td className="first-table_head-border"></td> */}
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
              <td className="first-table_head">
                National Population Commission
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
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
              <td className="first-table_head">Others</td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
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
          </th>
        </thead>
      </table>
    </div>
  )
}

export default NoOfChid