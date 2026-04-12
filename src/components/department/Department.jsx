import React from 'react';
import logo from "../../assets/images/logo.png";

import "./department.css";

const Department = () => {

    const eachDept = [
        {
            title: "Finance and Supply",
            text: "This department is responsible for managing financial resources and ensuring the efficient procurement and distribution of necessary supplies to support our educational initiatives.",
        },
        {
            title: "Planning Research and Statistics",
            text: "This department focuses on research and data analysis and plays an important role in our decision-making. They play a vital role in assessing the impact of our programmes and shaping future strategies.",
        },
        {
            title: "School Services",
            text: "The School Services department is dedicated to enhancing the quality of educational institutions. They work on improving school infrastructure, maintenance, and creating a conducive learning environment.",
        },
        {
            title: "Academic Services",
            text: "They oversee curriculum development, teacher training, and educational programme implementation. They ensure that our students receive a well-rounded and quality education.",
        },
        {
            title: "Social Mobilization",
            text: "This department is responsible for community engagement and advocacy. They work to mobilize communities and promote the importance of education.",
        },
        {
            title: "Personnel Management",
            text: "They focus on the recruitment, development, and support of our dedicated staff. They ensure that our team is properly equipped to deliver quality education.",
        },
        {
            title: "Accounts Department",
            text: "This department manages financial records, budgeting, and financial reporting, ensuring transparency and accountability in our financial operations.",
        },
        {
            title: "Physical Planning",
            text: "This department is in charge of the physical infrastructure of educational facilities. They oversee construction, renovation, and maintenance to create conducive learning environments.",
        },
    ]

  return (
    <div className='department'>
        <div className="department-head">
            <h2>Departments</h2>
            <p>We are structured into various sections, each playing a critical role in the achievement of our mission and vision. Here's an overview of our departments.</p>
        </div>
        <div className="each-dept_cont">
            {eachDept.map((item,idx) => {
                return(
                    <div key={idx} className="each-dept_content">
                        <img src={logo} alt="logo" />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Department