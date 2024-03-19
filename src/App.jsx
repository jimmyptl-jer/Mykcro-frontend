import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Dashboard from './pages/DashboardPage'
import Services from './pages/ServicesPage'

// Import the pages for each service
import Accounting from './pages/Services/Accounting'
import Administration from './pages/Services/Administration'
import Banking from './pages/Services/Banking'
import Government from './pages/Services/Government'
import HumanResources from './pages/Services/HumanResource'
import Insurance from './pages/Services/Insurance'
import Legal from './pages/Services/Legal'
import Marketing from './pages/Services/Marketing'
import MentalHealth from './pages/Services/MentalHealth'
import Operations from './pages/Services/Operations'
import PublicRelations from './pages/Services/PublicRelations'
import SocialMedia from './pages/Services/SocialMedia'
import BusinessPage from './pages/BusinessPage'
import AddBusinessPage from './pages/AddBusinessPage'
import ServiceManagement from './pages/ServiceManagement'
import ServicesPage from './pages/ServicesPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/business' element={<BusinessPage />} />
        <Route path='/add-business' element={<AddBusinessPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:serviceId' element={<ServicesPage />} />
        <Route path='/manage-services' element={<ServiceManagement />} />

        {/* Routes for each service */}
        <Route path='/accounting' element={<Accounting />} />
        <Route path='/administration' element={<Administration />} />
        <Route path='/banking' element={<Banking />} />
        <Route path='/government' element={<Government />} />
        <Route path='/human-resources' element={<HumanResources />} />
        <Route path='/insurance' element={<Insurance />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/mental-health' element={<MentalHealth />} />
        <Route path='/operations' element={<Operations />} />
        <Route path='/public-relations' element={<PublicRelations />} />
        <Route path='/social-media' element={<SocialMedia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
