import React from 'react'
import phone from "../../assets/images/phone.png"
import envelope from "../../assets/images/envelope.png"
import map from "../../assets/images/map-pin.png"
import ellipse from "../../assets/images/Ellipse.png"
import ellipse1 from "../../assets/images/Ellipse1.png"
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
            <div className='card-img'>
                <img className='ellipse' src={ellipse} alt="" />
                <img src={ellipse1} alt="" />
            </div>
        </div>
        </div>
           <form className='contact-form'>
            <div className='form-name'>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" placeholder='First Name' />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" placeholder='Last Name' />
                </div>
            </div>
            <div className='form-name'>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder='Email Address' />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="" />
                </div>
            </div>
            <div>
                <label htmlFor="textarea">Message</label>
                <textarea name="textarea" placeholder='Enter a message...'></textarea>
            </div>
            <button  className='btn' type="submit">Send Message</button>
           </form>
        </div>
    </div>
  )
}

export default Contact
