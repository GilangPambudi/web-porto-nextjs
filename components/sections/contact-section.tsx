"use client"

import { contactData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { toast } from "sonner"

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

                <div className={`grid overflow-hidden rounded-sm border border-gray-300 bg-white transition-all duration-1000 delay-300 md:grid-cols-2 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <div className="divide-y divide-gray-200">
                        <div className="flex items-center gap-4 p-5 md:p-6">
                            <Mail className="h-5 w-5 shrink-0 text-blue-600" />
                            <div className="min-w-0">
                                <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500">Email</p>
                                <button
                                    onClick={async () => {
                                        try {
                                            await navigator.clipboard.writeText(contactData.email)
                                            toast.success("Email copied to clipboard")
                                        } catch {
                                            toast.error("Failed to copy email")
                                        }
                                    }}
                                    className="mt-1 break-all text-left text-sm font-semibold text-gray-900 transition-colors hover:text-blue-600 md:text-base"
                                >
                                    {contactData.email}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 md:p-6">
                            <Linkedin className="h-5 w-5 shrink-0 text-blue-700" />
                            <div className="min-w-0">
                                <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500">LinkedIn</p>
                                <a
                                    href={contactData.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-700 md:text-base"
                                >
                                    Connect on LinkedIn
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-5 md:p-6">
                            <MapPin className="h-5 w-5 shrink-0 text-gray-700" />
                            <div className="min-w-0">
                                <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500">Location</p>
                                <p className="mt-1 text-sm font-semibold text-gray-900 md:text-base">{contactData.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center border-t border-blue-950 bg-blue-900 p-6 text-white md:border-l md:border-t-0 md:p-8">
                        <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/60">Available for work</p>
                        <h3 className="mt-3 text-2xl font-bold">Ready to Start?</h3>
                        <p className="mt-4 leading-relaxed text-white/80">
                            I'm currently available for freelance projects and job opportunities. Let's build something amazing together.
                        </p>
                        <Button asChild size="lg" className="mt-6 w-full rounded-sm bg-white px-8 font-bold text-blue-900 hover:bg-blue-50 md:w-fit">
                            <a href={`mailto:${contactData.email}?subject=Project Inquiry`}>
                                Send Me an Email
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
