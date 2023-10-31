import React from 'react'
import './dashboardgrid.css'

function DashboardGrid({school, teacher, student, isTeacher, isStudent}) {
  return (
    <div className='dashboard'>
      {!isTeacher && <div className='card'>
        <h3>Schools</h3>
        <div className='card-des'>
            <span className='num'>
                {school}
            </span>
            <span className='raise'>
            +11.01%
            </span>
        </div>
      </div>}
      {!isStudent && <div className='card'>
        <h3>Teachers</h3>
        <div className='card-des'>
        <span className='num'>
                {teacher}
        </span>
        <span className='raise'>
            +11.01%
        </span>
        </div>
      </div>}
      <div className='card'>
        <h3>Students</h3>
        <div className='card-des'>
        <span className='num'>
                {student}
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
