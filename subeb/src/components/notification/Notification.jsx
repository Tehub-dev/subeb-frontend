import React, { useEffect, useState } from "react";

import "./nots.css";
import { AxiosAuthGet } from "../../axios/axios";
import { LoadingSpin } from "../alerts/Alerts";
import { useLocation } from "react-router-dom";

const Notification = () => {
  const url = "notifications/";

  const { pathname } = useLocation();
  const [nots, setNots] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url).then((res) => {
      // console.log(res);
      setIsLoading(false);
      setNots(res.data);
    });
    // eslint-disable-next-line
  }, []);

  return isLoading && pathname.includes("notification") ? (
    <LoadingSpin />
  ) : (
    <div className="notification-cont">
      <div className="not-head">
        <h3>
          Notifications <span>{nots?.notificationCount}</span>
        </h3>
      </div>
      <div className="not-data">
        {nots &&
          nots?.notificationData.map((item, idx) => {
            return (
              <div key={idx} className="each-data">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notification;
