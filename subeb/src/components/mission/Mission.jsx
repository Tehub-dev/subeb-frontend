import React from 'react'
import "./mission.css"
import mission1 from "../../assets/images/mission-img1.png"
import mission2 from "../../assets/images/mission-img2.png"
import mission3 from "../../assets/images/mission-img3.png"

function Mission() {
  return (
    <div className='mission'>
      <h3>Mission</h3>
      <p>To involve all and sundry to mobilize and utilize resources in a transparent and accountable manner to raise all school-age children through quality education to be responsible and reliable citizens who place premium value on self-reliance.</p>
      <div>
        <img src={mission1} alt="missionimg1" />
        <img src={mission2} alt="missionimg2" />
        <img src={mission3} alt="missionimg3" />
      </div>
    </div>
  )
}

export default Mission
