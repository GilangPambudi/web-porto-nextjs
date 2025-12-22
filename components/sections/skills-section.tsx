import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTailwindcss, 
  SiBootstrap, 
  SiNextdotjs, 
  SiReact, 
  SiPhp, 
  SiNodedotjs, 
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
  Monitor
} from "lucide-react"

const technicalSkills = [
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
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  // Database & Tools
  { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
  { name: "Supabase", icon: SiSupabase, color: "text-green-500" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-800" },
  { name: "Git", icon: SiGit, color: "text-red-600" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
  { name: "Laragon", icon: () => (
      <img
        src="https://laragon.org/logo.svg"
        alt="Laragon"
        className="w-10 h-10 md:w-12 md:h-12 mb-3"
        style={{ display: "inline-block" }}
      />
    ), color: "text-blue-600" },
]

const softSkills = [
  { name: "Problem Solving", icon: Brain, color: "text-purple-600" },
  { name: "Teamwork", icon: Users, color: "text-blue-600" },
  { name: "Communication", icon: MessageCircle, color: "text-green-600" },
  { name: "Adaptability", icon: Zap, color: "text-yellow-600" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-100 relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
        </div>
        
        <div className="space-y-8">
          {/* Technical Skills Row */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Technical Skills
            </h3>
            <div className="overflow-x-auto">
              <div className="flex gap-4 pb-2 min-w-max">
                {technicalSkills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group min-w-[100px]"
                  >
                    <skill.icon 
                      className={`w-10 h-10 md:w-12 md:h-12 mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`} 
                    />
                    <span className="text-sm font-medium text-gray-700 text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills Row */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Soft Skills
            </h3>
            <div className="overflow-x-auto">
              <div className="flex gap-4 pb-2 min-w-max justify-center">
                {softSkills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group min-w-[120px]"
                  >
                    <skill.icon 
                      className={`w-10 h-10 md:w-12 md:h-12 mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`} 
                    />
                    <span className="text-sm font-medium text-gray-700 text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
