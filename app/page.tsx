import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
// import SkillsSection from "@/components/sections/skills-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      {/* <SkillsSection /> */}
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
