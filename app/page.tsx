import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import SkillsSection from "@/components/sections/skills-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <Footer />
    </div>
  )
}
