import Image from 'next/image'
import { MapPin, Clock, Award, Heart, User, Shield, Star } from 'lucide-react'
 

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <div className="space-y-4">

              <h2 className="text-4xl md:text-5xl font-bold text-blue-gray-800 mb-4 leading-tight">
                Meet Dr. Serena Blake
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-600 mb-8 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-blue-gray-700 leading-relaxed">

                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
                 with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like 
                 cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, 
                 strengthen relationships, and heal from trauma.
         </p>
              
              <p className="text-xl text-blue-gray-700 leading-relaxed">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 
              shadow-sm hover:shadow-md transition-all duration-300">

                <div className="p-2 bg-primary-100 rounded-lg">
                  <Award className="text-primary-600" size={24} />
                </div>
                <div>

                  <p className="font-semibold text-blue-gray-800 text-lg">8 Years Experience</p>
                  <p className="text-blue-gray-600">Licensed Clinical Psychologist</p>
                </div>

              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 
              shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-primary-100 rounded-lg">

                  <User className="text-primary-600" size={24} />
                </div>

                <div>
                  <p className="font-semibold text-blue-gray-800 text-lg">500+ Sessions</p>
                  <p className="text-blue-gray-600">Helping clients heal & grow</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>

                  <p className="font-semibold text-blue-gray-800 text-lg">Los Angeles, CA</p>
                  <p className="text-blue-gray-600">1287 Maplewood Drive</p>
                </div>

              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 
              shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Shield className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-blue-gray-800 text-lg">Licensed PsyD</p>
                  <p className="text-blue-gray-600">Evidence-based approaches</p>
                </div>
            </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl mt-12 shadow-lg border border-white/30">
              <h3 className="font-semibold text-blue-gray-800 mb-4 flex items-center text-xl">
                <div className="p-2 bg-primary-100 rounded-lg mr-3">
                  <Clock className="text-primary-600" size={20} />
                </div>
                Office Hours
              </h3>
              <div className="space-y-3 text-blue-gray-700 text-lg">
                <p><strong className="text-blue-gray-800">In-person:</strong> Tuesday & Thursday, 10 AM–6 PM</p>
                <p><strong className="text-blue-gray-800">Virtual via Zoom:</strong> Monday, Wednesday & Friday, 1 PM–5 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur 
              opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/doctor.jpg" 
                alt="Dr. Serena Blake, Clinical Psychologist"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                </div>
                <p className="text-blue-gray-700 font-medium">
                  Trusted by 500+ clients</p>
              </div>

            </div>
         </div>
        </div>
      </div>
    </section>
  )
}
