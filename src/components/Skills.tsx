"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skillsData = [
  { name: "Java", proficiency: "Spring Boot" },
  { name: "Python", proficiency: "Flask, Django" },
  { name: "JavaScript", proficiency: "React.js, Express.js" },
  { name: "React", proficiency: 75 },
  { name: "Machine Learning", proficiency: 70 },
  { name: "Data Science", proficiency: 65 },
  { name: "C++", proficiency: 80 },
  { name: "SQL", proficiency: 75 },
  { name: "HTML/CSS", proficiency: 85 },
  { name: "Node.js", proficiency: 70 },
  { name: "Git", proficiency: 85 },
  { name: "Docker", proficiency: 60 },
]

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (skillsRef.current) {
      gsap.utils.toArray(".skill-bar").forEach((bar: any) => {
        gsap.from(bar, {
          width: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
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
