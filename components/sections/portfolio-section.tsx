"use client"

import Image from "next/image"
import { portfolioItems } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function PortfolioSection() {
    const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

    return (
        <section
            ref={ref}
            id="portfolio"
            className="relative pt-4 md:pt-24 overflow-hidden min-h-screen w-full flex items-center justify-center bg-slate-50 pb-8 md:pb-8"
        >
            <div className="w-full md:w-4/5 mx-auto px-4">
                <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>Portfolio</h2>
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    {portfolioItems.map((item, idx) => (
                        <Card key={idx} className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full aspect-[1901/868] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                                {item.isPrivate && (
                                    <Badge variant="secondary" className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm">
                                        <Lock className="w-3 h-3 mr-1" />
                                        Private
                                    </Badge>
                                )}
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-1" title={item.title}>
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-gray-600 line-clamp-3">
                                    {item.description}
                                </p>
                            </CardContent>
                            <CardFooter className="pt-0 mt-auto">
                                {item.isPrivate ? (
                                    <Button disabled className="w-full bg-slate-200 text-slate-500">
                                        <Lock className="w-4 h-4 mr-2" />
                                        Private Project
                                    </Button>
                                ) : (
                                    <Button asChild className="w-full bg-blue-900 hover:bg-blue-700">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            Visit Project
                                            <ExternalLink className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}