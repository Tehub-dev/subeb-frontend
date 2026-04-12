import React, { useState } from "react";

import "./sch-admin.css";
import { Button, SelectInput } from "../custom-inputs/CustomInputs";
import { Add, More, Trash } from "iconsax-react";
import useOverlay from "../../hooks/useOverlay";
import AddSchAdmin from "../popups/AddSchAdmin";
import Table from "../table/Table";
import { PencilIcon } from "@heroicons/react/outline";
import { DeletePopup, SuccessAlert, UpdatePopup } from "../alerts/Alerts";
import useIsEdit from "../../hooks/useIsEdit";
import { AxiosAuthPatch, AxiosAuthPost, AxiosDelete } from "../../axios/axios";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";
import disable from "../../assets/images/disable.png";
import reset from "../../assets/images/reset.png";

const SchAdmin = ({ adminData, azPl, opsArr, optionClick, setPlaceholder }) => {
  const { setDisplayOverlay } = useOverlay();
  const [adminModal, setAdminModal] = useState(false);
  const [adminDelete, setAdminDelete] = useState(false);
  const [adminDisable, setAdminDisable] = useState(false);
  const [adminReset, setAdminReset] = useState(false);
  const [adminEdit, setAdminEdit] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [itemId, setItemId] = useState("");
  const [accStatus, setAccStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setIsEdit } = useIsEdit();
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg, setSuccessMsg } = useSuccessMsg();

  const deleteAdmin = (row) => {
    setDisplayOverlay(true);
    setAdminDelete(true);
    localStorage.setItem("adminId", row.id);
  };
  const editAdmin = (row) => {
    setDisplayOverlay(true);
    setAdminEdit(true);
    localStorage.setItem("adminId", row.id);
    localStorage.setItem("singleAdmin", JSON.stringify(row));
    setIsEdit(true);
  };
  const cancelEdit = () => {
    setDisplayOverlay(false);
    setAdminEdit(false);
  };
  const clickEdit = () => {
    // setDisplayOverlay(false);
    setAdminModal(true);
    setAdminEdit(false);
  };
  const deleteId = localStorage.getItem("adminId");
  const deleteUrl = `school-admin/${deleteId}`;
  const disableUrl = `school-admin/${deleteId}/status/`;
  const resetUrl = `auth/password-reset/headmaster/`;

  const disableAdmin = (row) => {
    setDisplayOverlay(true);
    setAdminDisable(true);
    localStorage.setItem("adminId", row.id);
    setAccStatus(row.accountStatus);
  };
  const resetAdmin = (row) => {
    setDisplayOverlay(true);
    setAdminReset(true);
    localStorage.setItem("adminId", row.id);
  };

  const removeAdmin = () => {
    setIsLoading(true);
    AxiosDelete(deleteUrl)
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setSuccessMsg(res.message);
        setSuccessDisplay(true);
        setDisplayOverlay(false);
      })
      .catch((err) => {
        // console.log(err.response);
        setIsLoading(false);
      });
  };

  const adminDisableFunc = () => {
    setIsLoading(true);
    const disableObj = {
      accountStatus: accStatus ? "Deactivated" : "Active",
    };
    AxiosAuthPatch(disableUrl, disableObj)
      .then((res) => {
        // console.log(res);
        setSuccessMsg(res.message);
        setSuccessDisplay(true);
        setDisplayOverlay(false);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err.response);
        setIsLoading(false);
      });
  };

  const resetObj = {
    headmasterId: deleteId,
  };

  const resetPassword = () => {
    setIsLoading(true);
    AxiosAuthPost(resetUrl, resetObj)
      .then((res) => {
        // console.log(res);
        setSuccessMsg(res.message);
        setSuccessDisplay(true);
        setDisplayOverlay(false);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err.response);
        setIsLoading(false);
      });
  };

  const clickAdd = () => {
    setDisplayOverlay(true);
    setAdminModal(true);
  };
  const cancelAdd = () => {
    setDisplayOverlay(false);
    setAdminDelete(false);
  };
  const cancelDisable = () => {
    setDisplayOverlay(false);
    setAdminDisable(false);
  };
  const cancelReset = () => {
    setDisplayOverlay(false);
    setAdminReset(false);
  };
  const clickMore = (row) => {
    // console.log(adminData);
    // console.log(row);
    setItemId(row.id);
    if (itemId === row.id && showMore) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  };
  const CustomCell = ({ row }) => (
    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      {/* <Trash
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => deleteAdmin(row)}
      />
      <PencilIcon className="pencil-icon" onClick={() => editAdmin(row)} /> */}
      <More cursor={"pointer"} onClick={() => clickMore(row)} />
      <div
        className="more-list"
        style={{ display: itemId === row.id && showMore && "flex" }}
      >
        <p onClick={() => editAdmin(row)}>
          <PencilIcon className="pencil-icon" /> Edit
        </p>
        <p onClick={() => resetAdmin(row)}>
          <img src={reset} alt="icon" />
          Reset
        </p>
        <p onClick={() => disableAdmin(row)}>
          <img src={disable} alt="icon" />
          {row?.accountStatus === "Active" ? "Disable" : "Enable"}
        </p>
        <p onClick={() => deleteAdmin(row)}>
          {" "}
          <Trash style={{ color: "red", cursor: "pointer" }} />
          Delete
        </p>
      </div>
    </div>
  );

  const columns = [
    {
      name: "School Name",
      selector: (row) => row?.school?.schoolName,
      sortable: true,
    },
    {
      name: "LGA",
      selector: (row) => row.lga,
      sortable: true,
    },
    {
      name: "School Admin",
      selector: (row) => row?.firstName + " " + row?.lastName,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.accountStatus,
      cell: (row) => (
        <div
          style={{
            background:
              row.accountStatus === "Active"
                ? "green"
                : !row.accountStatus
                ? "transparent"
                : "red",
            color: "white",
            borderRadius: "8px",
            padding: "5px 10px",
          }}
        >
          {row.accountStatus}
        </div>
      ),
      sortable: true,
    },
    {
      name: "",
      cell: (row) => row.id !== null && <CustomCell row={row} />,
    },
  ];
  const emptyRow = { id: null, firstName: "", lastName: "" };
  const newData = adminData && [...adminData, emptyRow];

  return (
    <div className="sch-admin">
      <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      />
      <AddSchAdmin display={adminModal} setDisplay={setAdminModal} />
      <DeletePopup
        title={"Remove School Admin"}
        text={"Are you sure you want to remove this School Admin?"}
        display={adminDelete}
        cancelBtn={cancelAdd}
        deleteBtn={removeAdmin}
        deleteLoad={isLoading}
      />
      <DeletePopup
        title={"Disable School Admin"}
        text={"Are you sure you want to disable this School Admin?"}
        display={adminDisable}
        cancelBtn={cancelDisable}
        btnText={"Disable"}
        deleteBtn={adminDisableFunc}
        deleteLoad={isLoading}
      />
      <DeletePopup
        title={"Reset Password"}
        text={"Are you sure you want to reset this School Admin's password?"}
        display={adminReset}
        cancelBtn={cancelReset}
        btnText={"Reset"}
        deleteBtn={resetPassword}
        deleteLoad={isLoading}
      />
      <UpdatePopup
        display={adminEdit}
        cancelBtn={cancelEdit}
        title={"Update School Admin"}
        text={"Are you sure you want to update this School Admin?"}
        updateBtn={clickEdit}
      />
      <div className="sch-admin_head">
        <div className="head-left">
          <p>Sort by : </p>
          <SelectInput
            placeholder={azPl}
            setPlaceholder={setPlaceholder}
            opsArr={opsArr}
            optionClick={optionClick}
          />
        </div>
        <div className="head-right">
          <Button
            btnText={"Add School Admin"}
            btnClass={"btn-small"}
            rightIcon={<Add />}
            btnClick={clickAdd}
          />
        </div>
      </div>
      <div className="admin-body">
        <div className="admin-body_head">
          <h3>
            School Admins <span>{adminData?.length}</span>
          </h3>
        </div>
        <Table columns={columns} data={newData} />
      </div>
    </div>
  );
};

export default SchAdmin;
