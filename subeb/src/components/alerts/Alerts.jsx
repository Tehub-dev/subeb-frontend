import React, { useEffect} from 'react';
import { XIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from '@heroicons/react/outline';

import "./alerts.css";
import { TickCircle } from 'iconsax-react';

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
