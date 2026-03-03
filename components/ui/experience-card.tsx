import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export interface ExperienceItemProps {
    company: string
    role: string
    period: string
    type: string
    description: string[]
}

interface ExperienceCardProps {
    item: ExperienceItemProps
    className?: string
}

export default function ExperienceCard({ item, className = "" }: ExperienceCardProps) {
    return (
        <Card className={className}>
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
    )
}
