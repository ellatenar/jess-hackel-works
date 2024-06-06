import React from "react"
import { absans } from "./fonts"
import "./globals.css"

export const metadata = {
  title: "Jess Hackel",
  description: "TODO add description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={absans.className}>{children}</body>
    </html>
  )
}
