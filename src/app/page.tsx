"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Portfolio from "../components/Portfolio"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Animate sections on scroll
    gsap.utils.toArray("section").forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    })
  }, [])

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

