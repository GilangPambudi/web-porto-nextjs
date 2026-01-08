"use client"

import { experienceData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function ExperienceSection() {
    const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

    return (
        <section ref={ref} id="experience" className="py-4 md:py-24 bg-slate-50 w-full flex items-center justify-center">
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
                                <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-100">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <CardTitle className="text-lg font-bold text-gray-900">{item.company}</CardTitle>
                                                <span className="text-blue-600 font-medium text-sm block mt-1">{item.role}</span>
                                            </div>
                                            <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-600 shrink-0 ml-2">
                                                {item.type}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {item.period}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-outside pl-4 space-y-1 text-base leading-relaxed text-gray-600">
                                            {item.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
