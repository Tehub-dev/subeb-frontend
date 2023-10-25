import React from 'react'
import "./bar.css"
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import Notification from '../notification/Notification';
ChartJS.register(ArcElement, Tooltip, Legend);

function Barchart({ chartData }) {
    return (
        <div className='bar'>
            <Bar data={chartData} />
            <Notification />
        </div>
    )
}

export default Barchart
