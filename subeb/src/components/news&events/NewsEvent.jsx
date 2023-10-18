import React from 'react';
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";

import "./news-event.css";
import { ArrowRight } from 'iconsax-react';
import { Link } from 'react-router-dom';

const NewsEvent = ({btnDisplay}) => {

    const newsEvent = [
        {
            id: "1",
            img: news1,
            date: "25 December, 2023",
            text: "Monitoring of School Resumption for 2023/2024 Academic Session in some Local Government Areas",
        },
        {
            id: "2",
            img: null,
            date: "25 December, 2023",
            text: "Distribution of Sporting Equipment to schools in Ondo State under UBEC/SUBEB Action",
        },
        {
            id: "2",
            img: news2,
            date: "25 December, 2023",
            text: "2) A-Day Training Programme for Head Teachers in the annual UBEC/SUBEB Agricultural Education Training Programme (AETP)",
        },
    ]

  return (
    <div className='news-event'>
        <div className="news-event_head">
            <h2>News & Event</h2>
            <p>Trending educational events and news across Ondo State</p>
        </div>
        <div className="news-event_body">
            {newsEvent.map((item,idx) => {
                return (
                    <div key={idx} className={item.img === news1 ? "event1 each-event" : item.img === news2 ? "event2 each-event" : "normal-event each-event"} style={{width: item.id === "2" && "55%"}}>
                        <p>{item.date}</p>
                        <h3>{item.text}</h3>
                    </div>
                )
            })}
        </div>
        <div className="event-btn" style={{display: btnDisplay}}>
            <Link to={"/news"} style={{textDecoration: "none"}}><button className="btn">View More <ArrowRight /></button></Link>
        </div>
    </div>
  )
}

export default NewsEvent