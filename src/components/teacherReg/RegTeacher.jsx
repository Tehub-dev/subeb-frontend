import React, { useState } from "react";

import "./teacher-reg.css";
import "../schAdmin/sch-admin.css";
import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import Table from "../table/Table";
import { SelectInput } from "../custom-inputs/CustomInputs";
import { DeletePopup, SuccessAlert, UpdatePopup } from "../alerts/Alerts";
import useOverlay from "../../hooks/useOverlay";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";
import { AxiosAuthPut } from "../../axios/axios";

const RegTeacher = ({ teachersData }) => {
    const { setDisplayOverlay } = useOverlay();
    const url = "teachers/registration/";
    const singleTeacher = JSON.parse(localStorage.getItem("singleTeacher"));
    
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg, setSuccessMsg } = useSuccessMsg();

    
  const [isLoading, setIsLoading] = useState(false);
  const [teachDecline, setTeachDecline] = useState(false);
  const [teachApprove, setTeachApprove] = useState(false);

  const clickApprove = (row) => {
    setDisplayOverlay(true);
    setTeachApprove(true);
    localStorage.setItem("singleTeacher", JSON.stringify(row));
  }
  const clickDecline = (row) => {
    setDisplayOverlay(true);
    setTeachDecline(true);
    localStorage.setItem("singleTeacher", JSON.stringify(row));
  }
  const cancelDecline = (row) => {
    setDisplayOverlay(false);
    setTeachDecline(false);
    localStorage.removeItem("singleTeacher");
  }
  const cancelApprove = (row) => {
    setDisplayOverlay(false);
    setTeachApprove(false);
    localStorage.removeItem("singleTeacher");
  }

  const approveObj = {
    accountStatus: "Active",
    teacherId: singleTeacher?.id
  }

  const approveTeach = () => {
    setIsLoading(true);
    AxiosAuthPut(url, approveObj).then((res) => {
        // console.log(res);
        setSuccessDisplay(true);
        setSuccessMsg(res.message);
        setTeachApprove(false);
        setDisplayOverlay(false);
        setIsLoading(false);
    }).catch((err) => {
        // console.log(err.response);
        setIsLoading(false);
    })
  }
  const declineTeach = () => {
    setTeachDecline(false);
    setDisplayOverlay(false);
  }


  const CustomCell = ({ row }) => (
    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      <div className="cover-red">
        <XIcon className="x-icon" onClick={() => clickDecline(row)} />
      </div>
      <div className="cover-green">
        <CheckIcon className="tick-icon" onClick={() => clickApprove(row)} />
      </div>
    </div>
  );

  const columns = [
    {
      name: "Teachers Name",
      selector: (row) => row.firstName + " " + row.lastName,
      sortable: true,
    },
    {
      name: "Class",
      selector: (row) => row.currentClass,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => <CustomCell row={row} />,
    },
  ];

  return (
    <div className="teachers-reg">
    <SuccessAlert display={successDisplay} setDisplay={setSuccessDisplay} message={successMsg} />
    <DeletePopup
      title={"Decline Registration"}
      text={"Are you sure you want to decline this teacher's registration?"}
      btnText={'Decline'}
      display={teachDecline}
      cancelBtn={cancelDecline}
      deleteBtn={declineTeach}
      // deleteLoad={isLoading}
    />
    <UpdatePopup
      display={teachApprove}
      cancelBtn={cancelApprove}
      updateBtn={approveTeach}
      title={"Approve Registration "}
      text={"Are you sure you want to approve this teacher's registration?"}
      btnText={"Approve"}
      updateLoad={isLoading}
    />
      <div className="sch-admin_head">
        <div className="head-left">
          <p>Sort by : </p>
          <SelectInput placeholder={"A-Z"} />
        </div>
      </div>
      <div className="admin-body">
        <div className="admin-body_head">
          <h3>
            Teachers Registration Approval <span>{teachersData?.length}</span>
          </h3>
        </div>
        <Table columns={columns} data={teachersData} />
      </div>
    </div>
  );
};

export default RegTeacher;
