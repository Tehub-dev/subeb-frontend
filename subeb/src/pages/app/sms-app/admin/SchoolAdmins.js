import React, { useEffect, useState } from "react";

import schadmin from "../../../../assets/images/schadmin-empty.png";
import Empty from "../../../../components/empty-state/Empty";
import { Add } from "iconsax-react";
import useOverlay from "../../../../hooks/useOverlay";
import AddSchAdmin from "../../../../components/popups/AddSchAdmin";
import { AxiosAuthGet } from "../../../../axios/axios";
import {
  LoadingSpin,
  SuccessAlert,
} from "../../../../components/alerts/Alerts";
import useSuccessMsg from "../../../../hooks/useSuccessMsg";
import useSuccessDisplay from "../../../../hooks/useSuccessDisplay";
import SchAdmin from "../../../../components/schAdmin/SchAdmin";
const SchoolAdmins = () => {
  const url = "school-admin/";
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg } = useSuccessMsg();
  const { setDisplayOverlay } = useOverlay();
  const [adminModal, setAdminModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [adminData, setAdminData] = useState();
  const [plAz, setPlAz] = useState("A-Z");
  const azArray = [
    {
      id: "a-z",
      name: "A-Z"
    },
    {
      id: "z-a",
      name: "Z-A"
    }
  ];

  const clickAz = (item) => {
    if(item.id === "a-z"){
      adminData.sort((a, b) => a.school.schoolName.localeCompare(b.school.schoolName));
    }
    if(item.id === "z-a"){
      adminData.sort((a, b) => b.school.schoolName.localeCompare(a.school.schoolName));
    }
  }

  const clickAdd = () => {
    setDisplayOverlay(true);
    setAdminModal(true);
  };
  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setAdminData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, [successMsg]);

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div>
      <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      />
      {adminData?.length === 0 && (
        <Empty
          emptyTitle={"No School Admin"}
          emptyImg={schadmin}
          emptyBtn={"Add School Admin"}
          emptyRightIcon={<Add />}
          btnClick={clickAdd}
        />
      )}
      <AddSchAdmin display={adminModal} setDisplay={setAdminModal} />
      {adminData?.length !== 0 && (
        <SchAdmin
          adminData={adminData}
          setPlaceholder={setPlAz}
          azPl={plAz}
          opsArr={azArray}
          optionClick={clickAz}
        />
      )}
    </div>
  );
};

export default SchoolAdmins;
