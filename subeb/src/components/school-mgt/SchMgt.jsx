import React, { useState } from "react";

import "./sch-mgt.css";
import Table from "../table/Table";
import { Add, Trash } from "iconsax-react";
import { PencilIcon } from "@heroicons/react/outline";
import { Button, SelectInput } from "../custom-inputs/CustomInputs";
import useOverlay from "../../hooks/useOverlay";
import AddSch from "../popups/AddSch";

const SchMgt = () => {

    const [schModal, setSchModal] = useState(false);
    const { setDisplayOverlay} = useOverlay();

    const clickModal = () => {
        setSchModal(!schModal);
        setDisplayOverlay(true);
    }

  const CustomCell = ({ row }) => (
    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      <Trash
        style={{ color: "red", cursor: "pointer" }}
        // onClick={() => deleteAdmin(row)}
      />
      <PencilIcon
        className="pencil-icon"
        // onClick={() => editAdmin(row)}
      />
    </div>
  );

  const schoolData = JSON.parse(localStorage.getItem("sch"));

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
            School Admins <span>100</span>
          </h3>
        </div>
        <Table columns={columns} data={schoolData} />
      </div>
    </div>
  );
};

export default SchMgt;
