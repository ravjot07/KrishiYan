import React from 'react'
import TechCard from '../componrnts/TechCard'
import Navbar from '../componrnts/Navbar'
import TechCard1 from '../componrnts/TechCard1'
import TechBanner from '../componrnts/TechBanner'
import TechCard2 from '../componrnts/TechCard2'
import TechCard3 from '../componrnts/TechCard3'
import Footer from '../componrnts/Footer'
import Preloader from '../componrnts/Preloader'

const OurTech = () => {
  return (
    <>

    <Preloader />
    <Navbar />
    <TechBanner />
    
    <TechCard2 />
    <TechCard3 />
    <TechCard1 />
    <TechCard />
    <Footer />
   
    </>
  )
}

export default OurTech