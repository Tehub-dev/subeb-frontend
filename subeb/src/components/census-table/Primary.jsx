import React from 'react';

import "./census-table.css";

const Primary = () => {
  return (
    <div className="primary no-of_children-table">
    <p>New entrants in primary 1.</p>
    <table>
      <thead>
          <tr>
            <td className="empty-table_head "></td>
            <td colSpan={2} className="small-data_head">
            New entrants in PRY1
            </td>
            <td colSpan={2} className="small-data_head">
            How many of the new entrants attended any early childhood education programme
            </td>
          </tr>
          <tr>
            <td className="first-table_head empty-table_head">Pupil age</td>
            <td>Male</td>
            <td>Female</td>
            <td>Male</td>
            <td>Female</td>
          </tr>
          <tr>
            <td className="first-table_head empty-table_head">Below 6 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">6 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">7 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">8 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">9 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">10 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">11 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">Above 11 Years</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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
            <td className="first-table_head empty-table_head">Total</td>
            <td className="npc-input">
              <input type="text" />
            </td>
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

export default Primary