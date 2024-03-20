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
        <Route path='/services' element={<Services />} />
        <Route path='/services/:serviceId' element={<ServicesPage />} />
        <Route path='/manage-services' element={<ServiceManagement />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
