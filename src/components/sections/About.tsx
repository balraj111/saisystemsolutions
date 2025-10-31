import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Target, Heart } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Target, value: '1000+', label: 'Projects Completed' },
    { icon: Heart, value: '99%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Leading the Future of
              <span className="block gradient-text">Digital Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience, Sai Systems Solutions has been at the forefront 
              of digital transformation, helping businesses leverage cutting-edge technology to 
              achieve their goals and stay competitive in today's rapidly evolving market.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert developers, designers, and consultants work collaboratively 
              to deliver innovative solutions that drive growth, efficiency, and success.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <stat.icon size={32} className="text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Team</h4>
                    <p className="text-primary-100 text-sm">Skilled professionals with years of industry experience</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Latest Technology</h4>
                    <p className="text-primary-100 text-sm">Cutting-edge tools and frameworks for optimal results</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Support</h4>
                    <p className="text-primary-100 text-sm">Round-the-clock assistance whenever you need it</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About