"use client"

import { heroData } from "@/lib/data"
import { ChevronDown } from "lucide-react"
import { useTypewriter } from "@/hooks/use-typewriter"

export default function HeroSection() {
  const { text, isBlinking } = useTypewriter(heroData.sloganLine2)

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-start pt-48 md:justify-center md:pt-0 bg-white overflow-hidden">
      {/* Background decoration (optional - can be removed for minimal look) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl opacity-50"></div>

      <div className="w-full max-w-5xl mx-auto px-4 relative z-10 text-center">
        <div className="animate-in fade-in zoom-in duration-1000 ease-out">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter mb-6 leading-tight min-h-[1.2em]">
            {heroData.sloganLine1}
            <br />
            <span>
              {text}
            </span>
            <span className={`inline-block w-1 h-[1em] bg-gray-900 ml-1 align-middle ${isBlinking ? "animate-blink" : ""}`}></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
            {heroData.subSlogan}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 md:mt-0 md:absolute md:bottom-12 md:left-1/2 md:transform md:-translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}
