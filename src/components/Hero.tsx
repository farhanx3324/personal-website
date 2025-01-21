"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

const Hero = () => {
  const dynamicTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const words = ["Software Engineering", "AI and Machine Learning", "Backend Development", "Automation", "Data Science", "Computer Vision"]
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const currentWord = words[wordIndex]
      const currentChar = currentWord.substring(0, charIndex)

      if (dynamicTextRef.current) {
        dynamicTextRef.current.textContent = currentChar
        dynamicTextRef.current.classList.add("stop-blinking")
      }

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++
        setTimeout(typeEffect, 200)
      } else if (isDeleting && charIndex > 0) {
        charIndex--
        setTimeout(typeEffect, 100)
      } else {
        isDeleting = !isDeleting
        if (dynamicTextRef.current) {
          dynamicTextRef.current.classList.remove("stop-blinking")
        }
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
        setTimeout(typeEffect, 1200)
      }
    }

    typeEffect()

    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary"
    >
      <div className="hero-content text-center">
        <Image
          src="/headshot.jpeg"
          alt="Farhan Chowdhury"
          width={500}
          height={500}
          className="rounded-full border-4 border-blue-400 h-[400px] w-[400px] mb-8 mx-auto object-cover"
        />
        <h1 className="text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r to-purple-400 from-blue-400 text-transparent bg-clip-text">Farhan Chowdhury</h1>
        <p className="text-2xl mb-8">
          I am interested in <span ref={dynamicTextRef} className="text-primary font-bold bg-gradient-to-r to-purple-400 from-blue-400 text-transparent bg-clip-text"></span>
        </p>
        <a
          href="#about"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}

export default Hero

