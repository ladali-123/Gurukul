import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Leadership from './components/Leadership'
import Admissionsfaq from './components/Admissionsfaq'
import Contactus from './components/Contactus'
import Boarding from './components/Boarding'
import Careers from './components/Careers'
import BeyondAcademics from './components/Beyondacademics'
import Curriculum from './components/Curriculum'

function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/admissions" element={<Admissionsfaq />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/boarding" element={<Boarding />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/beyond-academics" element={<BeyondAcademics />} />
        <Route path="/curriculum" element={<Curriculum />} />
     
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
