import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "Portfolio showcasing web development projects and skills",
}

export default function Page() {
  return <Portfolio />
}

