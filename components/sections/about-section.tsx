"use client"

import Link from "next/link"
import Image from "next/image"
import { aboutData, heroData } from "@/lib/data"
import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"
import { PdfPreviewModal } from "@/components/ui/pdf-preview-modal"

export default function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const [selectedCert, setSelectedCert] = useState<{ url: string; title: string } | null>(null)

  return (
    <section ref={ref} id="about" className="pt-10 pb-10 md:py-24 bg-slate-50 relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={heroData.image}
                alt="Profile Picture"
                width={300}
                height={300}
                className="mx-auto rounded-full shadow-lg object-cover md:w-72 md:h-72 w-60 h-60"
                priority
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
