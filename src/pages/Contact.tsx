import React from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
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
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact us today to discuss your project 
            and see how we can help you achieve your goals.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact