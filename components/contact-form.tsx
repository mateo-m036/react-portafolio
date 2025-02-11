"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface ContactFormProps {
  language: string
}

export function ContactForm({ language }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(language)

  useEffect(() => {
    setCurrentLanguage(language)
  }, [language])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) throw new Error("Failed to send message")

      toast.success(currentLanguage === "en" ? "Message sent successfully!" : "¡Mensaje enviado con éxito!")
      setIsOpen(false)
      e.currentTarget.reset()
    } catch (error) {
      toast.error(
        currentLanguage === "en"
          ? "Failed to send message. Please try again."
          : "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      )
    }
    setLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300"
        >
          {currentLanguage === "en" ? "Get in Touch" : "Contáctame"}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-card rounded-lg shadow-lg">
              <div>
                <Input
                  name="name"
                  placeholder={currentLanguage === "en" ? "Your Name" : "Tu Nombre"}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={currentLanguage === "en" ? "Your Email" : "Tu Email"}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={currentLanguage === "en" ? "Your Message" : "Tu Mensaje"}
                  required
                  className="w-full min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading
                  ? currentLanguage === "en"
                    ? "Sending..."
                    : "Enviando..."
                  : currentLanguage === "en"
                    ? "Send Message"
                    : "Enviar Mensaje"}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

