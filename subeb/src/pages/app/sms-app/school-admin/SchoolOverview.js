import React from 'react'
import { useState } from 'react';
import Search from '../../../../components/search/SearchComp';
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

  // const [stuData, setStuData] = useState({
  //   labels: StuData.map((data) => data.day),
  //   datasets: [{
  //     label: 'Student Attendance',
  //     data: StuData.map((data) => data.student),
  //     backgroundColor: "#F26722",
  //     barThickness: 20
  //   }]
  // }) 

  return (
    <div>
      <Search />
      <DashboardGrid />
      <Barchart chartData={userData} />
      <Chart />
      </div>
  )
}

export default SchoolOverview