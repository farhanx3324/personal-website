const dynamicText = document.getElementById("dynamic-text")
const words = ["Software Engineering", "AI and Machine Learning", "Web Development", "Data Science"]
let wordIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect() {
  const currentWord = words[wordIndex]
  const currentChar = currentWord.substring(0, charIndex)
  dynamicText.textContent = currentChar
  dynamicText.classList.add("stop-blinking")

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++
    setTimeout(typeEffect, 200)
  } else if (isDeleting && charIndex > 0) {
    charIndex--
    setTimeout(typeEffect, 100)
  } else {
    isDeleting = !isDeleting
    dynamicText.classList.remove("stop-blinking")
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
    setTimeout(typeEffect, 1200)
  }
}

typeEffect()

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Navbar highlight
const sections = document.querySelectorAll("section")
const navItems = document.querySelectorAll("#navbar a")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id")
    }
  })

  navItems.forEach((item) => {
    item.classList.remove("active")
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active")
    }
  })
})

// Experience timeline
const experienceData = [
  {
    title: "Founding Software Engineer",
    company: "Smartrip.Ai",
    date: "November 2024 – Present",
    description: "Architected a Flask-based backend integrating OpenAI's ChatGPT API...",
  },
  {
    title: "Senior Software Consultant",
    company: "CUBE Consulting",
    date: "January 2024 – December 2024",
    description: "Collaboratively built and deployed a custom UI application...",
  },
  {
    title: "AI Software Engineer",
    company: "Outlier AI",
    date: "March 2024 – August 2024",
    description:
      "Engineered 200+ Python and JavaScript code prompts to train and fine tune LLMs for 3 fortune 500 companies",
  },
  {
    title: "Coding Instructor",
    company: "Grainger College of Engineering",
    date: "January 2024 – May 2024",
    description: "Supported 30+ students by leading lab and exam preparation sessions...",
  },
]

const timeline = document.querySelector(".timeline")

experienceData.forEach((item, index) => {
  const timelineItem = document.createElement("div")
  timelineItem.classList.add("timeline-item", index % 2 === 0 ? "left" : "right")
  timelineItem.innerHTML = `
        <div class="timeline-content">
            <h3>${item.title}</h3>
            <h4>${item.company}</h4>
            <p>${item.date}</p>
            <p>${item.description}</p>
        </div>
    `
  timeline.appendChild(timelineItem)
})

// Portfolio projects
const portfolioData = [
  {
    title: "CrownTrade",
    description: "Full-stack web application to predict and display future stock prices",
    image: "path/to/crowntrade-image.jpg",
    link: "#",
  },
  {
    title: "Automated Foosball Table",
    description: "Custom foosball table with goal detection and customized game modes",
    image: "path/to/foosball-image.jpg",
    link: "#",
  },
]

const portfolioGrid = document.querySelector(".portfolio-grid")

portfolioData.forEach((project) => {
  const portfolioItem = document.createElement("div")
  portfolioItem.classList.add("portfolio-item")
  portfolioItem.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="portfolio-item-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        </div>
    `
  portfolioGrid.appendChild(portfolioItem)
})

// Skills
const skillsData = [
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "🌐" },
  { name: "React", icon: "⚛️" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Data Science", icon: "📊" },
]

const skillsContainer = document.querySelector(".skills-container")

skillsData.forEach((skill) => {
  const skillItem = document.createElement("div")
  skillItem.classList.add("skill-item")
  skillItem.innerHTML = `
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-name">${skill.name}</div>
    `
  skillsContainer.appendChild(skillItem)
})

// Contact form submission
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  // Add your form submission logic here
  alert("Thank you for your message! I will get back to you soon.")
  contactForm.reset()
})

// Copy email to clipboard
const emailButton = document.getElementById("copy-email")
const emailText = document.getElementById("email")

emailButton.addEventListener("click", () => {
  navigator.clipboard.writeText(emailText.textContent).then(() => {
    emailButton.textContent = "Copied!"
    setTimeout(() => {
      emailButton.textContent = "Copy"
    }, 2000)
  })
})

// GSAP Animations
gsap.registerPlugin(ScrollTrigger)

// Hero section animation
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
})

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section) => {
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

// Animate timeline items
gsap.utils.toArray(".timeline-item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    x: item.classList.contains("left") ? -50 : 50,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  })
})

// Animate portfolio items
gsap.utils.toArray(".portfolio-item").forEach((item) => {
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

// Animate skill items
gsap.utils.toArray(".skill-item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  })
})

