import React, { useState } from 'react';

import "./what-we-do.css";
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';

const WhatweDo = () => {

    const whatWeDo = [
        {
            id: "1",
            title: "Curriculum Development",
            text: "Our curriculum is carefully designed to instill a sense of responsibility, self-reliance, and a strong intellectual capacity in the students across Ondo State."
        },
        {
            id: "2",
            title: "Skill Building",
            text: "We believe that education goes beyond the four walls of a classroom, and it is to this effect that we ensure that our students are equipped with practical skills that empower them to become self-sufficient individuals."
        },
        {
            id: "3",
            title: "Infrastructure Improvement",
            text: "We collaborate with state and federal authorities to enhance school facilities, making them conducive to learning. Our efforts include building classrooms, providing access to clean water, and upgrading sanitation facilities."
        },
        {
            id: "4",
            title: "Parent and Community Involvement",
            text: "We actively engage parents and community members in the education process. This collaborative effort ensures that the entire community is invested in the success of its children."
        },
    ];

    const [itemId, setItemId] = useState("");
    const [openFaq, setOpenFaq] = useState(false);


    const openWhatFaq = (item) =>{
        setItemId(item.id);
        if(item.id){
            setOpenFaq(true);
        }
        if(openFaq && itemId === item.id){
            setOpenFaq(false);
        }
    };

  return (
    <div className='whatwe-do'>
        <div className="whatwe-do_head">
            <h2>What We Do</h2>
            <p>Our commitment to provide quality education is unwavering, and this is what we do to achieve it.</p>
        </div>
        <div className="whatwe-do_faq">
            {whatWeDo.map((item,idx) => {
                return (
                    <div key={idx}>
                        <div className="each-whatwe_do" onClick={() => openWhatFaq(item)}>
                            <h3>{item.title}</h3> {itemId === item.id && openFaq ? <ArrowUp2 /> : <ArrowDown2 />}
                        </div>
                        <p className={itemId === item.id && openFaq ? "block faq-p" : "none"}>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default WhatweDo