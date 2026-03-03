import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import DynamicExperienceSection from "@/components/sections/dynamic-experience-section"
import StackedPortfolioSection from "@/components/sections/stacked-portfolio-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <DynamicExperienceSection />

      <StackedPortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
