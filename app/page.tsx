import React from "react"
import { attributes, react as HomeContent } from "../content/home.md"

import Nav from "../components/Nav"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="container">
      <Nav />

      <main>
        <Header text="Welcome to my portfolio!" />
      </main>

      <Footer />
    </div>
  )
}
