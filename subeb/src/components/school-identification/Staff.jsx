import React from "react";

import "./sch-ident.css";
import "../census-table/census-table.css";

const Staff = () => {
  const info = [
    {
      infoLeft: "Gender",
      infoRight: ["M – Male", "F – Female"],
    },
    {
      infoLeft: "Type of staff",
      infoRight: [
        "1– Head teacher",
        "2– Assistant head teacher",
        "3– Teacher",
        "4– Pre-primary teacher",
        "5– Care giver",
        "6– Other non-teaching staff",
      ],
    },
    {
      infoLeft: "Source of salary",
      infoRight: [
        "1– Federal Government - FTS",
        "2– State Government - On this school's payroll",
        "3– State Government - On another school's payroll",
      ],
    },
    {
      infoLeft: "Present",
      infoRight: [
        "1– Present or temporarily absent",
        "2– Absent for more than 1 month – Maternity leave",
        "3– Absent for more than 1 month – Sick leave",
        "4– Absent for more than 1 month – Training",
        "5– Absent for more than 1 month – Unauthorised",
      ],
    },
    {
      infoLeft: "Academic qualification",
      infoRight: [
        "1– Below SSCE",
        "2– SSCE/WASC",
        "3 – OND / Diploma",
        "4– NCE",
        "5– Degree / HND / Graduate",
        "6– PhD/Masters degree",
      ],
    },
    {
      infoLeft: "Teaching qualification ",
      infoRight: [
        "1– NCE",
        "2– PGDE",
        "3– B.Ed. or equivalent",
        "4– M.Ed. or equivalent",
        "5– Grade II or equivalent ",
        "6– None",
      ],
    },
    {
      infoLeft: "Subject of qualification",
      infoRight: [
        "0– General primary ",
        "1– English ",
        "2– Mathematics",
        "3– Social studies",
        "4– Basic science",
        "5– Hausa/Igbo/Yoruba",
        "6– Care giving",
        "8– Other",
        "9– None",
      ],
    },
    {
      infoLeft: "Main subject taught",
      infoRight: [
        "0– General primary ",
        "1– English ",
        "2– Mathematics",
        "3– Social studies",
        "4– Basic science",
        "5– Hausa/Igbo/Yoruba",
        "6– Care giving",
        "8– Other",
        "9– None",
      ],
    },
    {
      infoLeft: "Teaching type",
      infoRight: ["1– Full-time", "2– Part-time"],
    },
  ];

  return (
    <div className="identification">
      <h2>STAFF</h2>

      <div className="staff-table no-of_children-table">
        <table>
          <thead>
            <th>
              <tr>
                <td className=""></td>
                <td className="">Male</td>
                <td className="">Female</td>
                <td className="">Total</td>
              </tr>
              <tr>
                <td className="staff-table_head">
                  How many non-teaching staff are working at the school? 
                </td>
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
                <td className="staff-table_head">
                  How many teachers are working at the school regardless of
                  whether they are currently present or on course or absent?
                </td>
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
                <td className="staff-table_head">
                  How many Care Givers are in the School for ECCD?
                </td>
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
      <div className="staff-info">
        <p>Information on all staff during the current school year</p>

        <div className="info-body">
          <p>
            Enter information on all staff who work in this school (present or
            currently absent) regardless of payroll status <br /> Make sure that
            the total number of staff listed in this table agrees with the
            number of non-teaching staff (D1) and the number of teachers (D2)
            reported above. <br />{" "}
            <span>
              If the number of staff is more than the space provided, photocopy
              the following page and attach to the questionnaire.
            </span>
          </p>
          {info.map((item, idx) => {
            return (
              <div key={idx} className="info-body_table">
                <div className="info-body_left"><p>{item.infoLeft}</p></div>
                <div className="info-body_right">
                  {item.infoRight.map((item, idx) => {
                    return <p key={idx}>{item}</p>
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Staff;
