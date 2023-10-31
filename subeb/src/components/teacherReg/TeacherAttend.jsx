import React, { useEffect, useState } from "react";
import arrow from "../../assets/images/arrow-down-tray.png";

import "./teacher-reg.css";
import { Button, CheckBox, SelectInput } from "../custom-inputs/CustomInputs";
import Table from "../table/Table";
import { days, weeks } from "../charts/Data";
import { AxiosAuthGet } from "../../axios/axios";

const TeacherAttend = () => {
  const [
    // isLoading
    , setIsLoading] = useState(false);
  const [isDownload,
    //  setIsDownload
] = useState(false);
  const [checkIn, setCheckIn] = useState(false);
  const [rowId, setRowId] = useState("");
  const [rowOutId, setRowOutId] = useState("");
  const [checkOut, setCheckOut] = useState(false);
  const [teachData, setTeachData] = useState();
  const [plDays, setPlDays] = useState("Monday");
  const [plWeek, setPlWeek] = useState("Week 1");
  const weekArr = weeks;
  const daysArr = days;
  const url = `teachers/attendance/?week=${plWeek}&day=${plDays}&download=${isDownload}`;
//   const postUrl = "teachers/attendance/";

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setTeachData(res.data.attendanceData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, [plDays, plWeek]);

  const clickCheckIn = (row) => {
    setRowId(row.teacherId);
    setCheckIn(!checkIn)
    // console.log(row);
};
const clickCheckOut = (row) => {
    setRowOutId(row.teacherId);
    setCheckOut(!checkOut)
    // console.log(row);
  };

//   console.log(checkIn);
//   console.log(checkOut);

  const CustomCell1 = ({ row }) => (
    <div>
      <CheckBox
        id={"check-in"}
        checked={rowId === row?.teacherId && checkIn}
        checkboxChange={() => clickCheckIn(row)}
      />
    </div>
  );
  const CustomCell2 = ({ row }) => (
    <div>
      <CheckBox
        id={"check-out"}
        checked={rowOutId === row?.teacherId && checkOut}
        checkboxChange={() => clickCheckOut(row)}
      />
    </div>
  );

  const columns = [
    {
      name: "Full Name",
      selector: (row) => row?.firstName + " " + row?.lastname,
      sortable: true,
    },
    {
      name: "",
      selector: (row) => row?.school?.sch,
      sortable: true,
    },
    {
      name: "Check-in",
      selector: (row) => row?.attendance?.checkIn,
      cell: (row) => <CustomCell1 row={row} />,
    },
    {
      name: "Check-out",
      selector: (row) => row?.attendance?.checkOut,
      cell: (row) => <CustomCell2 row={row} />,
    },
  ];


  return (
    <div className="teacher-attend">
      <div className="sch-admin_head">
        <div className="head-left">
          <SelectInput
            placeholder={plWeek}
            setPlaceholder={setPlWeek}
            opsArr={weekArr}
          />
          <SelectInput
            placeholder={plDays}
            setPlaceholder={setPlDays}
            opsArr={daysArr}
          />
        </div>
        <div className="head-right">
          <Button
            btnText={"Download"}
            btnClass={"btn-small"}
            btnImg={arrow}
            // btnClick={clickAdd}
          />
        </div>
      </div>
      <div className="admin-body">
        <div className="admin-body_head">
          <h3>
            Teachers <span>{teachData?.length}</span>
          </h3>
        </div>
        <Table columns={columns} data={teachData} />
      </div>
    </div>
  );
};

export default TeacherAttend;
