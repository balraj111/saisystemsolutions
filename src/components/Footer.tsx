import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight 
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'IT Consulting',
    'Digital Marketing',
    'Data Analytics'
  ]

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sai Systems</h3>
                <p className="text-sm text-gray-300">Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative IT services and digital solutions. 
              We help businesses transform digitally and achieve their goals through 
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight 
                      size={14} 
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight 
                      size={14} 
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Business Street<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:info@saisystems.com" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  info@saisystems.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              © {currentYear} Sai Systems Solutions. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/sitemap" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer