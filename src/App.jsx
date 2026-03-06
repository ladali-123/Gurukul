import './App.css'
import Navbar  from './components/Navbar'
import Carousel from './components/Carousel'
import CompetencySection from './components/CompetencySection'
import About from './components/About'
import Quick from './components/Quick'
import  Video  from './components/Video'
import Admission from './components/Admission'
import Footer from './components/Footer'
function App() {
 return (
    <>
     <Navbar/>
     <Carousel/>
     <CompetencySection/>
     <About/>
     <Quick/>
     <Video/>
     <Admission/>
     <Footer/>
    </>
  )
}

export default App
