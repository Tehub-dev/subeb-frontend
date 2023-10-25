import React from 'react'
import { useState } from 'react';
import Search from '../../../../components/search/SearchComp';
import Barchart from '../../../../components/charts/Barchart';
import { UserData, StuData } from '../../../../components/charts/Data';
import HorizontalBar from '../../../../components/charts/HorizontalBar';
import DashboardGrid from '../../../../components/dashboardgrid/DashboardGrid';

const SchoolOverview = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [{
      label: 'Student Attendance',
      data: UserData.map((data) => data.student),
      backgroundColor: "#F26722",
    }]
  }) 

  const [stuData, setStuData] = useState({
    labels: StuData.map((data) => data.day),
    datasets: [{
      label: 'Student Attendance',
      data: StuData.map((data) => data.student),
      backgroundColor: "#F26722",
    }]
  }) 

  return (
    <div>
      <Search />
      <DashboardGrid />
      <div style={{ width: 630}}>
      <Barchart chartData={userData} />
      <HorizontalBar  chartData={stuData} />
      </div>
      </div>
  )
}

export default SchoolOverview