import React from 'react';
import pdf from "../../assets/images/PDF.png";

import "./recent-uploads.css";
import { Button } from '../custom-inputs/CustomInputs';
import { TickCircle } from 'iconsax-react';

const RecentUploads = () => {

    const uploadData = [
        {
            id: "1",
            name: "Social Studies_Pry5_Week1.pdf",
            size: "604KB",
            time: "2m ago"
        },
        {
            id: "1",
            name: "Social Studies_Pry5_Week1.pdf",
            size: "604KB",
            time: "2m ago"
        },
    ]

  return (
    <div className='recent-uploads'>
        <div className="upload-cont">
            {uploadData.map((item, idx) => {
                return (
                    <div key={idx} className="each-upload">
                        <div className="upload-text">
                            <h3><img src={pdf} alt="icon" />{item.name}</h3>
                            <p>{item.time}</p>
                        </div>
                        <h4>{item.size}</h4>
                    </div>
                )
            })}
        </div>
        <div className="upload-btn">
            <Button btnClass={"btn-white"} btnText={"View All uploads"} />
        </div>
        <div className="last-sync">
            <p><TickCircle /> Last synced: 3 mins ago</p>
        </div>
    </div>
  )
}

export default RecentUploads