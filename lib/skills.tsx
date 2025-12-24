import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiNextdotjs,
    SiReact,
    SiPhp,
    SiMysql,
    SiSupabase,
    SiWordpress,
    SiGit,
    SiGithub,
    SiLaravel
} from "react-icons/si"
import {
    Brain,
    Users,
    MessageCircle,
    Zap,
} from "lucide-react"

export interface Skill {
    name: string
    icon: any
    color: string
}

export const technicalSkills: Skill[] = [
    // Frontend
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "React", icon: SiReact, color: "text-blue-500" },
    // Backend
    { name: "PHP", icon: SiPhp, color: "text-indigo-600" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
    // Database & Tools
    { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-500" },
    { name: "WordPress", icon: SiWordpress, color: "text-blue-800" },
    { name: "Git", icon: SiGit, color: "text-red-600" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
    {
        name: "Laragon", icon: () => (
            <img
                src="https://laragon.org/logo.svg"
                alt="Laragon"
                className="w-10 h-10 md:w-12 md:h-12 mb-3"
                style={{ display: "inline-block" }}
            />
        ), color: "text-blue-600"
    },
]

export const softSkills: Skill[] = [
    { name: "Problem Solving", icon: Brain, color: "text-purple-600" },
    { name: "Teamwork", icon: Users, color: "text-blue-600" },
    { name: "Communication", icon: MessageCircle, color: "text-green-600" },
    { name: "Adaptability", icon: Zap, color: "text-yellow-600" },
]
