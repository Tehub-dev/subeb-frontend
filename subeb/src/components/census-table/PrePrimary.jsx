import React from "react";

import "./census-table.css";

const PrePrimary = () => {
  return (
    <div className="pre-primary no-of_children-table">
      <p>Pre-primary enrolment by age for the current school year.</p>
      <table>
        <thead>
          <th>
            <tr>
              <td className="first-table_head">Pupil age</td>
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
              <td className="first-table_head">No. of streams</td>
              <td colSpan={2} className="small-data_head"></td>
              <td colSpan={2} className="small-data_head"></td>
              <td colSpan={2} className="small-data_head"></td>
              <td colSpan={2} className="small-data_head"></td>
              <td colSpan={2} className="small-data_head"></td>
            </tr>
            <tr>
              <td className="first-table_head-border"></td>
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
              <td className="first-table_head">Below 3 Years</td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
            </tr>
            <tr>
              <td className="first-table_head">3 Years</td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
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
              <td className="first-table_head">4 Years</td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
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
            </tr>
            <tr>
              <td className="first-table_head">5 Years</td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
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
            </tr>
            <tr>
              <td className="first-table_head">Above 5 Years</td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
              <td
                className="npc-input"
                style={{ background: "#C0C0C0", border: "none" }}
              ></td>
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
            </tr>
            <tr>
              <td className="first-table_head">Total</td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
              <td className="npc-input">
                <input type="text" />
              </td>
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
  );
};

export default PrePrimary;
