import type React from "react"
import type { Metadata } from "next"
import { inter, playfair, montserrat, oswald } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Matteo Pellino - Visual Storyteller",
  description: "Professional Photographer specializing in Portrait, Travel, and Aerial Photography",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${oswald.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
