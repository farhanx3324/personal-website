"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const portfolioData = [
  {
    title: "CrownTrade",
    description: "Full-stack web application to predict and display future stock prices",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["React.js", "Flask", "JavaScript", "Pandas", "XGBoost"],
  },
  {
    title: "Automated Foosball Table",
    description: "Custom foosball table with goal detection and customized game modes",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    skills: ["C++", "Arduino", "PIR Sensors", "Fusion 360"],
  },
]

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (portfolioRef.current) {
      gsap.utils.toArray(".portfolio-item").forEach((item: any) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
        <div ref={portfolioRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              className="portfolio-item bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={"/pattern.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Skills Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-block bg-sky-400 hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

