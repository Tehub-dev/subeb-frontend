import React from "react";
import "./chart.css"; // Import your CSS file for styling

const ProgressBar = ({ data }) => {
  return (
    <div className="chart-cont">
      {data && data.map((item, idx) => (
        <div className="day" key={idx}>
          <div className="class">
            <p>{item.className}</p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(item.percentage / 100) * 100}%` }}
            ></div>
          </div>
          <div className="per">{item.percentage}%</div>
        </div>
      ))}
    </div>
  );
};

const Chart = ({ UserData, isStudent }) => {
  return (
    <>
    {!isStudent && <div className="chart studentper-class">
      <h1>Student per Class</h1>
      <ProgressBar data={UserData} />
    </div>}
    </>
  );
};

export default Chart;
