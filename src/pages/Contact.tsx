import React from 'react'
import ContactBanner from '../componrnts/ContactBanner'
import Preloader from '../componrnts/Preloader'
import Navbar from '../componrnts/Navbar'
import Footer from '../componrnts/Footer'
import ContactUs from '../componrnts/ContactUs'

const Contact = () => {
  return (
    <>
    <Preloader />
    <Navbar />
    <ContactBanner />
    <ContactUs />
    <Footer />
    </>
  )
}

export default Contact