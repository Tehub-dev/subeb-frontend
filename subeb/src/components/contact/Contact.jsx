import React from 'react'
import phone from "../../assets/images/phone.png"
import envelope from "../../assets/images/envelope.png"
import map from "../../assets/images/map-pin.png"

import "./contact.css"

function Contact() {
  return (
    <div className='contact'>
    <div className='contact-head'>
    <h2>Contact</h2>
      <p>Welcome to our E-Library the ultimate platform for educational institutions. We've designed this system with the vision to make learning and school administration more efficient, accessible, and en</p>
    </div>
    <div className='contact-body'>
    <div className='contact-info'>
        <h4>Contact Information</h4>
        <p>Send us a message.</p>
        <div className='card'>
            <span><img src={phone} alt="" /> +234012 3456 789</span>
            <span><img src={envelope} alt="" /> demo@gmail.com</span>
            <span><img src={map} alt="" /> Ondo State.</span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
