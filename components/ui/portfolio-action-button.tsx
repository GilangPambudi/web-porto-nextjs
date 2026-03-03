import { Button } from "@/components/ui/button"
import { ExternalLink, Lock } from "lucide-react"

interface PortfolioActionButtonProps {
    link?: string
    isPrivate?: boolean
    className?: string
}

export default function PortfolioActionButton({ link, isPrivate = false, className = "" }: PortfolioActionButtonProps) {
    if (isPrivate) {
        return (
            <Button disabled className={`bg-slate-200 text-slate-500 ${className}`}>
                <Lock className="w-4 h-4 mr-2" />
                Private Project
            </Button>
        )
    }

    return (
        <Button asChild className={`bg-blue-900 hover:bg-blue-700 text-white ${className}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Visit Project
                <ExternalLink className="w-4 h-4 ml-2" />
            </a>
        </Button>
    )
}
