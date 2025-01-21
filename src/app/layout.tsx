import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const inter = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Farhan Chowdhury - Portfolio",
  description: "Personal portfolio of Farhan Chowdhury, showcasing skills and projects in software engineering and AI.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

