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
    SiLaravel,
    SiNodedotjs
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
    color?: string
}

export const technicalSkills: Skill[] = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    {
        name: "Laragon", icon: () => (
            <img
                src="https://laragon.org/logo.svg"
                alt="Laragon"
                className="w-10 h-10 md:w-12 md:h-12 mb-3"
                style={{ display: "inline-block" }}
            />
        ),
    },
]

export const softSkills: Skill[] = [
    { name: "Problem Solving", icon: Brain, color: "#E34F26" },
    { name: "Teamwork", icon: Users, color: "#1572B6" },
    { name: "Communication", icon: MessageCircle, color: "#3FCF8E" },
    { name: "Adaptability", icon: Zap, color: "#06B6D4" },
]
