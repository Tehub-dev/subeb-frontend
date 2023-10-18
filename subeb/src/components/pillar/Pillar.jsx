import React from 'react'
import pillar1 from "../../assets/images/pillarImg1.png"
import pillar2 from "../../assets/images/pillarImg2.png"
import pillar3 from "../../assets/images/pillarImg3.png"

import "./pillar.css"
function Pillar() {
  return (
    <div className='pillar'>
      <h4>Our Pillar</h4>
      <p>Welcome to our E-Library the ultimate platform for educational institutions. We've designed this system with the vision to make learning and school administration more efficient, accessible, and engaging.Welcome to our E-Library the ultimate platform for educational institutions. We've designed this system with the vision to make learning and school administration more efficient, accessible, and engaging.</p>
      <div>
        <img src={pillar1} alt="pillarimg1" />
        <img src={pillar2} alt="pillarimg2" />
        <img src={pillar3} alt="pillarimg3" />
      </div>
    </div>
  )
}

export default Pillar
