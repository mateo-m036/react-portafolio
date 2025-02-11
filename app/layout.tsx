import { Inter } from "next/font/google"
import { LanguageSwitch } from "@/components/language-switch"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Creative Developer Portfolio",
  description: "Portfolio showcasing web development projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitch />
        </div>
        {children}
      </body>
    </html>
  )
}

