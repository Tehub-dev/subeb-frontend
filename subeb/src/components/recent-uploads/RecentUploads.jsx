import React from 'react';
import pdf from "../../assets/images/PDF.png";

import "./recent-uploads.css";
import { Button } from '../custom-inputs/CustomInputs';
import { TickCircle } from 'iconsax-react';

const RecentUploads = ({uploadData, viewAll}) => {

    const clickUpload = () => {
        if (viewAll){
            viewAll();
        }
    }

  return (
    <div className='recent-uploads'>
        <div className="upload-cont">
            {uploadData && uploadData.map((item, idx) => {
                return (
                    <div key={idx} className="each-upload">
                        <div className="upload-text">
                            <h3><img src={pdf} alt="icon" />{item.fileName}</h3>
                            <p>{item.elapsedTime}</p>
                        </div>
                        <h4>{item.fileSize}</h4>
                    </div>
                )
            })}
        </div>
        <div className="upload-btn">
            <Button btnClass={"btn-white"} btnText={"View All uploads"} btnClick={clickUpload} />
        </div>
        <div className="last-sync">
            <p><TickCircle /> Last synced: 3 mins ago</p>
        </div>
    </div>
  )
}

export default RecentUploads