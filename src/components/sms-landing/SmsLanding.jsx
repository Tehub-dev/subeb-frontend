import React from 'react';
import elips1 from "../../assets/images/elipseleft.png";
import elips2 from "../../assets/images/elipseright.png";

import "./sms-landing.css";
import Back from '../custom-inputs/Back';

const SmsLanding = ({children}) => {

  return (
    <div className='sms-landing'>
        <img className='elips1' src={elips1} alt="elipses" />
        <img className='elips2' src={elips2} alt="elipses" />
        <div className="sms-landing_body">
            <Back />
            {children} 
        </div>
    </div>
  )
}

export default SmsLanding