"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, TrendingUp, BarChart } from "lucide-react"
import { ProjectNav } from "@/components/project-nav"

export default function MarketingPage() {
  return (
    <div className="min-h-screen">
      <ProjectNav projectName="Marketing Agency" />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-10" />
        <motion.div
          className="container text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Grow Your Business With Digital Marketing</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help businesses reach their full potential through strategic digital marketing solutions
          </p>
          <Button size="lg" className="mr-4">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "SEO Optimization",
                description: "Improve your search engine rankings and drive organic traffic",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Social Media Marketing",
                description: "Engage with your audience across all social platforms",
              },
              {
                icon: <BarChart className="h-8 w-8" />,
                title: "Analytics & Reporting",
                description: "Get detailed insights about your marketing performance",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 text-center">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

