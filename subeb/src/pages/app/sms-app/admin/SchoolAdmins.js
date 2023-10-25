import React, { useEffect, useState } from 'react';

import schadmin from "../../../../assets/images/schadmin-empty.png";
import Empty from '../../../../components/empty-state/Empty';
import { Add } from 'iconsax-react';
import useOverlay from '../../../../hooks/useOverlay';
import AddSchAdmin from '../../../../components/popups/AddSchAdmin';
import { AxiosAuthGet } from '../../../../axios/axios';
import { LoadingSpin } from '../../../../components/alerts/Alerts';
// import Table from '../../../../components/table/Table';
const SchoolAdmins = () => {

  const url = "school-admin/";
  const { setDisplayOverlay} = useOverlay();
  const [adminModal, setAdminModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [adminData, setAdminData] = useState();


  const clickAdd = () => {
    setDisplayOverlay(true);
    setAdminModal(true);
  }
  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url).then((res) => {
      // console.log(res);
      setAdminData(res.data);
      setIsLoading(false);
    }).catch((err)=>{
      setIsLoading(false);
      // console.log(err.response);
    })
    // eslint-disable-next-line 
  }, [])

  return (
    isLoading ? <LoadingSpin /> :
    <div>
      {adminData?.length === 0 && <Empty emptyTitle={"No School Admin"} emptyImg={schadmin} emptyBtn={"Add School Admin"} emptyRightIcon={<Add />} btnClick={clickAdd} />}
      <AddSchAdmin display={adminModal} setDisplay={setAdminModal} />
      {/* <Table /> */}
    </div>
  )
}

export default SchoolAdmins