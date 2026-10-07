import Footer from '../Footer'
import Navbar from '../Navbar'
import PortfolioGallery from './PortfolioGallery'
import PortfolioHero from './PortfolioHero'

const Portfolio = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <PortfolioHero />
      <PortfolioGallery />
      <Footer />
    </div>
  )
}

export default Portfolio
