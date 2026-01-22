"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, Briefcase, Layers, Folder, Mail, Github, Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Navigation items with Icons for Mobile Bottom Nav
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    // { id: "tech-stack", label: "Stack", icon: Layers }, // Hidden
    { id: "portfolio", label: "Portfolio", icon: Folder },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = navItems.map((item) => item.id)
      let currentSection = "home"
      let minDistance = Number.POSITIVE_INFINITY

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          const distance = Math.abs(rect.top)
          if (distance < minDistance) {
            minDistance = distance
            currentSection = sectionId
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [navItems])

  return (
    <>
      {/* --- DESKTOP HEADER (Floating) --- */}
      <header
        className={`hidden md:block w-[90%] py-4 fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border ${isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-lg border-gray-200 py-3 top-4 px-8 w-[70%]"
          : "bg-white/50 backdrop-blur-sm border-transparent py-4 px-10"
          }`}
      >
        <div className="flex justify-between items-center space-x-12">
          <Link href="#home" className="text-xl font-bold text-gray-900 tracking-tight">
            Gilang<span className="text-blue-600">.</span>
          </Link>

          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className={`font-medium transition-colors duration-200 ${activeSection === item.id
                  ? "text-blue-600 font-bold"
                  : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>



      {/* --- MOBILE NAVIGATION (Bottom - Floating) --- */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] z-50 bg-white/60 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 shadow-lg">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`flex flex-col items-center justify-center p-2 rounded-full transition-all duration-200 ${activeSection === item.id
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-800"
                }`}
            >
              <item.icon className={`h-5 w-5 mb-0.5 ${activeSection === item.id ? "fill-blue-100" : ""}`} strokeWidth={activeSection === item.id ? 2.5 : 2} />
              <span className="text-[9px] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
