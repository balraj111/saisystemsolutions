import React from 'react'
import { motion } from 'framer-motion'

const Services: React.FC = () => {
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
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to meet your business needs 
            and drive digital transformation.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Services