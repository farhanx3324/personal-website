"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skillsData = [
  { name: "Python", proficiency: "Flask, Pandas, PyTorch, NumPy"},
  { name: "C++", proficiency: "" },
  { name: "Java", proficiency: "Spring Boot" },
  { name: "JavaScript", proficiency: "React.js, Express.js, Next.js" },
  { name: "SQL", proficiency: "MongoDB"},
  { name: "HTML/CSS", proficiency: "Tailwind" },
]

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (skillsRef.current) {
      gsap.utils.toArray(".skill-bar").forEach((bar) => {
        const element = bar as HTMLElement // Explicitly cast `bar` to HTMLElement
        gsap.from(element, {
          width: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }
  }, [])

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div
          ref={skillsRef}
          className="flex flex-col gap-4 max-w-4xl mx-auto"
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-item w-full flex justify-between items-center border-2 px-6 py-4 rounded-md bg-gradient-to-r from-indigo-500 to-purple-400 border-purple-900"
            >
              <span className="text-lg font-semibold text-slate-200">
                {skill.name}
              </span>
              <span className="text-lg font-semibold text-slate-200">
                {skill.proficiency}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
