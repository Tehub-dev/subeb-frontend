import React from 'react'
import { useState } from 'react';
import Barchart from '../../../../components/charts/Barchart';
import { UserData } from '../../../../components/charts/Data';
import DashboardGrid from '../../../../components/dashboardgrid/DashboardGrid';
import Chart from '../../../../components/charts/Chart';

const SchoolOverview = () => {
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

export default SchoolOverview