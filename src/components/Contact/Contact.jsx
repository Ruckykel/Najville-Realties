import Footer from '../Footer'
import Navbar from '../Navbar'
import ContactHeroSection from './ContactHeroSection'
import ContactInfoSection from './ContactInfoSection'

const Contact = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <ContactHeroSection />
      <ContactInfoSection />
      <Footer />
    </div>
  )
}

export default Contact