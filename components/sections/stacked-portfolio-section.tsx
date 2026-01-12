"use client"

import Image from "next/image"
import { portfolioItems } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Lock } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function StackedPortfolioSection() {
    const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

    return (
        <section
            ref={ref}
            id="portfolio"
            className="bg-slate-50 pt-10 pb-24 relative z-20 min-h-screen"
        >
            {/* Header */}
            <div className="text-center mb-6 px-4">
                <h3 className={`text-4xl md:text-5xl font-bold text-gray-900 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                    Portfolio
                </h3>
            </div>

            {/* Stack Area */}
            <div className="w-full px-4 md:px-0">
                {portfolioItems.map((item, index) => (
                    <div
                        key={index}
                        className="sticky flex justify-center items-start pt-6"
                        style={{
                            top: `calc(70px + ${index * 20}px)`,
                            minHeight: '400px' // Ensure enough scroll space
                        }}
                    >
                        {/* Card */}
                        <div
                            className="relative w-full md:w-[90%] max-w-[1100px] bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-sm transition-transform duration-500 origin-top flex flex-col md:flex-row"
                        >
                            {/* Image Section - Enforcing 1901/868 Aspect Ratio */}
                            <div className="relative w-full md:w-[65%] aspect-[1901/868] shrink-0 bg-slate-100 group overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 "
                                />
                                {item.isPrivate && (
                                    <Badge variant="secondary" className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm z-10">
                                        <Lock className="w-3 h-3 mr-1" />
                                        Private
                                    </Badge>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-white">
                                <div className="space-y-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                                        {item.title}
                                    </h2>

                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-4">
                                        {item.description}
                                    </p>

                                    <div className="pt-2">
                                        {item.isPrivate ? (
                                            <Button disabled className="w-full md:w-auto bg-slate-100 text-slate-400 hover:bg-slate-100">
                                                <Lock className="w-4 h-4 mr-2" />
                                                Private Project
                                            </Button>
                                        ) : (
                                            <Button asChild className="w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    Visit Project <ExternalLink className="w-4 h-4 ml-2" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}