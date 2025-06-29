'use client'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-200">
      
      <div className="absolute top-3 left-4 sm:left-8 md:left-12 lg:left-20 z-20 text-center pt-4 sm:pt-6 md:pt-8 pb-2 sm:pb-3 md:pb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-thin text-blue-gray-700 mb-1 sm:mb-2">
          Dr. Serena Blake, PsyD.
        </h2>
        <h2 className="text-lg sm:text-xl md:text-2xl text-blue-gray-700 font-thin">
          Clinical Psychologist
        </h2>
      </div>
      
      <Image
        src="/bg4.jpg"
        alt="Dr. Serena Blake, Clinical Psychologist"
        fill
        className="object-cover p-4 sm:p-6 md:p-12 lg:p-16 pt-24 sm:pt-24 md:pt-28 lg:pt-36 rounded-2xl"
        priority/>
      
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full  mx-auto">
          <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl text-white mt-16 sm:mt-20 md:mt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-14 leading-tigh max-w-sm sm:max-w-sm md:max-w-full mx-auto leading-normal">
            Psychological Care for{' '}
          </h1> 

          <h1 className="text-white pb-6 sm:pb-8 md:pb-10 font-bold text-4xl  xl:text-5xl  max-w-sm md:max-w-full mx-auto leading-normal">
            Change, Insight, and Well-Being
          </h1>
          
          <h1 className="text-xl lg:text-2xl  text-white mb-8 sm:mb-12 md:mb-16 font-light px-4  mx-auto leading-relaxed ">
            Offering individual psychotherapy for adults via telehealth in LA and most U.S. states through PSYPACT participation
          </h1>
          
          <div className="mt-8 sm:mt-10 md:mt-12">
            <a href="#contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 inline-block">
              Book a Free Consult
            </a>
          </div>
          
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>Licensed Clinical Psychologist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>8+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>500+ Sessions</span>
            </div>
          </div> */}
        </div>
      </div>
      
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}





