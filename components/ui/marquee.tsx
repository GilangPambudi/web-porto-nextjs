import { cn } from "@/lib/utils"

interface MarqueeProps {
    children: React.ReactNode
    className?: string
    reverse?: boolean
    pauseOnHover?: boolean
    duration?: string
    gap?: string
}

export default function Marquee({
    children,
    className,
    reverse,
    pauseOnHover = false,
    duration = "40s",
    gap = "1rem",
    ...props
}: MarqueeProps) {
    return (
        <div
            className={cn("flex overflow-hidden", className)}
            {...props}
        >
            <div
                className={cn(
                    "flex shrink-0 animate-marquee items-center gap-4 pr-4",
                    pauseOnHover && "group-hover:[animation-play-state:paused]",
                    reverse && "[animation-direction:reverse]"
                )}
                style={
                    {
                        "--duration": duration,
                        "--gap": gap,
                    } as React.CSSProperties
                }
            >
                {children}
            </div>
            <div
                aria-hidden="true"
                className={cn(
                    "flex shrink-0 animate-marquee items-center gap-4 pr-4",
                    pauseOnHover && "group-hover:[animation-play-state:paused]",
                    reverse && "[animation-direction:reverse]"
                )}
                style={
                    {
                        "--duration": duration,
                        "--gap": gap,
                    } as React.CSSProperties
                }
            >
                {children}
            </div>
        </div>
    )
}
