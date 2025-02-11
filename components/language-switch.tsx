"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function LanguageSwitch() {
  const [language, setLanguage] = useState("en")
  const router = useRouter()

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    router.refresh()
  }

  return (
    <Button variant="outline" onClick={toggleLanguage}>
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}

