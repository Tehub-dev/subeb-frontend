import React, { useState } from 'react';

import "./lesson-notes.css";
import { Button, SelectInput } from '../custom-inputs/CustomInputs';
import { DeletePopup, UpdatePopup } from '../alerts/Alerts';
import useOverlay from '../../hooks/useOverlay';

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

    const {setDisplayOverlay} = useOverlay();

    const [display, setDisplay] = useState(false);
    const [displayDelete, setDisplayDelete] = useState(false);

    const clickUpdate = () =>{
        setDisplay(!display);
        setDisplayOverlay(true);
    }
    const clickRemove = () =>{
        setDisplayDelete(!displayDelete);
        setDisplayOverlay(true);
    }

    const cancelClick = () =>{
        setDisplay(!display);
        setDisplayOverlay(false);
    }
    const cancelDelete = () =>{
        setDisplayDelete(!displayDelete);
        setDisplayOverlay(false);
    }


  return (
    <div className='lesson-weeks'>
        <UpdatePopup display={display} title={"Update Lesson Note"} text={"Are you sure you want to update this lesson note?"} cancelBtn={cancelClick} />
        <DeletePopup display={displayDelete} title={"Remove Lesson Note"} text={"Are you sure you want to remove this lesson note?"} cancelBtn={cancelDelete} />
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
                            <Button btnText={"Update"} btnClass={"btn-small"} btnClick={clickUpdate} />
                            <Button btnText={"Remove"} btnColor={"red"} btnClass={"btn-small-white"} btnClick={clickRemove}  />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default LessonWeeks