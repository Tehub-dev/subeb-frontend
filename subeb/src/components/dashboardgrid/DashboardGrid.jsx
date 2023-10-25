import React from 'react'
import './dashboardgrid.css'

function DashboardGrid() {
  return (
    <div className='dashboard'>
      <div className='card'>
        <h3>Schools</h3>
        <div className='card-des'>
            <span className='num'>
                721
            </span>
            <span className='raise'>
            +11.01%
            </span>
        </div>
      </div>
      <div className='card'>
        <h3>Teachers</h3>
        <div className='card-des'>
        <span className='num'>
                7210
        </span>
        <span className='raise'>
            +11.01%
        </span>
        </div>
      </div>
      <div className='card'>
        <h3>Students</h3>
        <div className='card-des'>
        <span className='num'>
                721,000
            </span>
            <span className='raise'>
            +11.01%
            </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardGrid
