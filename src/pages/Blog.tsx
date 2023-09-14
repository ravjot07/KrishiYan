import React from 'react'
import BlogSecrtion from '../componrnts/BlogSecrtion'
import Navbar from '../componrnts/Navbar'
import BlogSection from '../componrnts/BlogSection'
import Footer from '../componrnts/Footer'
import Preloader from '../componrnts/Preloader'

const Blog = () => {
  return (
<>
<Preloader />
<Navbar />
<BlogSecrtion />
<BlogSection />
<Footer />
</>
  )
}

export default Blog