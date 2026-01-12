"use client"

import { heroData } from "@/lib/data"
import { ChevronDown } from "lucide-react"
import TextType from "@/components/ui/text-type"

export default function HeroSection() {


  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-start pt-48 md:justify-center md:pt-0 bg-white overflow-hidden">
      {/* Background decoration (optional - can be removed for minimal look) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl opacity-50"></div>

      <div className="w-full max-w-5xl mx-auto px-4 relative z-10 text-center">
        <div className="animate-in fade-in zoom-in duration-1000 ease-out">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter mb-6 leading-tight min-h-[1.2em]">
            <TextType
              text={[heroData.sloganLine1, heroData.sloganLine2]}
              as="span"
              variableSpeed={{ min: 50, max: 100 }}
              deletingSpeed={50}
              pauseDuration={500}
              cursorCharacter="|"
              cursorClassName="text-gray-900 ml-1"
            />
          </h1>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {heroData.subSlogan.map((role, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-600 text-sm md:text-base font-medium hover:bg-white hover:border-gray-300 transition-all cursor-default"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 md:mt-0 md:absolute md:bottom-12 md:left-1/2 md:transform md:-translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}
