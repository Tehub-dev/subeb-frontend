import React from "react";
import "./bar.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import Notification from "../notification/Notification";
import { SelectInput } from "../custom-inputs/CustomInputs";
ChartJS.register(ArcElement, Tooltip, Legend);

function Barchart({ chartData, desktopNot, termPl, setTermPl, opsArr, weekArr, weekPl, setWeekPl }) {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="bar">
      <div className="child bar-child">
        <div className="bar-child_head">
            <h2>Students Attendance</h2>
            <div className="bar-child_select">
                <SelectInput placeholder={termPl} setPlaceholder={setTermPl} opsArr={opsArr} />
                <SelectInput placeholder={weekPl} setPlaceholder={setWeekPl} opsArr={weekArr} />
            </div>
        </div>
        <Bar data={chartData} options={options} />
      </div>
      <div className="child not-child">
        <Notification desktopNot={desktopNot} />
      </div>
    </div>
  );
}

export default Barchart;
