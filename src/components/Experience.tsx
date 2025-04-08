"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const experienceData = [
  {
    title: "Software Development Engineer Intern",
    company: "Amazon",
    logo: "/amaz.webp?height=100&width=100",
    date: "May 2025 – August 2025",
    description:
      "Incoming summer 2025",
  },
  {
    title: "Technology Discovery Day",
    company: "Susquehanna",
    logo: "/sig.jpeg?height=100&width=100",
    date: "April 2025",
    description:
      "",
  },
  {
    title: "Software Engineer",
    company: "Smartrip.Ai",
    link: "https://smartrip.ai",
    logo: "/smartrip_logo.png?height=100&width=100",
    date: "November 2024 – Present",
    description:
      "Architected a Flask-based backend integrating OpenAI's ChatGPT API for intelligent, context-aware chatbot interactions. Streamlined API performance with asynchronous processing, reducing response latency by 35%.",
  },
  {
    title: "Software Engineer",
    company: "Disruption Lab at Gies",
    logo: "/gi.jpeg?height=100&width=100",
    date: "February 2024 – Present",
    description:
      "",
  },
  {
    title: "Senior Software Consultant",
    company: "CUBE Consulting",
    logo: "/cube.jpeg?height=150&width=150",
    date: "January 2024 – December 2024",
    description:
      "Collaboratively built and deployed a custom UI application to a Jetson Nano microcomputer for detecting engraved leather part numbers. Implemented AWS IOT infrastructure to manage dynamic application workloads.",
  },
  {
    title: "UpSkill Technology Pathway",
    company: "Visa",
    logo: "/visa-l1.png?height=100&width=100",
    date: "May 2024",
    description:
      "",
  },
  {
    title: "Coding Instructor",
    company: "Grainger College of Engineering",
    logo: "/illinois_cs.png?height=100&width=100",
    date: "January 2024 – May 2024",
    description:
      "Supported 30+ students by leading lab and exam preparation sessions and hosting office hours to teach core Java programming concepts and Android Studio app development.",
  },
]

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (timelineRef.current) {
      gsap.utils.toArray(".timeline-item").forEach((item) => {
        const element = item as HTMLElement; // Explicitly cast `item` to HTMLElement
        const index = Number(element.dataset.index || 0); // Parse `dataset.index` to a number
        gsap.from(element, {
          opacity: 0,
          x: gsap.utils.wrap([-50, 50])(index),
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);
  

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary transform -translate-x-1/2"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item mb-16" data-index={index}>
              <div className="relative p-6 bg-secondary rounded-lg shadow-lg text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 mb-4 relative">
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.company} logo`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <h4 className="text-xl text-primary">
                      <a
                        href={item.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.company}
                      </a>
                    </h4>

                    <p className="text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <p className="mt-4">{item.description}</p>
                {/* <div className="absolute top-10 left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 -translate-y-1/2"></div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
