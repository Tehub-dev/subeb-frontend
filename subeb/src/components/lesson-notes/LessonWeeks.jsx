import React from 'react';

import "./lesson-notes.css";
import { Button, SelectInput } from '../custom-inputs/CustomInputs';

const LessonWeeks = () => {

    const lessonWeeks = [
        {
            id: "1",
            week: "Week 1"
        },
        {
            id: "2",
            week: "Week 2"
        },
        {
            id: "3",
            week: "Week 3"
        },
        {
            id: "4",
            week: "Week 4"
        },
        {
            id: "5",
            week: "Week 5"
        },
    ]

  return (
    <div className='lesson-weeks'>
        <div className="lesson-weeks_head lesson-class_head">
            <SelectInput placeholder={"Social Studies"} />        
            <SelectInput placeholder={"Primary 4"} />        
        </div>
        <div className="weeks-cont subjects-cont">
            {lessonWeeks.map((item, idx) => {
                return (
                    <div key={idx} className="each-week">
                        <h3>{item.week}</h3>
                        <div className="each-week_btn">
                            <Button btnText={"Update"} btnClass={"btn-small"} />
                            <Button btnText={"Remove"} btnColor={"red"} btnClass={"btn-small-white"}  />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default LessonWeeks