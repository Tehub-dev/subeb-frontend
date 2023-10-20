import React from 'react';
import { XIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from '@heroicons/react/outline';

import "./alerts.css";
import { TickCircle } from 'iconsax-react';

export const SuccessAlert = ({message}) => {
  return (
    <div className='success-alert'>
        <TickCircle style={{color: "#049C29"}} size={14} />
        <h3>{message}</h3>
        <XIcon className="close-x" />
    </div>
  )
}

export const ErrorAlert = ({message}) => {
  return (
    <div className='error-alert'>
        <ExclamationIcon className='exclamation' />
        <h3>{message}</h3>
        <XIcon className="close-x" />
    </div>
  )
}
