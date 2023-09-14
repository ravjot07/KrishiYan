import Footer from "../componrnts/Footer"
import Hero from "../componrnts/Hero"
import Hero2 from "../componrnts/Hero2"
import Hero3 from "../componrnts/Hero3"
import Navbar from "../componrnts/Navbar"
import Preloader from "../componrnts/Preloader"

const Home = () => {
  return (
    <>
    <Preloader />
    <Navbar />
    <Hero />
    <Hero2 />
    <Hero3 />
    <Footer />
    </>
    
  )
}

export default Home