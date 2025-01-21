"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("farhantchowdhury@gmail.com")
    alert("Email copied to clipboard!")
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-xl mb-4">Or reach out directly:</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-lg">farhantchowdhury@gmail.com</span>
              <button
                onClick={handleCopyEmail}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded transition duration-300"
              >
                Copy Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

