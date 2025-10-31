import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c0?w=150&h=150&fit=crop&crop=face',
      content: 'Sai Systems transformed our digital presence completely. Their expertise and dedication exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CTO, Innovation Labs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Outstanding service and support. They delivered our project on time and within budget with exceptional quality.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, Digital Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Professional, reliable, and innovative. Sai Systems is our go-to partner for all technology solutions.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
            What Our Clients
            <span className="block gradient-text">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials