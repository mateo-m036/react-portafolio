"use client"

import { motion } from "framer-motion"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "./contact-form"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const handleLanguageChange = () => {
      const storedLanguage = localStorage.getItem("language")
      if (storedLanguage) {
        setLanguage(storedLanguage)
      }
    }

    window.addEventListener("storage", handleLanguageChange)
    handleLanguageChange() // Initial check

    return () => {
      window.removeEventListener("storage", handleLanguageChange)
    }
  }, [])

  const projects = [
    {
      id: "1",
      title: language === "en" ? "E-commerce Platform" : "Plataforma de Comercio Electrónico",
      description:
        language === "en"
          ? "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration."
          : "Una plataforma de comercio electrónico full-stack construida con Next.js, TypeScript e integración de Stripe.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "/projects/e-commerce",
      github: "#",
    },
    {
      id: "2",
      title: language === "en" ? "Marketing Agency" : "Agencia de Marketing",
      description:
        language === "en"
          ? "Modern and responsive landing page for a digital marketing agency."
          : "Página de aterrizaje moderna y responsive para una agencia de marketing digital.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      link: "/projects/marketing",
      github: "#",
    },
    {
      id: "3",
      title: language === "en" ? "Analytics Dashboard" : "Panel de Análisis",
      description:
        language === "en"
          ? "Interactive dashboard with real-time data visualization."
          : "Panel interactivo con visualización de datos en tiempo real.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Recharts", "Tailwind CSS"],
      link: "/projects/dashboard",
      github: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-24 text-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          {language === "en" ? "Creative Developer" : "Desarrollador Creativo"}
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {language === "en"
            ? "Passionate about crafting beautiful and functional web experiences. With a keen eye for design and a love for clean code, I bring ideas to life."
            : "Apasionado por crear experiencias web hermosas y funcionales. Con un ojo agudo para el diseño y un amor por el código limpio, doy vida a las ideas."}
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "en" ? "Skills & Technologies" : "Habilidades y Tecnologías"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Framer Motion", "Figma"].map(
            (skill, index) => (
              <motion.div
                key={skill}
                className="flex items-center justify-center p-4 bg-secondary rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-medium">{skill}</span>
              </motion.div>
            ),
          )}
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {language === "en" ? "Featured Projects" : "Proyectos Destacados"}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="overflow-hidden cursor-pointer h-full flex flex-col">
                <Link href={project.link} className="flex-shrink-0">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-auto">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-2 h-4 w-4" />
                        {language === "en" ? "Code" : "Código"}
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.link}>
                        <ExternalLinkIcon className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="container mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Let's Work Together" : "Trabajemos Juntos"}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {language === "en"
            ? "I'm currently available for freelance projects and remote positions. If you're interested in working together, feel free to reach out!"
            : "Actualmente estoy disponible para proyectos freelance y posiciones remotas. Si estás interesado en trabajar juntos, ¡no dudes en contactarme!"}
        </p>
        <ContactForm language={language} />
      </motion.section>
    </main>
  )
}

