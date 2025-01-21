"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || ""
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border flex flex-row items-center lg:justify-between">
      <h1 className="ml-10 tracking-tight text-xl italic font-bold  bg-gradient-to-r to-purple-400 from-blue-400 text-transparent bg-clip-text pr-1 text-center">
        <a href="#hero">
        Farhan Chowdhury
        </a>
      </h1>
      <ul className="hidden lg:flex justify-center py-4">
        {["about", "experience", "portfolio", "skills", "contact"].map((section) => (
          <li key={section} className="mx-4">
            <Link href={`#${section}`}>
              <span
                className={`text-lg font-semibold transition-colors duration-300 ${activeSection === section ? "text-primary" : "text-muted-foreground hover:text-primary-foreground"}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

