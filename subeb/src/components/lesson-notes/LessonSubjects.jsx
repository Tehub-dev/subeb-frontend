import React from 'react';

import "./lesson-notes.css";
import { Button, SelectInput } from '../custom-inputs/CustomInputs';
import upload from "../../assets/images/arrow-up-tray.png";

const LessonSubjects = ({lessonSubjects, clickBtn, clickSubject, teachers}) => {

  return (
    <div className='lesson-subjects'>
        <div className="lesson-sub_head">
            <p>Sort by : </p>
            <SelectInput placeholder={"A-Z"} />
        </div>
        <div className="subjects-cont">
            {lessonSubjects && lessonSubjects.map((item,idx) => {
                return(
                    <div onClick={() => {if(clickSubject){clickSubject(item)}}} key={idx} className="each-subjects">
                        <h3>{item.subject}</h3>
                        <p>{item.subject} Lesson Notes</p>
                    </div>
                )
            })}
        </div>
        {!teachers && <div className="subjects-btn">
            <Button btnText={"Upload Lesson Notes"} btnImg={upload} btnClick={clickBtn} />
        </div>}
    </div>
  )
}

export default LessonSubjects