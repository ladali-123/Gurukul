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

// New pages for About Us dropdown
import Mission from './pages/Mission'
import Vision from './pages/Vision'
import FactSheet from './pages/FactSheet'
import HajipurCampus from './pages/HajipurCampus'
import BangaloreCampus from './pages/BangaloreCampus'
import ParentAdvisory from './pages/ParentAdvisory'

// Curriculum sub-pages
import IBSSchoolHajipur from './pages/IBSSchoolHajipur'
import SchoolHajipur from './pages/SchoolHajipur'
import SENESL from './pages/SEN'
import Agecriteria from './pages/Agecriteria'

// New pages for Admissions dropdown
import AdmissionProcess from './pages/AdmissionProcess'
import EnquiryForm from './pages/EnquiryForm'
import Faqs from './pages/Faqs'
import Testimonials from './pages/Testimonials'

// Boarding dropdown pages
import BestBoardingHajipur from './pages/BestBoardingHajipur'
import BoardingSchedule from './pages/BoardingSchedule'
import BoardingGallery from './pages/BoardingGallery'

// Beyond Academics dropdown pages
import WholeEducation from './pages/WholeEducation'
import CollaborativeLearningModel from './pages/CollaborativeLearningModel'
import StartupYou from './pages/StartupYou'
import GurukulSchoolOfLeadership from './pages/GurukulSchoolOfLeadership'
import HajipurTrainingAndResearchInstitute from './pages/HajipurTrainingAndResearchInstitute'
import GurukulCommunitySchool from './pages/GurukulCommunitySchool'

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
        
        {/* New Routes for About Us Dropdown */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/fact-sheet" element={<FactSheet />} />
        <Route path="/hajipur-campus" element={<HajipurCampus />} />
        <Route path="/bangalore-campus" element={<BangaloreCampus />} />
        <Route path="/parent-advisory" element={<ParentAdvisory />} />
     
        {/* Curriculum Sub-pages */}
        <Route path="/curriculum/ibs-hajipur" element={<IBSSchoolHajipur />} />
        <Route path="/curriculum/school-hajipur" element={<SchoolHajipur />} />
        <Route path="/curriculum/sen-esl" element={<SENESL />} />
     
        {/* Age Criteria */}
        <Route path="/age-criteria" element={<Agecriteria />} />

        {/* New Routes for Admissions Dropdown */}
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/enquiry-form" element={<EnquiryForm />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/testimonials" element={<Testimonials />} />
     
        {/* Boarding Dropdown Pages */}
        <Route path="/boarding/best-boarding-hajipur" element={<BestBoardingHajipur />} />
        <Route path="/boarding/schedule" element={<BoardingSchedule />} />
        <Route path="/boarding/gallery" element={<BoardingGallery />} />
     
        {/* Beyond Academics Dropdown Pages */}
        <Route path="/beyond-academics/whole-education" element={<WholeEducation />} />
        <Route path="/beyond-academics/collaborative-learning" element={<CollaborativeLearningModel />} />
        <Route path="/beyond-academics/startup-you" element={<StartupYou />} />
        <Route path="/beyond-academics/leadership" element={<GurukulSchoolOfLeadership />} />
        <Route path="/beyond-academics/training-research" element={<HajipurTrainingAndResearchInstitute />} />
        <Route path="/beyond-academics/community-school" element={<GurukulCommunitySchool />} />
     
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

