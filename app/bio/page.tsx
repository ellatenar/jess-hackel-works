import * as React from "react"
import { attributes, react as BioContent } from "content/bio.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"

export default function Bio() {
  const { title, accent } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <BioContent />
      </main>
      <Squiggles page="bio" />
    </>
  )
}
