"use client"
import React from "react"
import { attributes, react as HomeContent } from "../content/home.md"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="container">
      <Nav />

      <main>
        <h1>
          <span>₪</span>
          <span>Jess Hackel</span>
          <span></span>
        </h1>
      </main>

      <Footer />
    </div>
  )
}
