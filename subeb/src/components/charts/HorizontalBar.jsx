import React from 'react'
import {  Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);


function HorizontalBar({ chartData }) {
    const options = {
          indexAxis: 'y'
    }
  return <Bar data={chartData} options={options} />
}

export default HorizontalBar