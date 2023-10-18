import React from 'react'
import Newsletter from '../../components/newsletter/Newsletter'
import Carousel from '../../components/carousel/Carousel'
import Mission from '../../components/mission/Mission'
import Vision from '../../components/vision/Vision'
import Pillar from '../../components/pillar/Pillar'

const Aboutus = () => {
  const slides = [
    {}
  ]
  return (
    <div>
      <Carousel slides={slides}/>
      <Mission />
      <Vision />
      <Pillar />
      <Newsletter />
    </div>
  )
}

export default Aboutus