import '../components/Carousel'
import '../components/CompetencySection'
import '../components/About'
import '../components/Quick'
import '../components/Video'
import '../components/Admission'

import Carousel from '../components/Carousel'
import CompetencySection from '../components/CompetencySection'
import About from '../components/About'
import Quick from '../components/Quick'
import Video from '../components/Video'
import Admission from '../components/Admission'

const Home = () => {
  return (
    <>
      <Carousel />
      <CompetencySection />
      <About />
      <Quick />
      <Video />
      <Admission />
    </>
  )
}

export default Home

