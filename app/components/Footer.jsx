import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy for anxiety, relationships, and trauma recovery in Los Angeles.
            </p>
            <p className="text-sm text-gray-400">
              License #: PSY12345 (CA)
            </p>
          </div>
          
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">1287 Maplewood Drive, Los Angeles, CA 90026</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:3235550192" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                  (323) 555-0192
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:serena@blakepsychology.com" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                  serena@blakepsychology.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dr. Serena Blake, PsyD. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This website is for informational purposes only and does not constitute medical advice. 
            Please consult with a healthcare provider for any health concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}