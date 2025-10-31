import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
            About <span className="gradient-text">Sai Systems</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a leading technology company dedicated to providing innovative solutions 
            that transform businesses and drive digital success.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About