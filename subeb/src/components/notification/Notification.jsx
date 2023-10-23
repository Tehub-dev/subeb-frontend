import React from 'react';

import "./nots.css";

const Notification = () => {

    const notData = [
        {
            tittle: "Welcome",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
        {
            tittle: "Welcome",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
        {
            tittle: "Welcome",
            text: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
    ]
  return (
    <div className='notification-cont'>
        <div className="not-head">
            <h3>Notifications <span>100</span></h3>
        </div>
        <div className="not-data">
            {notData.map((item,idx) => {
                return (
                    <div key={idx} className="each-data">
                        <h4>{item.tittle}</h4>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Notification