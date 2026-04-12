import React from 'react';

import "./newsletter.css";
import { Input } from '../custom-inputs/CustomInputs';
import mail from "../../assets/images/mail.png"

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter-head">
            <h2>Newsletter</h2>
            <p>Stay updated with the latest educational insights, trends, and news by subscribing to our newsletter. Our monthly newsletter provides a curated selection of articles, tips, and success stories in education. Join our community of educators, students, and parents to stay informed and inspired.</p>
        </div>
        <div className="newsletter-input">
            <Input inputLabel={"Email"} inputPlaceholder={`johndoe@example.com`} imgleft={mail} imgLeftAlt={"mail"} />
            <button className="btn">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter