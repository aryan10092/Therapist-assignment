'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default
  
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission. I provide detailed receipts that you can submit to your insurance company for potential reimbursement. Many clients find that their out-of-network benefits cover a portion of their sessions. I'm happy to help you understand your benefits and provide all necessary documentation."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom using a secure, HIPAA-compliant platform. Virtual sessions are available Monday, Wednesday & Friday from 1:00 PM – 5:00 PM. Many clients find online therapy just as effective as in-person sessions, and it offers the convenience of attending from the comfort of your own space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations or rescheduling. Cancellations made with less than 24 hours notice will be charged the full session fee. This policy helps ensure that I can offer appointment times to other clients who may need them and maintains the structure necessary for effective therapeutic work."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. This timeframe allows for meaningful therapeutic work while maintaining healthy boundaries. During our first session, we'll discuss your goals and develop a treatment plan that works best for your needs."
    },
    {
      question: "What should I expect in the first session?",
      answer: "The first session is an opportunity for us to get to know each other and for you to share what brings you to therapy. We'll discuss your goals, concerns, and what you hope to achieve. I'll explain my therapeutic approach and we'll work together to create a treatment plan that feels right for you. Please feel free to ask any questions you have about the process."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone looking to improve their mental health, work through challenges, or simply gain better self-understanding. If you're experiencing anxiety, relationship difficulties, trauma, or just feeling stuck, therapy can provide valuable tools and support. I offer a free 15-minute consultation call to help determine if we're a good fit."
    }
  ]
  
  
  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.has(index) ? new Set() : new Set([index])
    )
  }
  

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
       
        <div className="text-section mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          {/* <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full">

          </div>  */}

          <p className="text-lg text-gray-600 leading-relaxed">
            Common questions about therapy sessions, policies, and what to expect when working together.
          </p>
        </div>
        
       
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-200 transition-colors duration-300 focus:outline-none "
                  aria-expanded={openItems.has(index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="text-primary-600" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm here to help you feel comfortable and informed about the therapy process. Feel free to reach out with any additional questions.
            </p>
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}