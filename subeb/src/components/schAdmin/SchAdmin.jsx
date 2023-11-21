import React, { useState } from "react";

import "./sch-admin.css";
import { Button, SelectInput } from "../custom-inputs/CustomInputs";
import { Add, Trash } from "iconsax-react";
import useOverlay from "../../hooks/useOverlay";
import AddSchAdmin from "../popups/AddSchAdmin";
import Table from "../table/Table";
import { PencilIcon } from "@heroicons/react/outline";
import { DeletePopup, SuccessAlert, UpdatePopup } from "../alerts/Alerts";
import useIsEdit from "../../hooks/useIsEdit";
import { AxiosDelete } from "../../axios/axios";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";

const SchAdmin = ({ adminData, azPl, opsArr, optionClick, setPlaceholder }) => {
  const { setDisplayOverlay } = useOverlay();
  const [adminModal, setAdminModal] = useState(false);
  const [adminDelete, setAdminDelete] = useState(false);
  const [adminEdit, setAdminEdit] = useState(false);
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

  const removeAdmin = () => {
    // console.log(deleteUrl);
    setIsLoading(true);
    AxiosDelete(deleteUrl)
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setSuccessMsg(res.message);
        setDisplayOverlay(false);
        setSuccessDisplay(true);
      })
      .catch((err) => {
        console.log(err.response);
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
  const CustomCell = ({ row }) => (
    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      <Trash
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => deleteAdmin(row)}
      />
      <PencilIcon className="pencil-icon" onClick={() => editAdmin(row)} />
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
      selector: (row) => row.firstName + " " + row.lastName,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => <CustomCell row={row} />,
    },
  ];

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
        <Table columns={columns} data={adminData} />
      </div>
    </div>
  );
};

export default SchAdmin;
