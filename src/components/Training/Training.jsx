import Footer from '../Footer'
import Navbar from '../Navbar'
import TrainingCourses from './TrainingCourses'
import TrainingCTA from './TrainingCTA'
import TrainingHero from './TrainingHero'

const Training = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <TrainingHero />
      <TrainingCourses />
      <TrainingCTA />
      <Footer />
    </div>
  )
}

export default Training