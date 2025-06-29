"use client"

import Image from 'next/image'
import { ArrowRight, Brain, DollarSign, Heart, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Services() {
  const areasOfFocus = [
    {
      title: "Therapy for Healthcare Providers and Students",
      description: "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life."
    },

    {
      title: "Therapy for Trauma and Grief",
      description: "Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning."
    },
    {
      title: "Therapy for Second Generation Individuals In Immigrant Families",
      description: "Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity."
    }
  ]

  return (
   <section id="services" className="py-24 bg-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">

        <h2 className="text-4xl md:text-5xl font-bold text-blue-gray-800 mb-6 leading-tight">
          Therapy Services & Specialties
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8 rounded-full">

        </div>

        <p className="text-xl text-blue-gray-700 max-w-3xl mx-auto leading-relaxed">
          Personalized, evidence-based therapy approaches tailored to your unique needs and goals  </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        <Card className="group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 
        border border-white/30 hover:scale-[1.02] overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            
            <img 
              src="/stress.jpg" 
              alt="Anxiety and stress management therapy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <CardHeader className="text-center relative">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Brain className="text-primary-600" size={28} />
            </div>
            <CardTitle className="text-2xl font-bold text-blue-gray-800">Anxiety & Stress Management</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-blue-gray-700 leading-relaxed text-center text-lg">
              Learn practical coping strategies and mindfulness techniques to manage anxiety, reduce stress, and regain control over your daily life. Through cognitive-behavioral therapy and evidence-based approaches, we'll work together to identify triggers and develop personalized tools for lasting relief.
            </CardDescription>
            <div className="mt-8 text-center">
              <p className="text-primary-600 font-bold text-lg">$200 per session</p>
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:scale-[1.02] overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img 
              src="/relationship.jpg" 
              alt="Relationship and couples counseling"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <CardHeader className="text-center relative">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Heart className="text-primary-600" size={28} />
            </div>
            <CardTitle className="text-2xl font-bold text-blue-gray-800">Relationship Counseling</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-blue-gray-700 leading-relaxed text-center text-lg">
              Strengthen your relationships through improved communication, conflict resolution, and emotional intimacy. Whether you're working on romantic partnerships, family dynamics, or friendships, we'll explore patterns and develop healthier ways of connecting with others.
            </CardDescription>
            <div className="mt-8 text-center">
              <p className="text-primary-600 font-bold text-lg">$240 per couples session</p>
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:scale-[1.02] overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img 
              src="/trauma2.jpg" 
              alt="Trauma recovery and healing therapy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <CardHeader className="text-center relative">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Shield className="text-primary-600" size={28} />
            </div>
            <CardTitle className="text-2xl font-bold text-blue-gray-800">Trauma Recovery</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-blue-gray-700 leading-relaxed text-center text-lg">
              Heal from past traumatic experiences in a safe, supportive environment using trauma-informed care approaches. We'll work at your pace to process difficult experiences, reduce symptoms, and help you reclaim your sense of safety and empowerment.
            </CardDescription>
            <div className="mt-8 text-center">
              <p className="text-primary-600 font-bold text-lg">$200 per session</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold transform hover:scale-105"
        >
          Schedule Your First Session
        </Button>
      </div>
    </div>
  </section>
  )

}
