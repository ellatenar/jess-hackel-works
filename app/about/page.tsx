import * as React from "react"
import { attributes, react as AboutContent } from "content/about.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"

export default function About() {
  const { title, accent } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <AboutContent />
      </main>
      <Squiggles page="about" />
    </>
  )
}
