import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Shield, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.',
      features: ['React/Vue/Angular', 'Node.js/Python/PHP', 'Responsive Design', 'SEO Optimized'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'React Native/Flutter', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
      features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Server Management', 'Data Migration'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Business Intelligence', 'Data Visualization', 'Machine Learning', 'Reporting Tools'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Risk Assessment'],
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Headphones,
      title: 'IT Support',
      description: '24/7 technical support and maintenance services to keep your systems running smoothly.',
      features: ['24/7 Support', 'System Maintenance', 'Troubleshooting', 'Remote Assistance'],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
            Comprehensive IT Solutions
            <span className="block gradient-text">for Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group card p-8 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive IT solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services