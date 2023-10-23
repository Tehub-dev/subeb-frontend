import React, { useEffect} from 'react';
import { XIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from '@heroicons/react/outline';
import check from "../../assets/images/check-circle.png";
import errorT from "../../assets/images/alert-triangle.png";

import "./alerts.css";
import { TickCircle } from 'iconsax-react';
import { Button } from '../custom-inputs/CustomInputs';

export const SuccessAlert = ({message, display, setDisplay}) => {

  useEffect(()=> {
    if (setDisplay){
      setTimeout(function() {
        setDisplay(false);
      }, 4000);
    }
    // eslint-disable-next-line
  }, [display]);

  return (
    <div className={display ? 'success-alert' : "none"}>
        <TickCircle style={{color: "#049C29"}} size={14} />
        <h3>{message}</h3>
        <XIcon className="close-x" />
    </div>
  )
}

export const ErrorAlert = ({message, display, setDisplay}) => {

  useEffect(()=> {
    if (setDisplay){
      setTimeout(function() {
        setDisplay(false);
      }, 4000);
    }
    // eslint-disable-next-line
  }, [display]);

  return (
    <div className={display ? 'error-alert' : "none"}>
        <ExclamationIcon className='exclamation' />
        <h3>{message}</h3>
        <XIcon className="close-x" />
    </div>
  )
}


export const UpdatePopup = ({display, title, text, cancelBtn, updateBtn}) => {
  return(
    <div className={display ? "update-popup" : "none"}>
      <div className="check-icon"><img src={check} alt="check" /></div>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="update-btn">
        <Button btnText={"cancel"} btnClass={"btn-small-white"} btnClick={cancelBtn} />
        <Button btnText={"update"} btnClass={"btn-green"} btnClick={updateBtn} />
      </div>
    </div>
  )
}


export const DeletePopup = ({display, title, text, cancelBtn, deleteBtn}) => {
  return(
    <div className={display ? "update-popup" : "none"}>
      <div className="error-icon"><img src={errorT} alt="error" /></div>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="update-btn">
        <Button btnText={"cancel"} btnClass={"btn-small-white"} btnClick={cancelBtn} />
        <Button btnText={"update"} btnClass={"btn-red"} btnClick={deleteBtn} />
      </div>
    </div>
  )
}