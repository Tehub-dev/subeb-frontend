import React, { useState } from 'react';

import "./what-we-do.css";
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';

const WhatweDo = () => {

    const whatWeDo = [
        {
            id: "1",
            title: "Curriculum Development",
            text: ""
        },
        {
            id: "2",
            title: "Skill Building",
            text: ""
        },
        {
            id: "3",
            title: "Infrastructure Improvement",
            text: ""
        },
        {
            id: "4",
            title: "Parent and Community Involvement",
            text: ""
        },
    ];

    const [itemId, setItemId] = useState("");
    const [openFaq, setOpenFaq] = useState(false);


    const openWhatFaq = (item) =>{
        setItemId(item.id);
        if(itemId === item.id){
            setOpenFaq(!openFaq);
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
                        <p className={itemId === item.id && openFaq ? "block" : "none"}>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default WhatweDo