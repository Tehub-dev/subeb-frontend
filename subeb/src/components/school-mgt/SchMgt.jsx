import React, { useState } from "react";

import "./sch-mgt.css";
import Table from "../table/Table";
import { Add, Trash } from "iconsax-react";
import { PencilIcon } from "@heroicons/react/outline";
import { Button, SelectInput } from "../custom-inputs/CustomInputs";
import useOverlay from "../../hooks/useOverlay";
import AddSch from "../popups/AddSch";
import useSuccessDisplay from "../../hooks/useSuccessDisplay";
import useSuccessMsg from "../../hooks/useSuccessMsg";
import { DeletePopup, SuccessAlert, UpdatePopup } from "../alerts/Alerts";

const SchMgt = () => {

    const [schModal, setSchModal] = useState(false);
    const [schEdit, setSchEdit] = useState(false);
    const [schDelete, setSchDelete] = useState(false);
    const { setDisplayOverlay} = useOverlay();
    const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
    const { successMsg } = useSuccessMsg();

    const clickModal = () => {
        setSchModal(!schModal);
        setDisplayOverlay(true);
    }

  const CustomCell = ({ row }) => (
    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      <Trash
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => deleteSch(row)}
      />
      <PencilIcon
        className="pencil-icon"
        onClick={() => editSch(row)}
      />
    </div>
  );

  const schoolData = JSON.parse(localStorage.getItem("sch"));
  const deleteSch = (row) => {
    setDisplayOverlay(true);
    setSchDelete(true);
    localStorage.setItem("schId", row.id);
  };
  const editSch = (row) => {
    setDisplayOverlay(true);
    setSchEdit(true);
    localStorage.setItem("singleSch", JSON.stringify(row));
  };
  const cancelEdit = () => {
    setDisplayOverlay(false);
    setSchEdit(false);
  }
  const cancelDelete = () => {
    setDisplayOverlay(false);
    setSchDelete(false);
  }
  const clickEdit = () => {
    setSchModal(true);
    setSchEdit(false);
  };

  const columns = [
    {
      name: "School Name",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "LGA",
      selector: (row) => row.lga,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.town,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => <CustomCell row={row} />,
    },
  ];

  return (
    <div className="sch-mgt">
        <AddSch display={schModal} setDisplay={setSchModal} />
      <DeletePopup
        title={"Remove School"}
        text={"Are you sure you want to remove this School?"}
        display={schDelete}
        cancelBtn={cancelDelete}
        // deleteBtn={removeAdmin}
        // deleteLoad={isLoading}
      />
      <UpdatePopup
        display={schEdit}
        cancelBtn={cancelEdit}
        updateBtn={clickEdit}
        title={"Update School"}
        text={"Are you sure you want to update this School?"}
      />
      <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      />
      <div className="sch-mgt_head">
        <div className="head-left">
          <p>Sort by : </p>
          <SelectInput placeholder={"A-Z"} />
        </div>
        <div className="head-right">
          <Button
            btnText={"Add School"}
            btnClass={"btn-small"}
            rightIcon={<Add />}
            btnClick={clickModal}
          />
        </div>
      </div>
      <div className="mgt-body">
        <div className="mgt-body_head">
          <h3>
            Schools <span>{schoolData?.length}</span>
          </h3>
        </div>
        <Table columns={columns} data={schoolData} />
      </div>
    </div>
  );
};

export default SchMgt;
