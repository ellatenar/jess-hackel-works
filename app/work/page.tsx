import * as React from "react"
import { attributes, react as WorkContent } from "content/work.md"
import Header from "../components/Header"
import Squiggles from "../components/Squiggles"
import Grid from "../components/Grid"
import styles from "./Work.module.css"

export default function Work() {
  const { title, accent, projects, underGridContent } = attributes
  return (
    <>
      <main>
        <Header title={title} accent={accent} />
        <WorkContent />
        <Grid cards={projects} />
        <div className={styles.underGridContent}>{underGridContent}</div>
      </main>
      <Squiggles page="work" />
    </>
  )
}
