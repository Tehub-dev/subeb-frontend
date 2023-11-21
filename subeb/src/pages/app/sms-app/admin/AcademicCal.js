import React, { useEffect, useState } from "react";
import Empty from "../../../../components/empty-state/Empty";
import schadmin from "../../../../assets/images/schadmin-empty.png";
import { Add } from "iconsax-react";
import useOverlay from "../../../../hooks/useOverlay";
import {
  LoadingSpin,
  SuccessAlert,
} from "../../../../components/alerts/Alerts";
import { AxiosAuthGet } from "../../../../axios/axios";
import AcadCal from "../../../../components/acad-cal/AcadCal";
import AddAcadCal from "../../../../components/popups/AddAcadCal";
import useSuccessMsg from "../../../../hooks/useSuccessMsg";
import useSuccessDisplay from "../../../../hooks/useSuccessDisplay";

const AcademicCal = () => {
  const url = "academic-calendar/";
  const { setDisplayOverlay } = useOverlay();
  const [acadModal, setAcadModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acadData, setAcadData] = useState([]);
  const { successDisplay, setSuccessDisplay } = useSuccessDisplay();
  const { successMsg } = useSuccessMsg();

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res.data);
        setAcadData(
          res?.data.map((item) => {
            return { holiday: item.name, date: item.value };
          })
        );
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response);
      });
    // eslint-disable-next-line
  }, [successDisplay]);

  const clickAdd = () => {
    setDisplayOverlay(true);
    setAcadModal(!acadModal);
  };

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div>
      <SuccessAlert
        display={successDisplay}
        setDisplay={setSuccessDisplay}
        message={successMsg}
      />
      {acadData === 0 && (
        <Empty
          emptyTitle={"No Calendar Yet"}
          emptyImg={schadmin}
          emptyBtn={"Add Academic Calendar"}
          emptyRightIcon={<Add />}
          btnClick={clickAdd}
        />
      )}
      <AddAcadCal display={acadModal} setDisplay={setAcadModal} />
      {acadData !== 0 && <AcadCal acadData={acadData} clickAdd={clickAdd} />}
    </div>
  );
};

export default AcademicCal;
