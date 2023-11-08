import React, { useEffect, useState } from "react";
import Empty from "../../../../components/empty-state/Empty";
import schadmin from "../../../../assets/images/schadmin-empty.png";
import {
  LoadingSpin,
} from "../../../../components/alerts/Alerts";
import { AxiosAuthGet } from "../../../../axios/axios";
import AcadCal from "../../../../components/acad-cal/AcadCal";

const AcademicCalSch = () => {
  const url = "academic-calendar/";
  const [isLoading, setIsLoading] = useState(false);
  const [acadData, setAcadData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
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
  }, []);

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div>
      {acadData === 0 && (
        <Empty
          emptyTitle={"No Calendar Yet"}
          emptyImg={schadmin}
        />
      )}
      {acadData !== 0 && <AcadCal teacher={true} acadData={acadData} />}
    </div>
  );
}

export default AcademicCalSch