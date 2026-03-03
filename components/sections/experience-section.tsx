"use client"

import { experienceData } from "@/lib/data"
import ExperienceCard from "@/components/ui/experience-card"
import { useInView } from "@/hooks/use-in-view"

export default function ExperienceSection() {
    const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

    return (
        <section ref={ref} id="experience" className="pt-10 pb-10 md:py-24 bg-white w-full flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4">
                <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">My professional journey in web development.</p>
                </div>

                <div className="space-y-8 relative">
                    {/* Vertical Line for Timeline (Optional, simplified for now) */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100 md:left-1/2 md:-ml-0.5 hidden md:block"></div>

                    {experienceData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center md:justify-between transition-all duration-700 delay-${index * 200} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute left-4 md:left-1/2 -ml-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow md:ml-[calc(-0.375rem)] z-10 hidden md:block"></div>

                            {/* Card Content */}
                            <div className="w-full md:w-[45%]">
                                <ExperienceCard
                                    item={item}
                                    className="hover:shadow-lg transition-shadow duration-300 border-gray-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
