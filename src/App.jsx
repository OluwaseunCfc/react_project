import React, { useEffect } from 'react'
import AOS from 'aos'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'aos/dist/aos.css'

import Navbar from './Components/Navbar'
import Home from './pages/Home.jsx'
import Banner from './Components/Banner'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Footer from './Components/Footer'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route 
          path="/" element={
            <>
              <Banner/>
              <Home/>
            </>
          } 
          />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
          <Footer/>
    </Router>
  )
}

export default App