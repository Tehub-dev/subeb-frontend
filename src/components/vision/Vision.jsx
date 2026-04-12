import React from 'react'
import vision1 from "../../assets/images/visionImg1.png"
import vision2 from "../../assets/images/visionImg2.png"
import vision3 from "../../assets/images/visionImg3.png"
import "./vision.css"

function Vision() {
  return (
    <div className='vision'>
        <h4>Vision</h4>
        <p>To provide a mandatory foundational education aimed at equipping every school-age child with the skills and values necessary to become responsible, dependable citizens who prioritize self-sufficiency.</p>
        <div>
        <img src={vision1} alt="missionimg1" />
        <img src={vision2} alt="" />
        <img src={vision3} alt="" />
      </div>
    </div>
  )
}

export default Vision
