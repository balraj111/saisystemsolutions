import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ScrollToTop />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.main>
      
      <Footer />
    </div>
  )
}

export default App