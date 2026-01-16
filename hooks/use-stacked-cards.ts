"use client"

import { useRef, RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface UseStackedCardsOptions {
    cardSelector?: string
    scaleAmount?: number
}

interface UseStackedCardsReturn {
    containerRef: RefObject<HTMLDivElement | null>
}

export function useStackedCards(options: UseStackedCardsOptions = {}): UseStackedCardsReturn {
    const {
        cardSelector = '.portfolio-card',
        scaleAmount = 0.1
    } = options

    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current) return

        const cards = gsap.utils.toArray<HTMLElement>(cardSelector)

        cards.forEach((card, index) => {
            // Skip the last card - it doesn't need to scale down
            if (index === cards.length - 1) return

            ScrollTrigger.create({
                trigger: cards[index + 1], // Trigger when the NEXT card enters
                start: "top bottom",
                end: "top 100px",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress
                    const scale = 1 - (progress * scaleAmount)
                    gsap.set(card, { scale })
                }
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, { scope: containerRef })

    return { containerRef }
}
