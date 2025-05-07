import Footer from '../Footer'
import Navbar from '../Navbar'
import AdditionalServicesSection from './AdditionalServicesSection'
import HeroSection from './HeroSection'
import MainServiceSection from './MainServiceSection'

const Services = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HeroSection />
      <MainServiceSection />
      <AdditionalServicesSection />
      <Footer />
    </div>
  )
}

export default Services