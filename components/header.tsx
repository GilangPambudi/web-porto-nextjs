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
      {/* --- DESKTOP HEADER (Top) --- */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="w-full md:w-4/5 mx-auto px-4 flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold text-gray-900 tracking-tight">
            Gilang<span className="text-blue-600">.</span>
          </Link>

          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className={`text font-medium transition-colors duration-200 ${activeSection === item.id
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



      {/* --- MOBILE NAVIGATION (Bottom - Fixed) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-gray-200 pb-safe pt-2 px-2 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 w-full ${activeSection === item.id
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-800"
                }`}
            >
              <item.icon className={`h-6 w-6 mb-1 ${activeSection === item.id ? "" : ""}`} strokeWidth={activeSection === item.id ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
