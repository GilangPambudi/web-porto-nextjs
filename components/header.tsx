"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react" // Removed ArrowRight import

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Navigation items array for easier management
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
  ]

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth"

    const handleScroll = () => {
      // Set header background when scrolled
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Scroll spy functionality
      const sections = navItems.map((item) => item.id)

      // Find the current active section
      let currentSection = "home"
      let minDistance = Number.POSITIVE_INFINITY

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          // Calculate distance from top of viewport
          const distance = Math.abs(rect.top)

          // If this section is closer to the top than the previous closest, update
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
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [navItems])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? `bg-white shadow-md ${isMenuOpen ? "py-6" : "py-3"} md:py-5`
        : `${isMenuOpen ? "py-8" : "py-5"} md:py-5 bg-transparent`
        }`}
    >
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="#home" className="flex items-center text-2xl font-bold text-grey-800">
            <span className="hidden md:inline">Gilang Pambudi Wibawanto</span>
            <span className="md:hidden">Gilang</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className={`font-medium transition-colors ${activeSection === "landing"
                  ? activeSection === item.id
                    ? "text-white border-b-2 border-white"
                    : "text-gray-200"
                  : activeSection === item.id
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-800 hover:text-secondary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/gilangpambudi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-secondary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a
              href="https://github.com/gilangpambudi"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-800"
            >
              <Github className="h-5 w-5" />
            </a>
            <button className="text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white mx-2 mt-2 rounded-lg shadow-lg">
          <div className="w-full px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className={`font-medium ${activeSection === "home"
                    ? activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600"
                    : activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-800"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
