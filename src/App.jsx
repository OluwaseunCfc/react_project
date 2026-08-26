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
    AOS.init({
      duration: 800,
      once: true,
      offset: 40,
      // scroll animations can leave content hidden / cause sideways shift
      // on small touch screens, so they are skipped there
      disable: () => window.innerWidth < 576,
    })

    // keep offsets correct when the viewport changes (rotate / resize)
    const handleResize = () => AOS.refresh()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/" element={
              <>
                <Banner />
                <Home />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
