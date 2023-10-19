import React from 'react'
import Newsletter from '../../components/newsletter/Newsletter'
import Carousel from '../../components/carousel/Carousel'
import Mission from '../../components/mission/Mission'
import Vision from '../../components/vision/Vision'
import Pillar from '../../components/pillar/Pillar'
// import slides from '../../data/carouselData.js'

const Aboutus = () => {
  return (
    <div>
      <Carousel />
      <Mission />
      <Vision />
      <Pillar />
      <Newsletter />
    </div>
  )
}

export default Aboutus