import React from 'react';
import g1 from "../../assets/images/gallery/g1.png";
import g2 from "../../assets/images/gallery/g2.png";
import g3 from "../../assets/images/gallery/g3.png";
import g4 from "../../assets/images/gallery/g4.png";
import g5 from "../../assets/images/gallery/g5.png";
import g6 from "../../assets/images/gallery/g6.png";
import g7 from "../../assets/images/gallery/g7.png";
import g8 from "../../assets/images/gallery/g8.png";
import g9 from "../../assets/images/gallery/g9.png";
import g10 from "../../assets/images/gallery/g10.png";
import g11 from "../../assets/images/gallery/g11.png";
import g12 from "../../assets/images/gallery/g12.png";
import g13 from "../../assets/images/gallery/g13.png";
import g14 from "../../assets/images/gallery/g14.png";
import g15 from "../../assets/images/gallery/g15.png";
import g16 from "../../assets/images/gallery/g16.png";
import g17 from "../../assets/images/gallery/g17.png";
import g18 from "../../assets/images/gallery/g18.png";
import g19 from "../../assets/images/gallery/g19.png";
import g20 from "../../assets/images/gallery/g20.png";
import g21 from "../../assets/images/gallery/g21.png";
import g22 from "../../assets/images/gallery/g22.png";
import g23 from "../../assets/images/gallery/g23.png";
import g24 from "../../assets/images/gallery/g24.png";
import g25 from "../../assets/images/gallery/g25.png";
import g26 from "../../assets/images/gallery/g26.png";
import g27 from "../../assets/images/gallery/g27.png";
import g28 from "../../assets/images/gallery/g28.png";
import g29 from "../../assets/images/gallery/g29.png";
import g30 from "../../assets/images/gallery/g30.png";
import g31 from "../../assets/images/gallery/g31.png";
import g32 from "../../assets/images/gallery/g32.png";
import g33 from "../../assets/images/gallery/g33.png";

import "./gallery.css";

const GalleryComp = () => {

    const galleryImg = [
        {
            id: "1",
            img: g1
        },
        {
            id: "2",
            img: g2
        },
        {
            id: "1",
            img: g3
        },
        {
            id: "2",
            img: g4
        },
        {
            id: "1",
            img: g5
        },
        {
            id: "2",
            img: g6
        },
        {
            id: "1",
            img: g7
        },
        {
            id: "2",
            img: g8
        },
        {
            id: "1",
            img: g9
        },
        {
            id: "2",
            img: g10
        },
        {
            id: "1",
            img: g11
        },
        {
            id: "2",
            img: g12
        },
        {
            id: "1",
            img: g13
        },
        {
            id: "2",
            img: g14
        },
        {
            id: "1",
            img: g15
        },
        {
            id: "2",
            img: g16
        },
        {
            id: "1",
            img: g17
        },
        {
            id: "2",
            img: g18
        },
        {
            id: "1",
            img: g19
        },
        {
            id: "2",
            img: g20
        },
        {
            id: "1",
            img: g21
        },
        {
            id: "2",
            img: g22
        },
        {
            id: "1",
            img: g23
        },
        {
            id: "2",
            img: g24
        },
        {
            id: "1",
            img: g25
        },
        {
            id: "2",
            img: g26
        },
        {
            id: "1",
            img: g27
        },
        {
            id: "2",
            img: g28
        },
        {
            id: "1",
            img: g29
        },
        {
            id: "2",
            img: g30
        },
        {
            id: "1",
            img: g31
        },
        {
            id: "2",
            img: g32
        },
        {
            id: "1",
            img: g33
        },
    ]

  return (
    <div className='gallery'>
        <div className="gallery-head">
            <h2>Gallery</h2>
            <p>Take a glance through every project that we’ve undergone and achieved in the last year, including events that have been organized to empower both teachers and students and promote a conducive learning environment for both parties.</p>
        </div>
        <div className="gallery-img_cont">
            {galleryImg.map((item,idx) => {
                return(
                    <div key={idx} className={'gallery-img'}>
                        {item.id === "1" && <img src={item.img} alt="gallery" />}
                        {item.id === "2" && <img src={item.img} alt="gallery" />}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default GalleryComp