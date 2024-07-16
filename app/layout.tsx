import React from "react"
import { absans } from "./fonts"
import "./globals.css"
import Nav from "./components/Nav"

export const metadata = {
  title: "Jess Hackel",
  description: "Jess Hackel works",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={absans.className}>
        <div className="container">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
