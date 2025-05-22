import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      {/* Add more sections as needed */}
      <Footer />
    </div>
  )
}
