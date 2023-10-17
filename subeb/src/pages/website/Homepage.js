import React from 'react'
import Hero from '../../components/hero/Hero'
import OurPrograms from '../../components/programs/OurPrograms'
import LogoDiv from '../../components/logo-div/LogoDiv'
import WhatweDo from '../../components/what-we-do/WhatweDo'
import Newsletter from '../../components/newsletter/Newsletter'
import Department from '../../components/department/Department'
import NewsEvent from '../../components/news&events/NewsEvent'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <OurPrograms />
      <LogoDiv />
      <WhatweDo />
      <Department />
      <NewsEvent />
      <Newsletter />
    </div>
  )
}

export default Homepage