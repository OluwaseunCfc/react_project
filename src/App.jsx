import React, { useEffect } from 'react'
import AOS from 'aos'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import 'aos/dist/aos.css'

import Navbar from './Components/Navbar'
import Home from './pages/Home.jsx'
import Banner from './Components/Banner'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Footer from './Components/Footer'

/**
 * Re-scans the DOM whenever the route changes and scrolls back to the top.
 * Without this, elements mounted by a new route can keep the `data-aos`
 * starting styles (opacity: 0) and never become visible.
 * Must live inside <Router> to be able to use useLocation().
 */
function ScrollAndRefreshOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.refreshHard()
  }, [pathname])

  return null
}

function App() {

  useEffect(() => {
    // Every element uses `fade-up`, which only translates vertically, so it is
    // safe on mobile (no horizontal overflow) and reads consistently on all
    // screen sizes. Depth/stagger comes from `data-aos-delay` instead.
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      // respect the user's OS-level "reduce motion" setting
      disable: () =>
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })

    // keep offsets correct when the viewport changes (rotate / resize)
    const handleResize = () => AOS.refresh()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Router>
      <ScrollAndRefreshOnRouteChange />
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
