"use client"

import { experienceData } from "@/lib/data"
import ExperienceCard from "@/components/ui/experience-card"
import { useInView } from "@/hooks/use-in-view"
import { useTimelineScroll } from "@/hooks/use-timeline-scroll"

export default function DynamicExperienceSection() {
    const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
    const { containerRef, progressLineRef, activeIndex } = useTimelineScroll()

    return (
        <section ref={ref} id="experience" className="pt-10 pb-10 md:py-24 bg-white w-full flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4">
                <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">My professional journey in web development.</p>
                </div>

                <div ref={containerRef} className="space-y-8 relative">
                    {/* Base Timeline Line (gray) - hidden on mobile, dynamic from first to last dot */}
                    <div
                        className="timeline-base absolute left-1/2 -ml-0.5 w-0.5 bg-gray-200 hidden md:block"
                        style={{ height: 0, top: 0 }}
                    ></div>

                    {/* Progress Timeline Line (blue) - hidden on mobile, dynamic height */}
                    <div
                        ref={progressLineRef}
                        className="absolute left-1/2 -ml-0.5 w-0.5 bg-blue-500 hidden md:block"
                        style={{ height: 0, top: 0 }}
                    ></div>

                    {experienceData.map((item, index) => (
                        <div
                            key={index}
                            className={`experience-card relative flex items-center md:justify-between transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Dot on Timeline - hidden on mobile */}
                            <div
                                className={`timeline-dot absolute left-1/2 -ml-1.5 w-3 h-3 rounded-full border-2 border-white shadow z-10 hidden md:block transition-all duration-300 ${activeIndex >= index
                                    ? "bg-blue-500 scale-125"
                                    : "bg-gray-300"
                                    }`}
                            ></div>

                            {/* Card Content */}
                            <div className="w-full md:w-[45%]">
                                <ExperienceCard
                                    item={item}
                                    className={`transition-all duration-300 border ${activeIndex === index
                                        ? "bg-blue-50 border-blue-200 shadow-xl scale-[1.02]"
                                        : "bg-white border-gray-100 hover:shadow-lg"
                                        }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
