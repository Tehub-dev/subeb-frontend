import React, { useEffect, useState } from "react";
import arrow from "../../assets/images/arrow-down-tray.png";

import "./teacher-reg.css";
import { Button, CheckBox, SelectInput } from "../custom-inputs/CustomInputs";
import Table from "../table/Table";
import { days, weeks } from "../charts/Data";
import { AxiosAuthGet, AxiosAuthPost } from "../../axios/axios";
import { LoadingSpin, SuccessAlert } from "../alerts/Alerts";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";

const TeacherAttend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDownload, 
    // setIsDownload
] = useState(false);
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg, setSuccessMsg } = useSuccessMsg();
  const [teachData, setTeachData] = useState();
  const [teacherId, setTeacherId] = useState("");
  const [teacherSingle, setTeacherSingle] = useState();
  const [plDays, setPlDays] = useState("Monday");
  const [plWeek, setPlWeek] = useState("Week 1");
  const weekArr = weeks;
  const daysArr = days;
  const url = `teachers/attendance/?week=${plWeek}&day=${plDays}&download=${isDownload}`;
  const postUrl = "teachers/attendance/";
  const [checkOutValues, setCheckOutValues] = useState([]);
  const [checkInValues, setCheckInValues] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setTeachData(res.data.attendanceData);
        setPlDays(res.data.day);
        setPlWeek(res.data.week);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, [plDays, plWeek]);

  const clickCheckIn = (e,row) => {
    setTeacherId(row?.teacherId);
    setTeacherSingle(row);
    const { value, checked } = e.target;
    if (checked) {
      // Add the checked value to the array
      setCheckInValues((prevValues) => [...prevValues, value]);
    } else {
      // Remove the unchecked value from the array
      setCheckInValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const clickCheckOut = (e,row) => {
    setTeacherId(row?.teacherId);
    setTeacherSingle(row);
    const { value, checked } = e.target;
    if (checked) {
      // Add the checked value to the array
      setCheckOutValues((prevValues) => [...prevValues, value]);
    } else {
      // Remove the unchecked value from the array
      setCheckOutValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const dataObj = {
    week: plWeek,
    day: "Wednesday",
    checkIn: teacherSingle?.attendance?.checkIn && !checkInValues.includes(teacherId) ? teacherSingle?.attendance?.checkIn : checkInValues.includes(teacherId) ? true : false,
    checkOut: teacherSingle?.attendance?.checkOut && !checkOutValues.includes(teacherId) ? teacherSingle?.attendance?.checkOut : checkOutValues.includes(teacherId) ? true : false,
    teacherId: teacherId
  }

  useEffect(() => {
    // console.log(dataObj);
    setIsLoading(true);
    AxiosAuthPost(postUrl, dataObj).then((res) => {
        // console.log(res);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        setIsLoading(false);
    }).catch((err) => {
        // console.log(err.response);
        setIsLoading(false);
    })
    // eslint-disable-next-line
  }, [checkInValues,checkOutValues]);

  const CustomCell1 = ({ row }) => (
    <div>
      <CheckBox
        id={"check-in"}
        checked={checkInValues.length === 0 ? row?.attendance.checkIn : checkInValues.includes(row?.teacherId) && true}
        checkValue={row?.teacherId}
        checkboxChange={(e) => clickCheckIn(e,row)}
      />
    </div>
  );
  const CustomCell2 = ({ row }) => (
    <div>
      <CheckBox
        id={"check-out"}
        checked={checkOutValues.length === 0 ? row?.attendance.checkOut : checkOutValues.includes(row?.teacherId) && true}
        checkValue={row?.teacherId}
        checkboxChange={(e) => clickCheckOut(e,row)}
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
    isLoading ? <LoadingSpin /> :
    <div className="teacher-attend">
    <SuccessAlert
      display={successDisplay}
      setDisplay={setSuccessDisplay}
      message={successMsg}
    />
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
