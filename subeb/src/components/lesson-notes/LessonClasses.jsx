import React from 'react';

import "./lesson-notes.css";
import { SelectInput } from '../custom-inputs/CustomInputs';

const LessonClasses = () => {

    const lessonClass = [
        {
            id: "1",
            class: "Primary 1"
        },
        {
            id: "2",
            class: "Primary 2"
        },
        {
            id: "3",
            class: "Primary 3"
        },
        {
            id: "4",
            class: "Primary 4"
        },
        {
            id: "5",
            class: "Primary 5"
        },
    ]

  return (
    <div className='lesson-class'>
        <div className="lesson-class_head">
            <SelectInput placeholder={'Social Studies'} />
        </div>
        <div className="lesson-class_cont subjects-cont">
            {lessonClass.map((item, idx) => {
                return (
                    <div key={idx} className="each-class each-subjects"><h3>{item.class}</h3></div>
                )
            })}
        </div>
    </div>
  )
}

export default LessonClasses