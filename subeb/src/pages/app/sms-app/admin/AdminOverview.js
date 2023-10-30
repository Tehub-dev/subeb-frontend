import React, { useEffect, useState } from 'react'
import DashboardGrid from '../../../../components/dashboardgrid/DashboardGrid'
import Barchart from '../../../../components/charts/Barchart'
import Chart from '../../../../components/charts/Chart'
import { UserData } from '../../../../components/charts/Data';
import { AxiosAuthGet } from '../../../../axios/axios';

const AdminOverview = () => {
  const url = "dashboard/?week=Week%201&term=First%20Term";
  
  useEffect(() => {
    // setIsLoading(true);
    AxiosAuthGet(url).then((res) => {
      console.log(res);
      // setAdminData(res.data);
      // setIsLoading(false);
    }).catch((err)=>{
      // setIsLoading(false);
      console.log(err.response);
    })
    // eslint-disable-next-line 
  }, []);

  const [userData, 
    // setUserData
  ] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [{
      label: 'Student Attendance',
      data: UserData.map((data) => data.student),
      backgroundColor: "#F26722",
      barThickness: 20
    }]
  }) 
  return (
    <div>
      <DashboardGrid />
      <Barchart chartData={userData} />
      <Chart />
    </div>
  )
}

export default AdminOverview