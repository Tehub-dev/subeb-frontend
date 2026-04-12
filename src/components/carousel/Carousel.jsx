import React from 'react'
import { useState } from 'react';
import c1 from "../../assets/images/carousel/caro-img1.png";
import c2 from "../../assets/images/carousel/caro-img2.png"
import c3 from "../../assets/images/carousel/caro-img3.png"
import c4 from "../../assets/images/carousel/caro-img4.png"
import c5 from "../../assets/images/carousel/caro-img5.png"
import c6 from "../../assets/images/carousel/caro-img6.png"
import c7 from "../../assets/images/carousel/caro-img7.png"
import iconleft from "../../assets/images/carousel/Iconleft.png";
import iconright from "../../assets/images/carousel/Iconright.png";

import "./carousel.css"


function Carousel() {
  const [slide, setSlide] =useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length -1 : slide - 1);
  }

  const slides = [
    {
        "id": 1,
        img: c1,
        "alt": "carousel-image1"
    },
    {
        "id": 2,
        img: c2,
        "alt": "carousel-image"
    },
    {
        "id": 3,
        img: c3,
        "alt": "carousel-image"
    },
    {
        "id": 4,
        img: c4,
        "alt": "carousel-image"
    },
    {
        "id": 5,
        img: c5,
        "alt": "carousel-image"
    },
    {
        "id": 6,
        img: c6,
        alt: "carousel-image"
    },
    {
        "id": 7,
        img: c7,
        "alt": "carousel-image"
    }
]
    
  return (
    <div className='carousel'>
      <button className='arrow left' onClick={prevSlide}><img src={iconleft} alt="" /></button>
      {slides.map((item, idx) => {
        return (
          <div className='slide-imgdiv' key={idx}>
            {<img src={item.img} alt={item.alt} className={slide === idx ? "slide" : "slide slide-hidden"}/>}
          </div>
        )
      })}
      <button className='arrow right' onClick={nextSlide}><img src={iconright} alt="" /></button>
      <span className='indicators'>
        {slides.map((_, idx) => {
        return <button key={idx} onClick={() =>setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>})}
      </span>
    </div>
  )
}

export default Carousel
