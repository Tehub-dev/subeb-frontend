import React from 'react'

import "./pillar.css"
function Pillar() {
  return (
    <div className='pillar'>
      <h4>Our Values</h4>
      <p>These values serve as the cornerstone of our commitment to providing quality education, grooming self-reliant individuals, and promoting responsibility.</p>
      <div className='value-card'>
        <div className='card-box'>
          <h3>Quality</h3>
          <p>Providing school-age with quality education and skills that will help them become responsible adults and independent people in the future is our driving force.</p>
        </div>
        <div className='card-box'>
          <h3>Innovation</h3>
          <p>We are forward-thinkers and committed to providing a conducive environment for learning. Hence, by embracing innovation, we keep up with trends that can help solve emerging problems in education and add value to our programs.</p>
        </div>
        <div className='card-box'>
          <h3>Inclusivity</h3>
          <p>We believe that education should be accessible to all, regardless of socio-economic status, gender, or background. Inclusivity is at the heart of our efforts to leave no child behind when it comes to their education.</p>
        </div>
        <div className='card-box'>
          <h3>Accountability</h3>
          <p>We take responsibility for our actions and decisions. This accountability proves that we are constantly striving to improve and making informed choices to achieve better outcomes.</p>
        </div>
      </div>
    </div>
  )
}

export default Pillar
