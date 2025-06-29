'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agreeToContact: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
     if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {

      newErrors.phone = 'Please enter a valid phone number'  }

    
      if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address' }

    
    if (!formData.reason.trim()) {

      newErrors.reason = 'Please tell us what brings you here'
    }
    
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required'
    }
    
    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted'   }
    
    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    
   // console.log(formData)

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }}

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      setFormData({
        name: '',
       phone: '',
        email: '',

        reason: '',
        preferredTime: '',
        agreeToContact: false
      })
    }, 1500) }

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gray-200">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">

            <div className="bg-gray-50 rounded-lg p-12">

              <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your message has been received. Dr. Blake will get
                 back to you within 24 hours to schedule your free consultation.
              </p>

              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"  >
                Send Another Message
              </button>

            </div>
          </div>    </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-gray-200">
      <div className="container-custom">
        <div className="text-section mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ready to take the first step? Reach out to schedule your free 15-minute consultation call.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                  </div>

                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:3235550192" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                      (323) 555-0192
                    </a>
                  </div>  </div>

                
                <div className="flex items-start gap-4">
                  <Mail className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:serena@blakepsychology.com" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                      serena@blakepsychology.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-primary-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-600 text-sm">
                      <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM<br />
                      <strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM
                    </p>
                  </div>
                </div> </div>
          </div>
          </div>
          
          
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Schedule Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
               
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

               
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                    What brings you to therapy? *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.reason ? 'border-red-500' : 'border-gray-300'
                    }`}
                    
                    placeholder="Please share a brief description of what you're hoping to work on..."
                  />
                  {errors.reason && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.reason}</span>
                    </div>
                  )}
                </div>

                
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Contact Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                  {errors.preferredTime && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.preferredTime}</span>
                    </div>
                  )}
                </div>


                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToContact"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agreeToContact" className="text-sm text-gray-600">
                    I agree to be contacted by phone or email regarding my consultation request. *
                  </label>
                </div>
                {errors.agreeToContact && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle size={16} />
                    <span>{errors.agreeToContact}</span>
                  </div>
                )}

               
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
          </div>
      </div>
        </div>
      </div>
    </section>
  )
}
