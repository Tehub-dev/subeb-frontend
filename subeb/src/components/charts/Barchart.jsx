import React from 'react'
import "./bar.css"
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import Notification from '../notification/Notification';
ChartJS.register(ArcElement, Tooltip, Legend);

function Barchart({ chartData }) {
    const options = {
       scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            grid: {
                display: false,
            }
        }
       } 
  }
    return (
        <div className='bar'>
            <div className="child">
            <Bar data={chartData} options={options}/>
            </div>
            <div className="child">
            <Notification />
            </div>
        </div>
    )
}

export default Barchart
