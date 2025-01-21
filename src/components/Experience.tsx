"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const experienceData = [
  {
    title: "Founding Software Engineer",
    company: "Smartrip.Ai",
    logo: "/placeholder.svg?height=100&width=100",
    date: "November 2024 – Present",
    description:
      "Architected a Flask-based backend integrating OpenAI's ChatGPT API for intelligent, context-aware chatbot interactions. Streamlined API performance with asynchronous processing, reducing response latency by 35%.",
  },
  {
    title: "Senior Software Consultant",
    company: "CUBE Consulting",
    logo: "/placeholder.svg?height=100&width=100",
    date: "January 2024 – December 2024",
    description:
      "Collaboratively built and deployed a custom UI application to a Jetson Nano microcomputer for detecting engraved leather part numbers. Implemented AWS IOT infrastructure to manage dynamic application workloads.",
  },
  {
    title: "AI Software Engineer",
    company: "Outlier AI",
    logo: "/placeholder.svg?height=100&width=100",
    date: "March 2024 – August 2024",
    description:
      "Engineered 200+ Python and JavaScript code prompts to train and fine-tune LLMs for 3 Fortune 500 companies. Collaborated with tech leads to review new Java, SQL, and HTML prompts and receive implementation feedback.",
  },
  {
    title: "Coding Instructor",
    company: "Grainger College of Engineering",
    logo: "/placeholder.svg?height=100&width=100",
    date: "January 2024 – May 2024",
    description:
      "Supported 30+ students by leading lab and exam preparation sessions and hosting office hours to teach core Java programming concepts and Android Studio app development.",
  },
]

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (timelineRef.current) {
      gsap.utils.toArray(".timeline-item").forEach((item: any, index: number) => {
        gsap.from(item, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary transform -translate-x-1/2"></div>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item mb-16 ${index % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:ml-auto"}`}
            >
              <div
                className={`relative p-6 bg-secondary rounded-lg shadow-lg ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}
              >
                <div className="flex flex-col lg:flex-row items-center mb-4">
                  <div className="w-20 h-20 mb-4 lg:mb-0 lg:mr-4 relative">
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.company} logo`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full"
                    />
                  </div>
                  <div className={`text-center lg:text-left ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <h4 className="text-xl text-primary">{item.company}</h4>
                    <p className="text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <p className={`mt-4 ${index % 2 === 0 ? "lg:text-right" : ""}`}>{item.description}</p>
                <div
                  className={`absolute top-10 ${index % 2 === 0 ? "lg:-right-4" : "lg:-left-4"} w-8 h-8 bg-primary rounded-full border-4 border-background hidden lg:block`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

