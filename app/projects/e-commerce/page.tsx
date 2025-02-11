"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectNav } from "@/components/project-nav"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Portable Charger",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
  },
]

export default function EcommercePage() {
  const [cart, setCart] = useState<number[]>([])
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

  return (
    <div className="min-h-screen bg-background">
      <ProjectNav projectName={language === "en" ? "E-commerce Project" : "Proyecto de Comercio Electrónico"} />
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">TechStore</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80" href="#products">
                {language === "en" ? "Products" : "Productos"}
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#categories">
                {language === "en" ? "Categories" : "Categorías"}
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#deals">
                {language === "en" ? "Deals" : "Ofertas"}
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1">
                  {cart.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <motion.h1 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {language === "en" ? "Featured Products" : "Productos Destacados"}
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                  <Button className="w-full mt-4" onClick={() => setCart([...cart, product.id])}>
                    {language === "en" ? "Add to Cart" : "Añadir al Carrito"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

