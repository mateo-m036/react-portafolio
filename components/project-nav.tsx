"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ProjectNav({ projectName }: { projectName: string }) {
  return (
    <motion.div
      className="fixed top-4 left-4 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Button variant="outline" size="sm" asChild>
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </Button>
      <span className="ml-4 text-sm font-medium text-muted-foreground">{projectName}</span>
    </motion.div>
  )
}

