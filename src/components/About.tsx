const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">University of Illinois Urbana-Champaign - Grainger College of Engineering</p>
          <p className="text-lg mb-4">
            Bachelor of Science in Computer Science; Dual Minor in Mathematics and Statistics
          </p>
          <p className="text-lg mb-4">GPA: 3.91/4.00</p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-xl my-8 text-muted-foreground">
            "Passionate about leveraging technology to solve complex problems and create innovative solutions."
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About

