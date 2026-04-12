import React, { useEffect, useState } from 'react';
import { AxiosAuthGet } from '../../../../axios/axios';
import schadmin from "../../../../assets/images/schadmin-empty.png";
import Empty from '../../../../components/empty-state/Empty';
import { LoadingSpin } from '../../../../components/alerts/Alerts';
import RegTeacher from '../../../../components/teacherReg/RegTeacher';

const TeachersReg = () => {

  const url = "teachers/registration/";
  const [teachersData, setTeachersData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url).then((res) => {
      // console.log(res);
      setTeachersData(res.data);
      setIsLoading(false);
    }).catch((err)=>{
      setIsLoading(false);
      // console.log(err.response);
    })
    // eslint-disable-next-line 
  }, []);

  return (
    isLoading ? <LoadingSpin /> :
    <div>
    {teachersData?.length === 0 && <Empty emptyTitle={"No Registered Teacher"} emptyImg={schadmin} />}
    {teachersData?.length !== 0 && <RegTeacher teachersData={teachersData} />}
    </div>
  )
}

export default TeachersReg