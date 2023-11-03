import React, { useEffect, useState } from "react";
import arrow from "../../assets/images/arrow-down-tray.png";

import "./teacher-reg.css";
import { Button, CheckBox, SelectInput } from "../custom-inputs/CustomInputs";
import Table from "../table/Table";
import { weeks } from "../charts/Data";
import { AxiosAuthGet, AxiosAuthPost } from "../../axios/axios";
import { ErrorAlert, LoadingSpin, SuccessAlert } from "../alerts/Alerts";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";
import { saveAs } from 'file-saver';
import atob from 'atob';

const AttendStu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDLoading, setIsDLoading] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg, setSuccessMsg } = useSuccessMsg();
  const [teachData, setTeachData] = useState();
  const [teacherId, setTeacherId] = useState("");
  const [dayClick, setDayClick] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [errDisplay, setErrDisplay] = useState(false);
  const [teacherSingle, setTeacherSingle] = useState();
  const [plWeek, setPlWeek] = useState("Week 1");
  const weekArr = weeks;
  const url = `students/attendance/?week=${plWeek}&download=${isDownload}`;
  const postUrl = `students/attendance/?week=${plWeek}`;
  const [checkMonValues, setCheckMonValues] = useState([]);
  const [checkTueValues, setCheckTueValues] = useState([]);
  const [checkWedValues, setCheckWedValues] = useState([]);
  const [checkThuValues, setCheckThuValues] = useState([]);
  const [checkFriValues, setCheckFriValues] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setTeachData(res.data.attendanceData);
        setPlWeek(res.data.week);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, [plWeek]);


  const clickCheckMon = (e, row) => {
    setDayClick(e.target.id);
    setTeacherId(row?.studentId);
    setTeacherSingle(row);
    const { value, checked } = e.target;
    if (checked) {
      // Add the checked value to the array
      setCheckMonValues((prevValues) => [...prevValues, value]);
    } else {
      // Remove the unchecked value from the array
      setCheckMonValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const clickCheckTues = (e, row) => {
    setDayClick(e.target.id);
    setTeacherId(row?.studentId);
    setTeacherSingle(row);
    const { value, checked } = e.target;
    if (checked) {
      // Add the checked value to the array
      setCheckTueValues((prevValues) => [...prevValues, value]);
    } else {
      // Remove the unchecked value from the array
      setCheckTueValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };
  const clickCheckWed = (e, row) => {
    setDayClick(e.target.id);
    setTeacherId(row?.studentId);
    setTeacherSingle(row);
    const { value, checked } = e.target;
    if (checked) {
      // Add the checked value to the array
      setCheckWedValues((prevValues) => [...prevValues, value]);
    } else {
      // Remove the unchecked value from the array
      setCheckWedValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };
  const clickCheckThu = (e, row) => {
    setDayClick(e.target.id);
    setTeacherId(row?.studentId);
    setTeacherSingle(row);
    const { value, checked } = e.target;
    if (checked) {
      // Add the checked value to the array
      setCheckThuValues((prevValues) => [...prevValues, value]);
    } else {
      // Remove the unchecked value from the array
      setCheckThuValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };
  const clickCheckFri = (e, row) => {
    setDayClick(e.target.id);
    setTeacherId(row?.studentId);
    setTeacherSingle(row);
    const { value, checked } = e.target;
    if (checked) {
      // Add the checked value to the array
      setCheckFriValues((prevValues) => [...prevValues, value]);
    } else {
      // Remove the unchecked value from the array
      setCheckFriValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const clickDownload = () =>{
    setIsDownload(true);
    setIsDLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);

        // Replace this with your Base64 PDF data
        const base64PdfData = res.data.download.file;
    
        // Decode the Base64 data
        const binaryPdf = atob(base64PdfData);
    
        // Create a Blob from the decoded binary data
        const arrayBuffer = new ArrayBuffer(binaryPdf.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < binaryPdf.length; i++) {
          uint8Array[i] = binaryPdf.charCodeAt(i);
        }
        const blob = new Blob([uint8Array], { type: 'application/pdf' });
    
        // Trigger the download
        saveAs(blob, res.data.download.fileName);
        setIsDLoading(false);
      })
      .catch((err) => {
        // console.log(err.response);
        setIsDLoading(false);
      });
  };

  const dataObj = {
    week: plWeek,
    day: dayClick,
    present:
      teacherSingle?.attendance[0]?.present &&
      !checkMonValues.includes(teacherId)
        ? teacherSingle?.attendance[0]?.present
        : teacherSingle?.attendance[1]?.present &&
          !checkTueValues.includes(teacherId)
        ? teacherSingle?.attendance[1]?.present
        : teacherSingle?.attendance[2]?.present &&
          !checkWedValues.includes(teacherId)
        ? teacherSingle?.attendance[2]?.present
        : teacherSingle?.attendance[3]?.present &&
          !checkThuValues.includes(teacherId)
        ? teacherSingle?.attendance[3]?.present
        : teacherSingle?.attendance[4]?.present &&
          !checkFriValues.includes(teacherId)
        ? teacherSingle?.attendance[4]?.present
        : checkMonValues.includes(teacherId) ||
          checkTueValues.includes(teacherId) ||
          checkWedValues.includes(teacherId) ||
          checkThuValues.includes(teacherId) ||
          checkFriValues.includes(teacherId)
        ? true
        : false,
    studentId: teacherId,
  };

  useEffect(() => {
    // console.log(dataObj);
    setIsLoading(true);
    AxiosAuthPost(postUrl, dataObj)
      .then((res) => {
        // console.log(res);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        setIsLoading(false);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        // console.log(err.response);
        for (let i = 0; i < err?.response?.data?.errors?.length; i++) {
          if (err?.response?.data?.errors[i]?.fieldName === "day") {
            if (
              err.response.data.errors[i].error !== '"" is not a valid choice.'
            ) {
              setErrDisplay(true);
              setErrMessage(err.response.data.errors[i].error);
              setTimeout(function () {
                window.location.reload();
              }, 2000);
            }
          }
        }
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [
    checkMonValues,
    checkTueValues,
    checkWedValues,
    checkThuValues,
    checkFriValues,
  ]);

  const CustomCell1 = ({ row }) => (
    <div>
      <CheckBox
        id={"Monday"}
        checked={
          checkMonValues.length === 0
            ? row?.attendance[0].present
            : checkMonValues.includes(row?.studentId) && true
        }
        checkValue={row?.studentId}
        checkboxChange={(e) => clickCheckMon(e, row)}
      />
    </div>
  );
  const CustomCell2 = ({ row }) => (
    <div>
      <CheckBox
        id={"Tuesday"}
        checked={
          checkTueValues.length === 0
            ? row?.attendance[1].present
            : checkTueValues.includes(row?.studentId) && true
        }
        checkValue={row?.studentId}
        checkboxChange={(e) => clickCheckTues(e, row)}
      />
    </div>
  );
  const CustomCell3 = ({ row }) => (
    <div>
      <CheckBox
        id={"Wednesday"}
        checked={
          checkWedValues.length === 0
            ? row?.attendance[2].present
            : checkWedValues.includes(row?.studentId) && true
        }
        checkValue={row?.studentId}
        checkboxChange={(e) => clickCheckWed(e, row)}
      />
    </div>
  );
  const CustomCell4 = ({ row }) => (
    <div>
      <CheckBox
        id={"Thursday"}
        checked={
          checkThuValues.length === 0
            ? row?.attendance[3].present
            : checkThuValues.includes(row?.studentId) && true
        }
        checkValue={row?.studentId}
        checkboxChange={(e) => clickCheckThu(e, row)}
      />
    </div>
  );
  const CustomCell5 = ({ row }) => (
    <div>
      <CheckBox
        id={"Friday"}
        checked={
          checkFriValues.length === 0
            ? row?.attendance[4].present
            : checkFriValues.includes(row?.studentId) && true
        }
        checkValue={row?.studentId}
        checkboxChange={(e) => clickCheckFri(e, row)}
      />
    </div>
  );

  const columns = [
    {
      name: "Full Name",
      selector: (row) => row?.firstName + " " + row?.lastName,
      sortable: true,
      width: "300px",
    },
    {
      name: "Monday",
      selector: (row) => row?.attendance[0].present,
      cell: (row) => <CustomCell1 row={row} />,
      sortable: true,
    },
    {
      name: "Tuesday",
      selector: (row) => row?.attendance[1].present,
      cell: (row) => <CustomCell2 row={row} />,
      sortable: true,
    },
    {
      name: "Wednesday",
      selector: (row) => row?.attendance[2].present,
      cell: (row) => <CustomCell3 row={row} />,
      sortable: true,
    },
    {
      name: "Thursday",
      selector: (row) => row?.attendance[3].present,
      cell: (row) => <CustomCell4 row={row} />,
      sortable: true,
    },
    {
      name: "Friday",
      selector: (row) => row?.attendance[4].present,
      cell: (row) => <CustomCell5 row={row} />,
      sortable: true,
    },
  ];

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div className="teacher-attend">
      <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      />
      <ErrorAlert
        display={errDisplay}
        setDisplay={setErrDisplay}
        message={errMessage}
      />
      <div className="sch-admin_head">
        <div className="head-left">
          <SelectInput
            placeholder={plWeek}
            setPlaceholder={setPlWeek}
            opsArr={weekArr}
          />
        </div>
        <div className="head-right">
          <Button
            btnText={"Download"}
            btnClass={"btn-small"}
            btnImg={arrow}
            btnClick={clickDownload}
            loading={isDLoading}
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

export default AttendStu;
