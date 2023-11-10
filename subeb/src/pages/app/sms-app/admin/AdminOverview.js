import React, { useEffect, useState } from "react";
import DashboardGrid from "../../../../components/dashboardgrid/DashboardGrid";
import Barchart from "../../../../components/charts/Barchart";
import Chart from "../../../../components/charts/Chart";
import { AxiosAuthGet } from "../../../../axios/axios";
import { LoadingSpin } from "../../../../components/alerts/Alerts";
import { weeks } from "../../../../components/charts/Data";

const AdminOverview = () => {
  const [desktopData, setDesktopData] = useState();
  const [studentData, setStudentData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [plTerm, setPlTerm] = useState("First Term");
  const [plWeek, setPlWeek] = useState("Week 1");
  const weekArr = weeks;
  const termArr = [
    {
      id: "First Term",
      name: "First Term"
    },
    {
      id: "Second Term",
      name: "Second Term"
    },
    {
      id: "Third Term",
      name: "Third Term"
    },
  ]
  const url = `dashboard/?week=${plWeek}&term=${plTerm}`;
  
  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
    .then((res) => {
      // console.log(res);
      setDesktopData(res.data);
      setStudentData(res.data.studentAttendance);
      // setBarData(studentData.map((data) => data.dayCount));
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      // console.log(err.response);
    });
    // eslint-disable-next-line
  }, [plTerm, plWeek]);

  const barData = studentData?.map((data) => data.dayCount)
  
  const userData= {
    labels: ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Student Attendance",
        data: barData,
        backgroundColor: "#F26722",
        barThickness: 20,
      },
    ],
  };
  return (
    isLoading ? <LoadingSpin /> :
    <div>
      <DashboardGrid school={desktopData?.countsData?.schoolCount} teacher={desktopData?.countsData?.teacherCount} student={desktopData?.countsData?.studentCount} />
      <Barchart chartData={userData} desktopNot={desktopData?.notifications} termPl={plTerm} setTermPl={setPlTerm} opsArr={termArr} weekArr={weekArr} weekPl={plWeek} setWeekPl={setPlWeek} />
      <Chart UserData={desktopData?.studentPerClass} />
    </div>
  );
};

export default AdminOverview;