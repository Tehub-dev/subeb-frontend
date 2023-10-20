import React from 'react';

import "./lesson-notes.css";
import { Button, SelectInput } from '../custom-inputs/CustomInputs';
import upload from "../../assets/images/arrow-up-tray.png";

const LessonSubjects = () => {

    const lessonSubjects = [
        {
            id: "1",
            subject: "Social Studies",
            text: "Social Studies Lesson Notes"
        },
        {
            id: "2",
            subject: "Home Economics",
            text: "Home Economics Lesson Notes"
        },
        {
            id: "3",
            subject: "Basic Science",
            text: "Basic Science Lesson Notes"
        },
        {
            id: "4",
            subject: "English Language",
            text: "English Language Lesson Notes"
        },
    ]

  return (
    <div className='lesson-subjects'>
        <div className="lesson-sub_head">
            <p>Sort by : </p>
            <SelectInput placeholder={"A-Z"} />
        </div>
        <div className="subjects-cont">
            {lessonSubjects.map((item,idx) => {
                return(
                    <div key={idx} className="each-subjects">
                        <h3>{item.subject}</h3>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
        <div className="subjects-btn">
            <Button btnText={"Upload Lesson Notes"} btnImg={upload} />
        </div>
    </div>
  )
}

export default LessonSubjects