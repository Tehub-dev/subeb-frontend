import React, { useEffect, useState } from "react";
import DashboardGrid from "../../../../components/dashboardgrid/DashboardGrid";
import Barchart from "../../../../components/charts/Barchart";
import Chart from "../../../../components/charts/Chart";
import { AxiosAuthGet } from "../../../../axios/axios";
import { LoadingSpin } from "../../../../components/alerts/Alerts";
import { terms, weeks } from "../../../../components/charts/Data";

const TeachersOverview = () => {
  const schData = JSON.parse(localStorage.getItem("atk"));
  const [desktopData, setDesktopData] = useState();
  const [studentData, setStudentData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [plTerm, setPlTerm] = useState(schData.data.currentTerm);
  const [plWeek, setPlWeek] = useState(schData.data.currentWeek);
  const weekArr = weeks;
  const termArr = terms;
  const url = `dashboard/teacher/?week=${plWeek}&term=${plTerm}`;

  useEffect(() => {
    setIsLoading(true);
    AxiosAuthGet(url)
      .then((res) => {
        // console.log(res);
        setDesktopData(res.data);
        setStudentData(res.data.studentAttendance);
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
  return isLoading ? (
    <LoadingSpin />
  ) : (
    <div>
      <DashboardGrid
        school={desktopData?.countsData?.schoolCount}
        teacher={desktopData?.countsData?.teacherCount}
        student={desktopData?.countsData?.studentCount}
        isTeacher={true}
        isStudent={true}
      />
      <Barchart
        chartData={userData}
        desktopNot={desktopData?.notifications}
        termPl={plTerm}
        setTermPl={setPlTerm}
        opsArr={termArr}
        weekArr={weekArr}
        weekPl={plWeek}
        setWeekPl={setPlWeek}
      />
      <Chart UserData={desktopData?.studentPerClass} isStudent={true} />
    </div>
  );
};

export default TeachersOverview;
