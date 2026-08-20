"use client"


import Image from "next/image"
import { aboutData, heroData } from "@/lib/data"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useRef, useState } from "react"
import { PdfPreviewModal } from "@/components/ui/pdf-preview-modal"
import ProfileCard from "@/components/ui/profile-card"

const VISIT_DELAY = 10_000
const VISIT_COOLDOWN = 60_000
const LAST_VISIT_KEY = "portfolio_last_visit"

export default function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const [selectedCert, setSelectedCert] = useState<{ url: string; title: string } | null>(null)
  const visitSent = useRef(false)

  useEffect(() => {
    let remaining = VISIT_DELAY
    let startedAt = 0
    let timer: ReturnType<typeof setTimeout> | undefined

    const sendVisit = async () => {
      if (visitSent.current) return

      let lastVisit = 0
      try {
        lastVisit = Number(localStorage.getItem(LAST_VISIT_KEY))
      } catch {}

      if (Date.now() - lastVisit < VISIT_COOLDOWN) {
        visitSent.current = true
        return
      }

      visitSent.current = true
      let location = {}

      try {
        const response = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(5000),
        })
        if (!response.ok) throw new Error(`ipapi returned ${response.status}`)

        const data = await response.json()
        location = {
          ip: data.ip,
          city: data.city,
          region: data.region,
          country_name: data.country_name,
          org: data.org,
        }
      } catch (error) {
        console.warn("Visitor location lookup failed:", error)
      }

      try {
        const response = await fetch("/api/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(location),
        })
        if (!response.ok) throw new Error(`Visit endpoint returned ${response.status}`)

        try {
          localStorage.setItem(LAST_VISIT_KEY, String(Date.now()))
        } catch {}
      } catch (error) {
        console.warn("Visitor notification failed:", error)
      }
    }

    const stopTimer = () => {
      if (!timer) return

      clearTimeout(timer)
      remaining = Math.max(0, remaining - (performance.now() - startedAt))
      timer = undefined
    }

    const startTimer = () => {
      if (timer || visitSent.current || document.hidden) return

      startedAt = performance.now()
      timer = setTimeout(() => void sendVisit(), remaining)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer()
      } else if (isInView) {
        void sendVisit()
      } else {
        startTimer()
      }
    }

    if (isInView && !document.hidden) {
      void sendVisit()
    } else {
      startTimer()
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      if (timer) clearTimeout(timer)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [isInView])

  return (
    <section ref={ref} id="about" className="pt-10 pb-10 md:py-24 bg-slate-50 relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <ProfileCard
                enableMobileTilt
                avatarUrl={heroData.image}
                name={heroData.nickName}
                title={heroData.title}
                contactText="Contact Me"
                onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              />
            </div>
          </div>
          <div className={`w-full md:w-1/2 md:pl-12 transition-all duration-1000 ease-out delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {aboutData.bio}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-800">{aboutData.education.institution}</h4>
                    <p className="text-blue-600 font-medium">{aboutData.education.degree}</p>
                    <p className="text-base text-gray-500 mt-1">{aboutData.education.period} | GPA: {aboutData.education.gpa}</p>
                  </div>
                  <div className="ml-4 shrink-0">
                    <Image
                      src="/logo-poltek.webp"
                      alt="Polinema Logo"
                      width={60}
                      height={60}
                      className="object-contain w-16 h-16"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certifications</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.certifications.map((cert, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCert({ url: cert.link, title: cert.name })}
                      className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-colors cursor-pointer"
                    >
                      {cert.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PdfPreviewModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        pdfUrl={selectedCert?.url || ""}
        title={selectedCert?.title || ""}
      />
    </section>
  )
}
