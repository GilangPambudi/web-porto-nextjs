"use client"

import { contactData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Globe, MapPin, Send } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function ContactSection() {
    const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

    return (
        <section ref={ref} id="contact" className="pt-10 pb-10 md:py-24 bg-white w-full flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto px-4">
                <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Feel free to reach out if you're interested in working together or have any questions.
                    </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                    {/* Contact Info Card */}
                    <Card className="hidden md:block border-0 shadow-lg bg-white overflow-hidden">
                        <div className="h-2 bg-blue-600 w-full"></div>
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Contact Information</h3>

                            <div className="flex flex-row md:flex-col justify-center md:justify-start gap-8 md:gap-0 md:space-y-6">
                                {/* Email */}
                                <div className="flex items-center md:items-start md:space-x-4">
                                    <a
                                        href={`mailto:${contactData.email}`}
                                        className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0 hover:bg-blue-200 transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                    <div className="hidden md:block">
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <a href={`mailto:${contactData.email}`} className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                                            {contactData.email}
                                        </a>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className="flex items-center md:items-start md:space-x-4">
                                    <a
                                        href={contactData.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-50 p-3 rounded-full text-blue-700 shrink-0 hover:bg-blue-100 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <div className="hidden md:block">
                                        <p className="text-sm font-medium text-gray-500">LinkedIn</p>
                                        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:text-blue-700 transition-colors">
                                            linkedin.com/in/gilang-pambudi
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center md:items-start md:space-x-4">
                                    <div className="bg-gray-100 p-3 rounded-full text-gray-700 shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-sm font-medium text-gray-500">Location</p>
                                        <p className="text-gray-900 font-semibold">
                                            {contactData.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Simple Form (mailto fallback) */}
                    <Card className="border-0 shadow-lg bg-blue-900 text-white overflow-hidden flex flex-col justify-center">
                        <CardContent className="p-8 text-center space-y-6">
                            <div className="mx-auto bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                                <Send className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">Ready to Start?</h3>
                            <p className="text-white/80 leading-relaxed">
                                I'm currently available for freelance projects and job opportunities. Let's build something amazing together.
                            </p>
                            <div className="pt-4">
                                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8">
                                    <a href={`mailto:${contactData.email}?subject=Project Inquiry`}>
                                        Send Me an Email
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    )
}
