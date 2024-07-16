import * as React from "react"
import { attributes, react as WorkContent } from "content/work.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"
import Grid from "../components/Grid"

export default function Work() {
  const { title, accent, cards, underGridContent } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <WorkContent />
        <Grid cards={cards} />
        <div>{underGridContent}</div>
      </main>
      <Squiggles page="work" />
    </>
  )
}
