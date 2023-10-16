import React from 'react';

import "./programs.css";
import { ArrowRight } from 'iconsax-react';

const OurPrograms = () => {

    const programsArr = [
        {
            num: "01",
            title: "Quality Education Access",
            text: "We are committed to providing every school-age child with the opportunity to access quality education. Our programme ensures that no child is left behind in the education system, and we work tirelessly to remove barriers to learning.",
        },
        {
            num: "02",
            title: "School Management",
            text: "We are in-charge of managing all schools in the local governments under Ondo State to ensure the smooth running of all schools and provide the right amenities and infrastructure to aid learning.",
        },
        {
            num: "03",
            title: "Capacity Building for Teachers",
            text: "We are focused on providing quality education, and it involves constantly training the educators in-charge of the pupils to upskill in order to provide the right amount of quality.",
        },
    ]

  return (
    <div className='programs-section'>
        <div className="programs-top">
            <h2>Our <br /> Programs <ArrowRight size={44} /></h2>
        </div>
        <div className="programs-bottom">
            {programsArr.map((item,idx) => {
                return(
                    <div className="each-program" key={idx}>
                        <h3>{item.num}</h3>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default OurPrograms