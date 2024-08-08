import * as React from "react"
import { attributes, react as HomeContent } from "content/home.md"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Squiggles from "./components/Squiggles"

export default function Home() {
  const { title, accent } = attributes

  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <HomeContent />
      </main>
      <Squiggles page="home" />
      <Footer />
    </>
  )
}
