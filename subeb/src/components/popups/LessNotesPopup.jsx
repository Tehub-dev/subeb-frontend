import React, { useState } from 'react';
import Popup from './Popup';

import "./popup.css";
import SearchSelect from '../custom-inputs/SearchSelect';
import DocUpload from '../doc-upload/DocUpload';
import arrowUp from "../../assets/images/arrow-up-tray.png";
import emptyUpload from "../../assets/images/emptyUpload.png";
import Empty from '../empty-state/Empty';

const LessNotesPopup = ({display, setDisplay}) => {

    const activeStyle = {
        background: "#F26722",
        color: "white"
    }

    const [active, setActive] = useState("New Upload");

    const popupTabs = ["New Upload", "Recent"];

    const clickTabs = (item) => {
        setActive(item);
    }

  return (
    <Popup display={display} setDisplay={setDisplay}>
        <div className='lesson-notes_popup'>
            <div className="popup-tabs">
                {popupTabs.map((item,idx) => {
                    return(
                        <div key={idx} onClick={() => clickTabs(item)} className="each-tabs" style={active === item ? activeStyle : undefined}>{item}</div>
                    )
                })}
            </div>
            {active === "New Upload" && <div className="new-upload">
                <SearchSelect formLabel={"Subject"} placeholder={"Select Subject"} />
                <SearchSelect formLabel={"Class"} placeholder={"Select Class"} />
                <SearchSelect formLabel={"Week"} placeholder={"Select Week"} />
                <div className="doc-upload">
                    <DocUpload />
                </div>
                <div className="upload-btn">
                    <button className="btn">Upload <img src={arrowUp} alt="icon" /></button>
                </div>
            </div>}

            {active === "Recent" && <div className="recent">
                <Empty emptyText={"No uploads yet"} emptyImg={emptyUpload} emptyWidth={"80%"}  />
            </div>} 
        </div>
    </Popup>
  )
}

export default LessNotesPopup