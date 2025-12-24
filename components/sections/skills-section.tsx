"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { technicalSkills, softSkills, Skill } from "@/lib/skills"
import { useInView } from "@/hooks/use-in-view"

const SkillItem = ({ skill }: { skill: Skill }) => (
  <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-[100px] group/item cursor-default">
    <skill.icon
      className={`w-10 h-10 md:w-12 md:h-12 mb-3 ${skill.color} group-hover/item:scale-110 transition-transform duration-200`}
    />
    <span className="text-sm font-medium text-gray-700 text-center whitespace-nowrap">
      {skill.name}
    </span>
  </div>
)

export default function SkillsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="skills" className="py-16 md:py-24 bg-slate-100 relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-150 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Technical Skills Row */}
          <Card className="relative overflow-hidden group border-0 shadow-lg delay-150">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex overflow-hidden">
                <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4 [--gap:1rem] [--duration:40s] group-hover:[animation-play-state:paused]">
                  {technicalSkills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                  ))}
                </div>
                <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center gap-4 pr-4 [--gap:1rem] [--duration:40s] group-hover:[animation-play-state:paused]">
                  {technicalSkills.map((skill, index) => (
                    <SkillItem key={`dup-${index}`} skill={skill} />
                  ))}
                </div>
              </div>
            </CardContent>
            {/* Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-background"></div>
          </Card>

          {/* Soft Skills Row */}
          <Card className="relative overflow-hidden group border-0 shadow-lg delay-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Desktop View: Static Grid */}
              <div className="hidden md:flex flex-wrap justify-center gap-8">
                {softSkills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>

              {/* Mobile View: Marquee */}
              <div className="md:hidden flex overflow-hidden">
                <div className="flex shrink-0 animate-marquee items-center justify-around gap-4 pr-4 [--gap:1rem] [--duration:15s] group-hover:[animation-play-state:paused] min-w-full">
                  {softSkills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                  ))}
                </div>
                <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center justify-around gap-4 pr-4 [--gap:1rem] [--duration:15s] group-hover:[animation-play-state:paused] min-w-full">
                  {softSkills.map((skill, index) => (
                    <SkillItem key={`dup-${index}`} skill={skill} />
                  ))}
                </div>
              </div>
            </CardContent>
            {/* Gradient Fade (Only visible on mobile when scrolling happens) */}
            <div className="md:hidden pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-background"></div>
            <div className="md:hidden pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-background"></div>
          </Card>
        </div>
      </div>
    </section>
  )
}
