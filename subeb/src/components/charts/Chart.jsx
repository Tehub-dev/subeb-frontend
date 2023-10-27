import React from 'react';
import './chart.css'; // Import your CSS file for styling

const UserData = [
  {
    id: 1,
    day: 'Primary 1',
    student: 50,
  },
  {
    id: 2,
    day: 'Tuesday',
    student: 70,
  },
  {
    id: 3,
    day: 'Wednesday',
    student: 10,
  },
  {
    id: 4,
    day: 'Thursday',
    student: 100,
  },
  {
    id: 5,
    day: 'Friday',
    student: 80,
  },
];

const ProgressBar = ({ data }) => {
  return (
    <div className='chart-cont'>
      {data.map((item) => (
        <div className="day" key={item.id}>
          <div className='class'><p>{item.day}</p></div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(item.student / 100) * 100}%` }}
            >
            </div>
          </div>
          <div className='per'>
            {item.student}%
            </div>
        </div>
      ))}
    </div>
  );
};

const Chart = () => {
  return (
    <div className='chart studentper-class'>
      <h1>Student per Class</h1>
      <ProgressBar data={UserData} />
    </div>
  );
};

export default Chart;