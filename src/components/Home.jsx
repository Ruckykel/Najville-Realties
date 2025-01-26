import Footer from './Footer'
import HomeHero from './HomeHero'
import HomeServices from './HomeServices'
import Navbar from './Navbar'
import Testimonials from './Testimonials'
import WhoWeAre from './WhoWeAre'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HomeHero />
      <WhoWeAre />
      <HomeServices />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home