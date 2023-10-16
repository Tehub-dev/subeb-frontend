import React from 'react';
import { ArrowRight } from 'iconsax-react';
import hero from "../../assets/images/hero.png";

import "./hero.css";

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="hero-container">
            <div className="hero-left">
                <h1>Grooming the Future <span>Talents</span> of the world</h1>
                <p>Welcome to the Ondo State Universal Education Board, an initiative committed to equipping school-age children with the skills and knowledge they need to be intellectually sufficient and self-reliant.</p>
                <button className="btn">contact us <ArrowRight /></button>
            </div>
            <div className="hero-right">
                <img src={hero} alt="hero-pic" />
            </div>
        </div>
    </div>
  )
}

export default Hero