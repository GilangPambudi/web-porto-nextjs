"use client"

import { useRef, useState, RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface UseTimelineScrollOptions {
    offset?: number
    cardSelector?: string
    dotSelector?: string
    baseLineSelector?: string
}

interface UseTimelineScrollReturn {
    containerRef: RefObject<HTMLDivElement | null>
    progressLineRef: RefObject<HTMLDivElement | null>
    activeIndex: number
}

export function useTimelineScroll(options: UseTimelineScrollOptions = {}): UseTimelineScrollReturn {
    const {
        offset = -24,
        cardSelector = '.experience-card',
        dotSelector = '.timeline-dot',
        baseLineSelector = '.timeline-base'
    } = options

    const containerRef = useRef<HTMLDivElement>(null)
    const progressLineRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(-1)

    useGSAP(() => {
        if (!containerRef.current || !progressLineRef.current) return

        const cards = gsap.utils.toArray<HTMLElement>(cardSelector)
        const dots = gsap.utils.toArray<HTMLElement>(dotSelector)
        const baseLine = containerRef.current.querySelector(baseLineSelector) as HTMLElement

        // Function to update base line position
        const updateBaseLine = () => {
            if (baseLine && dots.length > 0 && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect()
                const firstDot = dots[0] as HTMLElement
                const lastDot = dots[dots.length - 1] as HTMLElement

                const firstDotRect = firstDot.getBoundingClientRect()
                const lastDotRect = lastDot.getBoundingClientRect()

                const firstDotCenter = firstDotRect.top + firstDotRect.height / 2 - containerRect.top
                const lastDotCenter = lastDotRect.top + lastDotRect.height / 2 - containerRect.top
                const totalHeight = lastDotCenter - firstDotCenter

                gsap.set(baseLine, {
                    height: totalHeight,
                    top: firstDotCenter + offset
                })
            }
        }

        // Initial update and on resize
        updateBaseLine()
        window.addEventListener('resize', updateBaseLine)
        setTimeout(updateBaseLine, 100)

        // Active card detection
        cards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveIndex(index),
                onEnterBack: () => setActiveIndex(index),
                onLeave: () => {
                    if (index === cards.length - 1) setActiveIndex(index)
                },
                onLeaveBack: () => {
                    if (index === 0) setActiveIndex(-1)
                }
            })
        })

        // Progress line animation
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.3,
            onEnter: () => setActiveIndex(0),
            onLeaveBack: () => setActiveIndex(-1),
            onUpdate: (self) => {
                if (!progressLineRef.current || !containerRef.current) return

                const containerRect = containerRef.current.getBoundingClientRect()
                const firstDot = dots[0] as HTMLElement
                const lastDot = dots[dots.length - 1] as HTMLElement

                if (firstDot && lastDot) {
                    const firstDotRect = firstDot.getBoundingClientRect()
                    const lastDotRect = lastDot.getBoundingClientRect()

                    const firstDotCenter = firstDotRect.top + firstDotRect.height / 2 - containerRect.top
                    const lastDotCenter = lastDotRect.top + lastDotRect.height / 2 - containerRect.top
                    const totalHeight = lastDotCenter - firstDotCenter
                    const currentHeight = totalHeight * self.progress

                    gsap.set(progressLineRef.current, {
                        height: currentHeight,
                        top: firstDotCenter + offset
                    })
                }
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            window.removeEventListener('resize', updateBaseLine)
        }
    }, { scope: containerRef })

    return { containerRef, progressLineRef, activeIndex }
}
