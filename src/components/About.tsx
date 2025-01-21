const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4 text-center">
            Hi, my name is Farhan Chowdhury, and I am a student studying Computer Science
            at the University of Illinois Urbana-Champaign in the Grainger College of Engineering. 
            I am passionate about leveraging technology to solve complex problems and create meaningful solutions. 
            With a strong foundation in software engineering and AI, my interest lies deeply in automation technologies that make day-to-day life more simple.
          </p>
          <p className="text-lg mb-4">
            Bachelor of Science in Computer Science; Dual Minor in Mathematics and Statistics
          </p>
          <p className="text-lg mb-4">GPA: 3.9/4.0</p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-xl my-8 text-muted-foreground">
            &quot;The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.&quot; – Stephen Hawking
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
