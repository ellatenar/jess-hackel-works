import * as React from "react"
import { attributes, react as ExperienceContent } from "content/experience.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"

export default function Experience() {
  const { title, accent } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <ExperienceContent />
      </main>
      <Squiggles page="experience" />
    </>
  )
}
